import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="mx-[8rem] h-screen">
            <Header />
            <div className="mx-[3rem] 2xl:mx-[8rem] my-[4rem] h-[75vh]">
                <Outlet />
            </div>
        </div>
    );
}
