import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdAssignmentAdd } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {disease, category, pet, symptoms, _id, price} = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const serviceItem = {
                disease: data.disease,
                category: data.category,
                pet: data.pet,
                price: parseFloat(data.price),
                symptoms: data.symptoms,
                image: res.data.data.display_url
            }
            const serviceRes = await axiosSecure.patch(`/services/${_id}`, serviceItem);
            console.log(serviceRes)
            if (serviceRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Service Updated.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div>
            <SectionTitle heading={"Update Item"} subHeading={"Refresh Item"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>\

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Disease name*</span>
                            </div>
                            <input defaultValue={disease} {...register("disease")} type="text" placeholder="disease name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={price} {...register("price")} type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full max-w-xs">
                                <option disabled value="default">Select a category.</option>
                                <option value="popular">popular</option>
                                <option value="regular">regular</option>
                            </select>
                        </div>
                        {/* pet */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Pet*</span>
                            </div>
                            <select defaultValue={pet} {...register("pet")} className="select select-bordered w-full max-w-xs">
                                <option disabled value="default">Select a pet.</option>
                                <option value="cat">cat</option>
                                <option value="dog">dog</option>
                                <option value="bird">bird</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                    {/* symptoms */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Symptoms</span>
                            </div>
                            <textarea defaultValue={symptoms} {...register("symptoms")} className="textarea textarea-bordered h-24" placeholder="symptoms"></textarea>
                        </label>
                    </div>
                    {/* image */}
                    <div className="form-control w-full my-6">
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Update Service <MdAssignmentAdd className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;