import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { MdAssignmentAdd } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
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
            const serviceRes = await axiosSecure.post('/services', serviceItem);
            console.log(serviceRes)
            if (serviceRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New Service Added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"What's new?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>\

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Disease name*</span>
                            </div>
                            <input {...register("disease")} type="text" placeholder="disease name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category")} className="select select-bordered w-full max-w-xs">
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
                            <select defaultValue="default" {...register("pet")} className="select select-bordered w-full max-w-xs">
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
                            <textarea {...register("symptoms")} className="textarea textarea-bordered h-24" placeholder="symptoms"></textarea>
                        </label>
                    </div>
                    {/* image */}
                    <div className="form-control w-full my-6">
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Service <MdAssignmentAdd className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;