import Webcard from "../components/WebCard";
import NavbarInMain from "../components/NavbarInMain";
import PythonCard from "../components/PythonCard";
import DS from "../components/DataScienceCard";
const MainPage =()=>
    {
        return (<>
        <NavbarInMain/>
        <br></br>
    
        <Webcard/><br></br>
     
        <PythonCard/>
        <br></br>
        <DS/>
        
        
        </>)
    }
    export default MainPage;