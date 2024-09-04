import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from 'react-stripe-checkout'

export const CheckoutForm = ({total, handlePaymentSuccess}) => {
    const dispatch = useDispatch();

    const handleToken = (token) => {
        handlePaymentSuccess();
        dispatch(clearCart());
    }
    return (
        <>
        <StripeCheckout
            token={handleToken}
            stripeKey=""
            amount={total * 100}
            name="SNU Merch Website"
            email="evan.kauh@gmail.com"
            description="Payment using test Stripe"
        >
            <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
                Pay ${total?.toFixed(2)}
            </button>
        </StripeCheckout>
        </>
    )
}