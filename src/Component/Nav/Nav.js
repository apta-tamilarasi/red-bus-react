import React from "react"
import {TfiHeadphoneAlt } from 'react-icons/tfi'
import {BsPersonCircle} from 'react-icons/bs'
import Home from "../Home/Home.js"

const Nav = () => {
    return <section style={{ padding: "40px",justifyContent:"space-between"}}>
        <div style={{ display: "flex",borderBottom:'2px solid black', paddingBottom:"20px"  }}>
            <div style={{ width: "20%", textAlign: "center" }}>
                <div>
                    <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt=""/>
                </div>
            </div>

            <div style={{ display: "flex", width: "60%",fontSize:'20px' }}>
                <div style={{ textAlign: "center", paddingRight: "40px" }}>
                    <div>
                        <img src='https://st.redbus.in/web/images/layout/rb_vertical.svg' alt="" />
                    </div>
                    <p>Bus Tickets</p>
                </div>
                <div style={{ textAlign: "center",  paddingRight: "40px" }}>
                    <div>
                        <img src='https://st.redbus.in/web/images/layout/ryde_vertical.svg' alt="" />
                    </div>
                    <p>Cab Rental</p>
                </div>
                <div style={{ textAlign: "center", paddingRight: "40px" }}>
                    <div>
                        <img src='https://st.redbus.in/web/images/layout/rail_vertical.svg' alt=""/>
                    </div>
                    <p>Train Tickets</p>
                </div>
            </div>

            <div style={{width: "10%",fontSize:'20px'  }}>
                <TfiHeadphoneAlt/> <span style={{paddingLeft:'10px'}}>Help</span>
            </div>
            <div style={{width: "10%",fontSize:'20px' }}>
                <BsPersonCircle/> <span  style={{paddingLeft:'10px'}}>Account</span>
            </div>
        </div>

        <Home/>

    </section>
}
export default Nav