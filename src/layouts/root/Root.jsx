import { Outlet } from "react-router-dom";
import Nav from "../../shared/nav/Nav";
import Footer from "../../shared/footer/Footer";



const Root = () => {
    return (
        <div>
            {/* navber */}
            <Nav></Nav>

            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]"> 
                <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;