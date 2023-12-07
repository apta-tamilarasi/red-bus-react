import React, { useReducer } from "react";
import globalstate from "./Context";
import { initialstate,Reduce } from "./Reduce";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Nav from "./Nav/Nav";

const Routing=()=>{

    let [state,dispatch]=useReducer(Reduce,initialstate)
    return <div>

        <globalstate.Provider value={{state,dispatch}}>

            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav/>}/>
            </Routes>
            </BrowserRouter>

        </globalstate.Provider>
    </div>
}
export default Routing