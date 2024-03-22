import React, { useState } from "react";
import Home from "./Home/Home";
import Route from "./Route";
const Age = () => {
    const [age, setAge] = useState(0)

    const handleClickPlus = () => {
        setAge(age + 1)
    }
    const handleClickMinus = () => {
        setAge(age - 1)
    }
    return (
        <div>
             <Route path='/Home' element={<Home />} />
            <h1>Age</h1>
            <div className="row">
                <p>{age}</p>
            </div>
            <div className="row">
                <button onClick={handleClickPlus} className="btn btn-outline-primary">+</button>

                <button onClick={handleClickMinus} className="btn btn-outline-danger">-</button></div>
        </div>
    )
}
export default Age;