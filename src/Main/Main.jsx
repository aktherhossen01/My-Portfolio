import { Outlet } from "react-router-dom";
import '../../src/index.css'

const Main = () => {
    return (
        <div  className="container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;