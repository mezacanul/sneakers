import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="lg:mx-[8rem] h-screen">
            <Header />
            <div className="lg:mx-[0rem] xl:mx-[4rem] 2xl:mx-[8rem] my-[0rem] sm:my-[4rem] h-[auto] sm:h-[75vh]">
                <Outlet />
            </div>
        </div>
    );
}
