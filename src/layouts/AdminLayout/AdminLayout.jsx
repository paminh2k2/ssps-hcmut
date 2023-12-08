import { Route, Routes } from "react-router-dom";
import ConfigSystem from "../../component/ConfigSystem";
import HeaderAdmin from '../../component/HeaderAdmin';
import HomeAdmin from "../../component/HomeAdmin";
import LogAdmin from "../../component/LogAdmin/LogAdmin";
import Printer from "../../component/Printer/Printer";
import PrinterHis_H1 from "../../component/PrinterHis_H1/PrinterHis_H1";
import PrinterHis_H2 from "../../component/PrinterHis_H2";
import PrinterHis_H3 from "../../component/PrinterHis_H3";
import PrinterHis_H6 from "../../component/PrinterHis_H6";
import PrinterList_H1 from "../../component/PrinterList_H1/PrinterList_H1";
import PrinterList_H2 from "../../component/PrinterList_H2/PrinterList_H2";
import PrinterList_H3 from "../../component/PrinterList_H3/PrinterList_H3";
import PrinterList_H6 from "../../component/PrinterList_H6/PrinterList_H6";
function AdminLayout() {
    return (<div>
        <HeaderAdmin/>
        <Routes>
            <Route path={""} element={<HomeAdmin/>} />
            <Route path={"config-system"} element={<ConfigSystem/>} />
            <Route path={"log"} element={<LogAdmin/>} />
            <Route path={"printer"} element={<Printer/>}/>
            <Route path="printerlist_H1" element={<PrinterList_H1/>}/>
            <Route path="printerlist_H2" element={<PrinterList_H2/>}/>
            <Route path="printerlist_H3" element={<PrinterList_H3/>}/>
            <Route path="printerlist_H6" element={<PrinterList_H6/>}/>
            <Route path={"printerhis"} element={<Printer/>}/>
            <Route path="printerhis_H1" element={<PrinterHis_H1/>}/>
            <Route path="printerhis_H2" element={<PrinterHis_H2/>}/>
            <Route path="printerhis_H3" element={<PrinterHis_H3/>}/>
            <Route path="printerhis_H6" element={<PrinterHis_H6/>}/>
        </Routes>
    </div>);
}

export default AdminLayout;

