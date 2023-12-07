import { Route, Routes } from "react-router-dom";
import ConfigSystem from "../../component/ConfigSystem";
import HeaderAdmin from '../../component/HeaderAdmin';
import HomeAdmin from "../../component/HomeAdmin";
import LogAdmin from "../../component/LogAdmin/LogAdmin";
import Printer from "../../component/Printer/Printer";
function AdminLayout() {
    return (<div>
        <HeaderAdmin/>
        <Routes>
            <Route path={""} element={<HomeAdmin/>} />
            <Route path={"config-system"} element={<ConfigSystem/>} />
            <Route path={"printer"} element={<Printer/>} />
            <Route path={"log"} element={<LogAdmin/>} />
        </Routes>
    </div>);
}

export default AdminLayout;

