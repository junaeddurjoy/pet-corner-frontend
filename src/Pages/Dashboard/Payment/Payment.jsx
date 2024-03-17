import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay for treatment"></SectionTitle>
            <div>
                <Elements stipe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;