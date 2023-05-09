import React from "react"
import "./topbar.css"
import { Link } from "react-router-dom"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/home'><span className="logo">NewSocial</span></Link>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to='/home'><span className="topbarLink">Home</span></Link>
                    <Link to='/settings'><span className="topbarLink">Settings</span></Link>
                </div>
                <Link to="/profile"><img src="/assets/persons/1.jpg" alt="" className="topbarImg" /></Link>
            </div>
        </div>
    )
}
