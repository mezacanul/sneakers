export default function Preview() {
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
                {thumbnails.map((thumbnail) => (
                    <Thumbnail
                        key={thumbnail.src}
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                    />
                ))}
            </div>
        </div>
    );
}

function Thumbnail({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <img
            className="w-[5rem] h-[5rem] object-cover rounded-lg"
            src={src}
            alt={alt}
        />
    );
}
