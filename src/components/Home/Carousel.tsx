import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

export default function Carousel() {
    return (
        <div className="relative w-full h-90">
            <img
                src="/images/image-product-1.jpg"
                alt="carousel"
                className="w-full h-full object-cover"
            />
            <Buttons />
        </div>
    );
}

function Buttons() {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-3">
            <button className="text-xl bg-white rounded-full p-3">
                <FaChevronLeft />
            </button>
            <button className="text-xl bg-white rounded-full p-3">
                <FaChevronRight />
            </button>
        </div>
    );
}
