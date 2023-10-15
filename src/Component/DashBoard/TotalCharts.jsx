import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CancelModal from './CancelModal';

const TotalCharts = () => {

    const [charts, setCharts] = useState([])
    const [deleted, setDeleted] = useState(null)

    const handleModal = (foodChart) => {
        document.getElementById('my_modal_5').showModal()
        setDeleted(foodChart)
    }




    //for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = charts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(charts.length / recordPerPage);
    const numbers = Array.from({ length: npage }, (_, i) => i + 1)
    console.log(numbers)

    useEffect(() => {
        fetch('http://localhost:5000/adfoodlist', {

            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setCharts(data)
            })
    }, [])



    //functions for pagination
    function prePage() {

        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCpage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <div data-aos="fade-up">

            <h1 className='text-center text-2xl mt-12 font-semibold'>Total Diet-Charts</h1>

            <div className="overflow-x-auto mt-8">
                <table className="table mt-10  mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                    <thead className='bg-gradient-to-r from-red-600 to-orange-400 text-white'>
                        <tr>
                            <th>Food Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Fat</th>
                            <th>Protine</th>
                            <th>Carb</th>
                            <th>Fiber</th>
                            <th>Net Carb</th>
                            <th>Calories</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            records?.map((chart, i) =>
                                <tr>

                                    <td>
                                        <div className='flex items-center'>
                                            {chart?.name}
                                        </div>

                                    </td>
                                    <td>{chart?.quantity}</td>
                                    <td>{chart?.unit}</td>
                                    <td>{chart?.fat}</td>
                                    <td>{chart?.protine}</td>
                                    <td>{chart?.crab}</td>
                                    <td>{chart?.fiber}</td>
                                    <td>{chart?.netCrab}</td>
                                    <td>{chart?.calories}</td>


                                    <td>
                                        <button onClick={() => handleModal(chart)} className="btn btn-xs btn-error hover:bg-red-600 text-white">Delete</button>
                                    </td>




                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>

            <div className="join mb-10">
                <button onClick={prePage} className="join-item btn">Prev</button>
                {
                    numbers.map((n, i) => (
                        <button key={i + 1} onClick={() => changeCpage(n)} className={`join-item btn ${currentPage === n ? ' btn-active bg-orange-400 text-white' : ''}`}>{n}</button>
                    ))
                }
                <button onClick={nextPage} className="join-item btn">Next</button>
            </div>

            {
                <CancelModal deleted={deleted} setDeleted={setDeleted}></CancelModal>
            }


            <Toaster />


        </div>
    );
};

export default TotalCharts;