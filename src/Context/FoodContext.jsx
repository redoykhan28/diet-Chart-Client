import React, { createContext, useState } from 'react';



export const foodProvider = createContext();



const FoodContext = ({ children }) => {

    //state for selected food
    const [selectedFood, setselectedFood] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [ft, setFt] = useState('')
    const [ft2, setFt2] = useState('')
    const [ft3, setFt3] = useState('')
    const [ft4, setFt4] = useState('')
    const [cq, setcq] = useState('')


    const value = {
        selectedFood,
        setselectedFood,
        ft,
        setFt,
        ft2,
        setFt2,
        ft3,
        setFt3,
        ft4,
        setFt4,
        cq,
        setcq,
        selectedName,
        setSelectedName
    }

    return (
        <div>
            <foodProvider.Provider value={value}>
                {children}
            </foodProvider.Provider>
        </div>
    )

};

export default FoodContext;