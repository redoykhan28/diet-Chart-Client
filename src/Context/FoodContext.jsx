import React, { createContext, useState } from 'react';



export const foodProvider = createContext();



const FoodContext = ({ children }) => {

    //state for selected food
    const [selectedFood, setselectedFood] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [ft, setFt] = useState('')
    const [cq, setcq] = useState('')


    const value = {
        selectedFood,
        setselectedFood,
        ft,
        setFt,
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