import React, { useContext, useRef, useState } from 'react';
import TableDetails from './TableDetails';
import { foodProvider } from '../../Context/FoodContext';
import { useReactToPrint } from "react-to-print";
import "./homeStyle.css"
import toast, { Toaster } from 'react-hot-toast';
import { authProvider } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { FaRegChartBar } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import { Canvas } from '@react-pdf/renderer';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const Table = ({ list, list2, list3, list4,
    totalCalories, totalFat, totalProtine, totalCrab, totalFiber, totalNetCrab,
    totalCalories2, totalFat2, totalProtine2, totalCrab2, totalFiber2, totalNetCrab2,
    totalCalories3, totalFat3, totalProtine3, totalCrab3, totalFiber3, totalNetCrab3,
    totalCalories4, totalFat4, totalProtine4, totalCrab4, totalFiber4, totalNetCrab4 }) => {
    const { ft, ft2, ft3, ft4, selectedFood } = useContext(foodProvider)
    const { user } = useContext(authProvider)
    const [downld, setDwnld] = useState(false)

    const componentRef = useRef();
    const handlePrintPdf = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Chart",
        // onAfterPrint: () => toast.success("Print Success"),

    });

    // const dwnldPDF = () => {


    //     setDwnld(true)

    //     const doc = new jsPDF()

    //     doc.autoTable({ html: '#main-table', })

    //     setDwnld(false)

    //     doc.save('Chart.pdf')

    // }

    return (
        <>
            <div>


                {
                    selectedFood &&
                    <div>
                        <div ref={componentRef} className='print-component actualChart'  >
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold'>Diet Chats</h1>
                                <p className='w-6/12 mx-auto text-sm  text-gray-500 my-2'>Export your selected diet chart to follow them in your daily life.</p>
                            </div>
                            {
                                ft &&
                                <div className="overflow-x-auto">
                                    <table id='main-table' className="table">
                                        <caption className='my-3 uppercase text-start font-bold'>BreakFast</caption>
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
                                                    <div className='flex justify-center text-red-400 items-center p-3'>
                                                        <span className='text-xl'><FaRegChartBar /></span>
                                                        <p className='text-md lg:text-xl font-semibold text-center mx-1 '>Insert Your Chart Again</p>

                                                    </div>


                                            }
                                            <tr className="bg-[#F2A73F] text-white font-bold">
                                                <td colSpan={3}>TOTAL:</td>
                                                <td>{(totalFat).toFixed(2)}</td>
                                                <td>{(totalProtine).toFixed(2)}</td>
                                                <td>{(totalCrab).toFixed(2)}</td>
                                                <td>{(totalFiber).toFixed(2)}</td>
                                                <td>{(totalNetCrab).toFixed(2)}</td>
                                                <td>{(totalCalories).toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }

                            {
                                ft2 &&
                                <div className="overflow-x-auto mt-2">
                                    <table id='main-table' className="table">
                                        <caption className='my-3 uppercase text-start font-bold'>Lunch</caption>
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
                                                list2.length >= 1 ?
                                                    list2?.map(lst => <TableDetails list={lst}></TableDetails>)
                                                    :
                                                    <div className='flex justify-center text-red-400 items-center p-3'>
                                                        <span className='text-xl'><FaRegChartBar /></span>
                                                        <p className='text-md lg:text-xl font-semibold text-center mx-1 '>Insert Your Chart Again</p>

                                                    </div>


                                            }
                                            <tr className="bg-[#F2A73F] text-white font-bold">
                                                <td colSpan={3}>TOTAL:</td>
                                                <td>{(totalFat2).toFixed(2)}</td>
                                                <td>{(totalProtine2).toFixed(2)}</td>
                                                <td>{(totalCrab2).toFixed(2)}</td>
                                                <td>{(totalFiber2).toFixed(2)}</td>
                                                <td>{(totalNetCrab2).toFixed(2)}</td>
                                                <td>{(totalCalories2).toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }

                            {
                                ft3 &&
                                <div className="overflow-x-auto mt-2">
                                    <table id='main-table' className="table">
                                        <caption className='my-3 uppercase text-start font-bold'>Snaks</caption>
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
                                                list3.length >= 1 ?
                                                    list3?.map(lst => <TableDetails list={lst}></TableDetails>)
                                                    :
                                                    <div className='flex justify-center text-red-400 items-center p-3'>
                                                        <span className='text-xl'><FaRegChartBar /></span>
                                                        <p className='text-md lg:text-xl font-semibold text-center mx-1 '>Insert Your Chart Again</p>

                                                    </div>


                                            }
                                            <tr className="bg-[#F2A73F] text-white font-bold">
                                                <td colSpan={3}>TOTAL:</td>
                                                <td>{(totalFat3).toFixed(2)}</td>
                                                <td>{(totalProtine3).toFixed(2)}</td>
                                                <td>{(totalCrab3).toFixed(2)}</td>
                                                <td>{(totalFiber3).toFixed(2)}</td>
                                                <td>{(totalNetCrab3).toFixed(2)}</td>
                                                <td>{(totalCalories3).toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }


                            {
                                ft4 &&
                                <div className="overflow-x-auto mt-2">
                                    <table id='main-table' className="table">
                                        <caption className='my-3 uppercase text-start font-bold'>Dinner</caption>
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
                                                list4.length >= 1 ?
                                                    list4?.map(lst => <TableDetails list={lst}></TableDetails>)
                                                    :
                                                    <div className='flex justify-center text-red-400 items-center p-3'>
                                                        <span className='text-xl'><FaRegChartBar /></span>
                                                        <p className='text-md lg:text-xl font-semibold text-center mx-1 '>Insert Your Chart Again</p>

                                                    </div>


                                            }
                                            <tr className="bg-[#F2A73F] text-white font-bold">
                                                <td colSpan={3}>TOTAL:</td>
                                                <td>{(totalFat4).toFixed(2)}</td>
                                                <td>{(totalProtine4).toFixed(2)}</td>
                                                <td>{(totalCrab4).toFixed(2)}</td>
                                                <td>{(totalFiber4).toFixed(2)}</td>
                                                <td>{(totalNetCrab4).toFixed(2)}</td>
                                                <td>{(totalCalories4).toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>
                        {
                            user ?
                                <div className='text-center lg:text-end'>
                                    <button onClick={handlePrintPdf} disabled={!(downld === false)} className='btn btn-wide bg-red-500 text-white hover:bg-black mt-5 mb-12'>{
                                        downld ? (
                                            <span>Downloading...</span>
                                        ) : (
                                            <span>Export Chart</span>
                                        )
                                    }</button>
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