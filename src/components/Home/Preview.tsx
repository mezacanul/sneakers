import { useState } from "react";
import { cn } from "../../utils/cn";

export default function Preview() {
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbnails = [
        {
            src: "/images/image-product-1-thumbnail.jpg",
            alt: "preview",
        },
        {
            src: "/images/image-product-2-thumbnail.jpg",
            alt: "preview",
        },
        {
            src: "/images/image-product-3-thumbnail.jpg",
            alt: "preview",
        },
        {
            src: "/images/image-product-4-thumbnail.jpg",
            alt: "preview",
        },
    ];
    return (
        <div className="flex flex-col">
            <img
                className="w-full object-cover rounded-2xl mx-auto"
                src="/images/image-product-1.jpg"
                alt="preview"
            />

            <div className="flex justify-between w-full mx-auto py-[2rem]">
                {thumbnails.map((thumbnail, index) => (
                    <Thumbnail
                        key={thumbnail.src}
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </div>
    );
}

interface ThumbnailProps {
    src: string;
    alt: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

function Thumbnail({
    src,
    alt,
    index,
    activeIndex,
    setActiveIndex,
}: ThumbnailProps) {
    const classNames = {
        container: cn(
            "cursor-pointer rounded-lg overflow-hidden",
            index === activeIndex &&
                "border-3 border-orange"
        ),
        img: cn(
            "w-[5rem] h-[5rem] object-cover rounded",
            index === activeIndex && "opacity-50"
        ),
    };
    return (
        <div
            className={classNames.container}
            onClick={() => setActiveIndex(index)}
        >
            <img
                className={classNames.img}
                src={src}
                alt={alt}
            />
        </div>
    );
}
