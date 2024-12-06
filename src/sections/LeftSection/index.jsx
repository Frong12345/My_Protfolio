import Contect from "../Contect";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
    return (
        <div>
            <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]'>
                <Header/>
                <Navbar/>
                <Contect/>
            </div>
      </div>
    )
}

export default LeftSection;