
import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ContectUs from "../Pages/ContectUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import NotFound from "../Pages/NotFound";
import Navbar from "./Navbar";

export default function AllRoutes(){

    return (<>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contectus" element={<ContectUs/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/policy" element={<PrivacyPolicy/>}/>
                <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
    </>)
}
