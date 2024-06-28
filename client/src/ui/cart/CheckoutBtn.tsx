import { ProductProps } from "../../../type";
import { store } from "../../lib/store";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
  products: ProductProps[];
  totalAmt: number;
}

const CheckoutBtn = ({ products, totalAmt }: Props) => {
  const { currentUser } = store();
  const publicKey =
    "pk_test_51PUPmnL6jpNBmX7vHK6Qcxros60pmqRDDrBvfZiECxUms8ip9LVEEiE9hkI3HOX7Dtqp42M0VRximtq5iq2CqeKd00RkHeYeYk";
  const stripePromise = loadStripe(publicKey);
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("https://store-tct9.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: products,
        totalAmt,
        email: currentUser?.email,
      }),
    });
    const checkoutSession = await response?.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Checkout
        </button>
      ) : (
        <p className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          Checkout
        </p>
      )}
    </div>
  );
};

export default CheckoutBtn;
