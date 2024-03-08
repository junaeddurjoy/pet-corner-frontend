import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const TreatmentCard = ({ item }) => {
    const { disease, symptoms, image, price, pet, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = treatment => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.emaail,
                disease,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Added to cart.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in.",
                text: "Please login to add to cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(('/login', { state: { from: location } }))
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                <figure><img className="w-96 h-[280px]" src={image} alt={pet} /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-1 opacity-70">${price}</p>
                <div className="card-body text-center">
                    <p className="text-xl font-bold">{disease}</p>
                    <p>{symptoms}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="btn btn-outline border-0 border-b-4  bg-base-300 text-orange-500">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;