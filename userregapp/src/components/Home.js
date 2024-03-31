import React from "react"
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5";
function Home() {
    return(
        <div className="homepage">
             <div>
                <p></p>
                 <a href="">Home</a>
                 <a href="">Course</a>
                 <a href="">Batches</a>
                 <a href="">Contacts</a>
                 <a href="">Placements</a>
                 <a href="">Enquery</a>
                 <a href="" id="hel"><IoReorderThreeOutline /></a>
                 <a href="" id="hell"><IoSearch /></a>
             </div>
            {/* {location.state.id} */}

        </div>
    )
}
export default Home