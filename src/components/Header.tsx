import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Header() {
    return (
        <div className="flex justify-between items-center pt-[2.5rem] border-b border-grayish-blue">
            <Navbar />
            <CartAndProfile />
        </div>
    );
}

function Navbar() {
    const navbarItems = [
        { title: "Collections" },
        { title: "Men" },
        { title: "Women" },
        { title: "About" },
        { title: "Contact" },
    ];
    return (
        <div className="flex items-center gap-[2rem]">
            <img
                className="-mt-1 me-5 pb-[2rem]"
                src="/images/logo.svg"
                alt="logo"
                width={150}
                height={25}
            />
            {navbarItems.map((item) => (
                <NavbarItem
                    key={item.title}
                    title={item.title}
                />
            ))}
        </div>
    );
}

function NavbarItem({ title }: { title: string }) {
    return (
        <span className="text-dark-grayish-blue hover:text-very-dark-blue cursor-pointer pb-[2rem] border-b-3 border-transparent hover:border-orange transition-all duration-300">
            {title}
        </span>
    );
}

function CartAndProfile() {
    return (
        <div className="flex items-center gap-[2.5rem] -mt-[2rem]">
            <Cart />
            <img
                src="/images/image-avatar.png"
                alt="profile"
                width={50}
                height={50}
                className="hover:border-3 hover:border-orange rounded-full transition-all duration-100 cursor-pointer"
            />
        </div>
    );
}

function Cart() {
    const quantity = useSelector(
        (state: RootState) => state.cart.quantity
    );
    return (
        <div className="relative">
            <span className="text-2xl text-dark-grayish-blue hover:text-very-dark-blue cursor-pointer transition-all duration-300">
                <BsCart3 />
            </span>
            {quantity > 0 && (
                <div className="absolute -top-2 -right-3 bg-orange rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                    {quantity}
                </div>
            )}
        </div>
    );
}
