import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <h3>Category</h3>
                <input  type="checkbox" />sports<br/>
                <input  type="checkbox" />Life<br/>
                <input type="checkbox" />Politics<br/>
                <input type="checkbox" />Relationship<br/>
                <button className='sidebarButton'>Logout</button>
                <hr className='sidebarHr'/>
            </div>
        </div>
    )
}

