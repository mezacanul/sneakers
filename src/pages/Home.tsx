import Preview from "../components/Home/Preview";
import ProductDetails from "../components/Home/ProductDetails";
import { useResponsive } from "../hooks/useResponsive";
import Carousel from "../components/Home/Carousel";

export default function Home() {
    return (
        <div className="h-[100%] flex flex-col sm:grid sm:grid-cols-2 sm:items-center gap-[2rem] sm:gap-[5rem] 2xl:gap-[8rem]">
            {useResponsive([<Carousel />, <Preview />])}
            <ProductDetails />
        </div>
    );
}
