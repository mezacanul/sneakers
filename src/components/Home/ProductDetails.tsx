import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { cn } from "../../utils/cn";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/features/cartSlice";

export default function ProductDetails() {
    return (
        <div className="flex flex-col gap-5 sm:gap-8 px-[2rem] sm:px-[0rem] pb-5 sm:pb-0">
            <ProductTitle />
            <ProductDescriptionAndPrice />
            <Actions />
        </div>
    );
}

function ProductTitle() {
    const { company, title } = productDetails;
    return (
        <div className="flex flex-col gap-2">
            <b className="text-dark-grayish-blue text-sm uppercase tracking-widest">
                {company}
            </b>
            <h1 className="text-very-dark-blue text-[2.2rem]/[1.2] sm:text-[3rem]/[1] font-bold">
                {title}
            </h1>
        </div>
    );
}

function ProductDescriptionAndPrice() {
    const { description, price, discount, originalPrice } =
        productDetails;
    return (
        <div className="flex flex-col">
            <p className="text-dark-grayish-blue text-base leading-relaxed mb-5">
                {description}
            </p>
            <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-4">
                <div className="flex items-center gap-3">
                    <h1 className="text-very-dark-blue text-2xl/[1] font-bold tracking-wider">
                        {`$${price.toFixed(2)}`}
                    </h1>
                    <span className="bg-black text-white text-sm px-3 py-1 rounded-md font-bold">{`${discount}%`}</span>
                </div>
                <p className="text-dark-grayish-blue text-base line-through font-bold">{`$${originalPrice.toFixed(
                    2
                )}`}</p>
            </div>
        </div>
    );
}

function Actions() {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(setCart(quantity));
    };

    const btnClasses = cn(
        "bg-orange shadow-lg sm:shadow-md cursor-pointer h-full w-full sm:w-100 flex items-center justify-center text-lg sm:text-base font-bold px-6 py-4 rounded-lg hover:bg-orange/80 transition-all duration-300 gap-2",
        quantity === 0 && "opacity-50 cursor-not-allowed"
    );
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 h-[3.5rem]">
            <QuantityPicker
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <button
                className={btnClasses}
                onClick={handleAddToCart}
                disabled={quantity === 0}
            >
                <span>
                    <BsCart3 />
                </span>
                <span>{"Add to Cart"}</span>
            </button>
        </div>
    );
}

function QuantityPicker({
    quantity,
    setQuantity,
}: {
    quantity: number;
    setQuantity: (quantity: number) => void;
}) {
    function handleChange(type: "-" | "+") {
        if (type === "-") {
            if (quantity === 1) return;
            setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }
    const btnClasses =
        "h-full px-4 py-4 sm:py-0 bg-light-grayish-blue text-orange text-[2rem]/[0] sm:text-2xl/[1] font-bold tracking-wider";
    return (
        <div className="flex items-center h-full w-full sm:w-auto shadow-md rounded-lg">
            <button
                className={cn(
                    "cursor-pointer",
                    btnClasses,
                    quantity === 1 &&
                        "opacity-50 cursor-not-allowed"
                )}
                disabled={quantity === 1}
                onClick={() => handleChange("-")}
            >
                {"-"}
            </button>
            <span
                className={cn(
                    btnClasses,
                    "flex items-center justify-center text-lg text-black",
                    "w-full sm:w-auto"
                )}
            >
                {quantity}
            </span>
            <button
                className={cn(
                    "cursor-pointer",
                    btnClasses,
                    quantity === 10 &&
                        "opacity-50 cursor-not-allowed"
                )}
                disabled={quantity === 10}
                onClick={() => handleChange("+")}
            >
                {"+"}
            </button>
        </div>
    );
}
const productDetails = {
    company: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    discount: 50,
    originalPrice: 250.0,
};
