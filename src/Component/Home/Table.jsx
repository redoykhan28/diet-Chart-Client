import React, { useContext, useRef } from 'react';
import TableDetails from './TableDetails';
import { foodProvider } from '../../Context/FoodContext';
import { useReactToPrint } from "react-to-print";
import "./homeStyle.css"
import toast, { Toaster } from 'react-hot-toast';
import { authProvider } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { FaRegChartBar } from 'react-icons/fa';

const Table = ({ list, totalCalories, totalFat, totalProtine, totalCrab, totalFiber, totalNetCrab }) => {
    const { ft } = useContext(foodProvider)
    const { user } = useContext(authProvider)
    const componentRef = useRef();
    const handlePrintPdf = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Chart",
        // onAfterPrint: () => toast.success("Print Success"),
    });

    return (
        <>
            <div className="overflow-x-auto" >
                {
                    ft &&
                    <div>
                        <div ref={componentRef} className='print-component'>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold'>Diet Chats</h1>
                                <p className='w-6/12 mx-auto text-sm  text-gray-500 mt-2'>Export your selected diet chart to follow them in your daily life.</p>
                            </div>
                            <table className="table mt-10">
                                <thead className='bg-[#3cbd72] text-white font-bold'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Fat</th>
                                        <th>Protine</th>
                                        <th>Crab</th>
                                        <th>Fiber</th>
                                        <th>Net Crab</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.length >= 1 ?
                                            list?.map(lst => <TableDetails list={lst}></TableDetails>)
                                            :
                                            <div className='flex justify-center text-red-400 items-center'>
                                                <span className='text-xl'><FaRegChartBar /></span>
                                                <p className='text-xl font-semibold text-center mx-1 p-3'>Insert Your Chart Again..</p>

                                            </div>


                                    }
                                    <tr className="bg-[#F2A73F] text-white font-bold">
                                        <td colSpan={3}>TOTAL:</td>
                                        <td>= {(totalFat).toFixed(2)}</td>
                                        <td>= {(totalProtine).toFixed(2)}</td>
                                        <td>= {(totalCrab).toFixed(2)}</td>
                                        <td>= {(totalFiber).toFixed(2)}</td>
                                        <td>= {(totalNetCrab).toFixed(2)}</td>
                                        <td>= {(totalCalories).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {
                            user ?
                                <div className='text-center lg:text-end'>
                                    <button onClick={handlePrintPdf} className='btn btn-wide bg-red-500 text-white hover:bg-black mt-5 mb-12'>Export Charts</button>
                                </div>
                                :
                                <div className='text-center lg:text-end'>
                                    <Link to={'/login'} className='btn btn-wide bg-red-500 text-white hover:bg-black mt-5 mb-12'>Login to Download</Link>
                                </div>
                        }
                    </div>
                }
                <Toaster />
            </div>
        </>
    )
}

export default Table