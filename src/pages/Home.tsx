import Preview from "../components/Home/Preview";
import ProductDetails from "../components/Home/ProductDetails";

export default function Home() {
    return (
        <div 
            className="h-[100%] grid grid-cols-2 items-center gap-[5rem] 2xl:gap-[8rem]"
        >
            <Preview />
            <ProductDetails />
        </div>
    );
}
