import {useState} from "react"
import { IoSearch} from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import {Drawer } from  "antd"

function Home() {
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
                title="drawer title"
                footer={"Logout"}
                closable={true}
                onClose={() => {
                    setVisible(false);
                }}
                placement = "right"
                >
                    <p>this is the content</p>
                </Drawer>
            
        </div>
    )
}
export default Home
