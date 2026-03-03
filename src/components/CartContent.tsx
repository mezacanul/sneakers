import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { FaTrash } from "react-icons/fa";
import { useMemo } from "react";
import { resetCart } from "../store/features/cartSlice";

export default function CartContent() {
    const dispatch = useDispatch();
    const price = (125).toFixed(2);
    const quantity = useSelector(
        (state: RootState) => state.cart.quantity
    );
    const total = useMemo(() => {
        return (quantity * 125).toFixed(2);
    }, [quantity]);

    function handleEmptyCart() {
        dispatch(resetCart());
    }
    const classes = {
        container:
            "fixed sm:absolute left-1/2 top-25 transform -translate-x-1/2 sm:top-10 sm:-right-2 sm:left-auto sm:translate-x-0 bg-white rounded-md border border-grayish-blue w-100 sm:w-95 shadow-sm z-50",
        title: "py-3 px-4 font-bold border-b border-grayish-blue",
        content: "py-4 px-4 flex flex-col gap-4",
        product: "flex items-start justify-between gap-4",
        productImage: "w-16 h-16 object-cover rounded-md",
        productInfo:
            "flex flex-col gap-1 text-dark-grayish-blue",
        productPrice:
            "flex items-center justify-between gap-2",
        removeButton:
            "text-dark-grayish-blue hover:text-very-dark-blue transition-all duration-300 cursor-pointer mt-2",
        checkoutButton:
            "w-full py-3 px-2 bg-orange font-bold rounded-md hover:bg-orange/80 transition-all duration-300 cursor-pointer",
        emptyCart:
            "flex items-center justify-center h-20 text-dark-grayish-blue",
    };

    return (
        <div className={classes.container}>
            <p className={classes.title}>Cart</p>
            <div className={classes.content}>
                {quantity > 0 && (
                    <>
                        <div className={classes.product}>
                            <img
                                src="/images/image-product-1-thumbnail.jpg"
                                alt="product"
                                className={
                                    classes.productImage
                                }
                            />
                            <div
                                className={
                                    classes.productInfo
                                }
                            >
                                <h2>
                                    Fall Limited Edition
                                    Sneakers
                                </h2>
                                <div
                                    className={
                                        classes.productPrice
                                    }
                                >
                                    <span>
                                        ${price} x{" "}
                                        {quantity}
                                    </span>
                                    <span className="font-bold text-black">
                                        ${total}
                                    </span>
                                </div>
                            </div>
                            <button
                                className={
                                    classes.removeButton
                                }
                                onClick={handleEmptyCart}
                            >
                                <FaTrash />
                            </button>
                        </div>
                        <button
                            className={
                                classes.checkoutButton
                            }
                        >
                            Checkout
                        </button>
                    </>
                )}
                {quantity === 0 && (
                    <p className={classes.emptyCart}>
                        {"Your cart is empty."}
                    </p>
                )}
            </div>
        </div>
    );
}
