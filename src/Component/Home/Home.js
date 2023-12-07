import React, { useContext, useState } from 'react'
import globalstate from '../Context.js'
import './Home.css'


const Home = () => {
    const { state, dispatch } = useContext(globalstate)
    var [amount1, setam1] = useState(0)
    var [amount2, setam2] = useState(0)


    const viewseat = (busid) => {
        console.log('hello')
        let x = state.buses.map((e) => {
            console.log(busid)
            console.log(e.id)
            return e.id === busid ? e.busseat === false ? { ...e, busseat: true } : { ...e, busseat: false } : e
        })
        dispatch({ type: "updatebuses", payload: x })
        console.log(state.buses)

    }
    const seatbook = (id, busid) => {
        let y = state.buses.map((a) => {
            return a.id === busid ? ({
                ...a,
                seat: (a.seat.map((e) => {

                    if (e.id === id) {
                        console.log('hello')
                        if (e.selected === false) {
                            console.log(state.count)
                            dispatch({ type: "updatecount", payload: state.count > 6 ? state.count : state.count + 1 })
                            console.log(state.count)
                            busid === 1 ? setam1(amount1 + 660) : setam2(amount2 + 850)

                            return { ...e, selected: true }
                        }

                        else {
                            dispatch({ type: "updatecount", payload: state.count - 1 })
                            console.log(state.count)
                            busid === 1 ? setam1(amount1 - 660) : setam2(amount2 - 850)
                            return { ...e, selected: false }

                        }
                    }
                    else {
                        // dispatch({type:"updatecount",payload:state.count})
                        return e
                    }
                })
                )
            }
            ) : a

        }
        )
        console.log(y)
        dispatch({ type: "updatebuses", payload: y })
        console.log(state.count)
    }
    console.log(state.buses)
    if (state.count > 6) {
        alert("can't book more than 6 seat")
    }
    let booked = () => {
        alert("can't book more than 6 seat")
    }

    const booking = (id) => {
        let x = state.buses.map((e) => {
            e.id === id ? e.id === 1 ? setam1(0) : setam2(0) : setam2(amount2)
            return e.id === id ? ({
                ...e,
                seat: e.seat.map((a) => {
                    return a.selected === true ? { ...a, selected: false, booked: true } : a

                })
            }) : e
        })
        console.log(x)
        dispatch({ type: "updatecount", payload: state.count === 0 })
        dispatch({ type: "updatebuses", payload: x })

    }
    let not=()=>{
        alert("OOPS! This seat is Not Available")
    }

    console.log(state.count)
    return <div style={{ cursor: "pointer" }}>
        <div>
            {
                state.buses.map((e, i) => {
                    console.log(e.seat)
                    return <section className='homesec' key={i}>
                        <div className='homecon'>
                            <h3>{e.name}</h3>
                            <div>
                                <p>{e.time}</p>
                                <p className='place'>{e.place}</p>
                            </div>
                            <div>
                                <p>Start from</p>
                                <h4 className='rs'>RS. {e.amount}</h4>
                            </div>
                            <div>
                                <h3>Total Seat is {e.total}</h3>
                                <div className='avai'>
                                    {e.avai} Available
                                </div>
                            </div>

                        </div>
                        {e.busseat === false ?
                            <div key={i} style={{ paddingBottom: "20px" }}>

                                <div onClick={() => viewseat(e.id)} className="viewseat">
                                    view seat
                                </div>

                            </div> :
                            <div key={i}  >
                                <div onClick={() => viewseat(e.id)} className="viewseat" style={{borderRadius:"10px"}}>
                                    HideSeat
                                </div>
                                <div className="col">
                                    <div className='col1'>
                                        {

                                            state.count < 6 ?
                                                e.seat.map((a, i) => {
                                                    console.log('hi')
                                                    return a.selected === false ?
                                                        (a.booked === false ?
                                                            <div key={i} onClick={() => seatbook(a.id, e.id)} style={{ width: "9%", padding: "10px", margin: "12px ", border: "2px solid black" }}>

                                                            </div> :
                                                            <div key={i} onClick={not} style={{ width: "9%", color: "white", margin: "12px ", padding: "10px", textAlign: "center", border: "2px solid black", backgroundColor: "gray" }}>
                                                                seat {i + 1}
                                                            </div>) :
                                                        <div key={i} onClick={() => seatbook(a.id, e.id)} style={{ width: "9%", color: "white", margin: "12px", padding: "10px", textAlign: "center", border: "2px solid black", backgroundColor: "black" }}>
                                                            seat {i + 1}
                                                        </div>
                                                })


                                                :
                                                e.seat.map((a, i) => {
                                                    console.log('hi')
                                                    return a.selected === false ?
                                                        a.booked === false ?
                                                            <div key={i} onClick={booked} style={{ width: "9%", padding: "10px", margin: "12px", border: "2px solid black" }}>

                                                            </div> :
                                                            <div key={i} onClick={not} style={{ width: "9%", color: "white", margin: "12px", padding: "10px", textAlign: "center", border: "2px solid black", backgroundColor: "gray" }}>
                                                                seat {i + 1}
                                                            </div> :

                                                        <div key={i} onClick={() => seatbook(a.id, e.id)} style={{ textAlign: "center", padding: "10px", margin: "12px", width: "9%px", color: "white", border: "2px solid black", backgroundColor: "black" }}>
                                                            seat {i + 1}
                                                        </div>
                                                })
                                        }

                                    </div>
                                    <div className='col2'>
                                        <h1>AMOUNT</h1>
                                        {
                                            e.id === 1 ? <p>&#8377; {amount1}</p> : <p>&#8377; {amount2}</p>
                                        }
                                    </div>

                                </div>
                                <div className='pro'>
                                    <p onClick={() => booking(e.id)} className='proceed'>proceed</p>

                                </div>
                            </div>}
                    </section>
                })

            }


        </div>

    </div>
}

export default Home