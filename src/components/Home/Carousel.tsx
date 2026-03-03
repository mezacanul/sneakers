import { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-90 overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ 
                    transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
                    width: `${images.length * 100}%`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="h-full flex-shrink-0 relative"
                        style={{ width: `${100 / images.length}%` }}
                    >
                        <img
                            src={image}
                            alt={`carousel ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ display: 'block' }}
                        />
                    </div>
                ))}
            </div>
            <Buttons onPrevious={goToPrevious} onNext={goToNext} />
        </div>
    );
}

function Buttons({
    onPrevious,
    onNext,
}: {
    onPrevious: () => void;
    onNext: () => void;
}) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-3">
            <button
                onClick={onPrevious}
                className="text-xl bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
                aria-label="Previous image"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={onNext}
                className="text-xl bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
                aria-label="Next image"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
