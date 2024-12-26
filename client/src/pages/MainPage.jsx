import Webcard from "../components/WebCard";
import Navbar from "../components/Navbar";
import PythonCard from "../components/PythonCard";
import DS from "../components/DataScienceCard";
const MainPage =()=>
    {
        return (<>
        <Navbar/>
        <Webcard/>
        <br></br>
        <PythonCard/>
        <DS/>
        
        
        </>)
    }
    export default MainPage;