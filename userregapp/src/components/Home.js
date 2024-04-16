import React,{useState} from "react"
import { IoSearch} from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import {Drawer } from  "antd"
import { useLocation, useNavigation } from "react-router-dom"

function Home(props) {
    const location = useLocation()
    const [visible, setVisible] = useState(false);
    return(
        <div className="homepage">
             <div>
                <span style={{ fontSize : 20, color: "red"}}>E-com</span>
                <span><IoSearch id="helo"/><input type="text" placeholder="Search something" id="im" /></span>
                 <a href="">Home</a>
                 <a href="">Course</a>
                 <a href="">Batches</a>
                 <a href="">Contacts</a>
                 <a href="">Placements</a>
                 <a href="">Enquery</a>
                 <FaCircleUser className="he" style={{ fontSize : 30 }}  onClick={() =>{
                setVisible(true);
             }} />
             </div>
             <Drawer
                visible={visible}
                title={props.age}
                footer={"Logout"}
                onClose={() => {
                    setVisible(false);
                }}
                placement = "right"
                >
                
                </Drawer>
            
        </div>
    );
}
export default Home
