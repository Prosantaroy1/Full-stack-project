import { Outlet } from "react-router";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;