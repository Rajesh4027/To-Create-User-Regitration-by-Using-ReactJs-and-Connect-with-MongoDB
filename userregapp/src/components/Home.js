import React,{useState} from "react"
import { IoSearch} from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import {Drawer } from  "antd"
import { useLocation, useNavigation } from "react-router-dom"
import Navbar from "./Navbar"

function Home() {
    return(
        <div>
            <Navbar></Navbar>
            <h1>hello world</h1>
        </div>
    );
}
export default Home
