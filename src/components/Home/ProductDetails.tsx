export default function ProductDetails() {
    return (
        <div className="flex flex-col gap-[1rem]">
            <ProductTitle />
            <ProductDescriptionAndPrice />
            <Actions />
        </div>
    );
}

function ProductTitle() {
    return (
        <div>
            <h1>ProductTitle</h1>
        </div>
    );
}

function ProductDescriptionAndPrice() {
    return (
        <div>
            <h1>ProductDescriptionAndPrice</h1>
        </div>
    );
}

function Actions() {
    return (
        <div>
            <h1>Actions</h1>
        </div>
    );
}
