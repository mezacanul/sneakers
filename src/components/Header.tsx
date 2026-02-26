import { BsCart3 } from "react-icons/bs";

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
            <span className="text-2xl">
                <BsCart3 />
            </span>
            <img
                src="/images/image-avatar.png"
                alt="profile"
                width={50}
                height={50}
            />
        </div>
    );
}
