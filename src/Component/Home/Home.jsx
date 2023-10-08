import React, { useContext, useEffect, useRef, useState } from 'react';
import FoodContext, { foodProvider } from '../../Context/FoodContext';
import TableDetails from './TableDetails';
import image1 from '../../assets/american-breakfast-blue-table-wi.png'
import image2 from '../../assets/som-tum-with-corn-shrimp-served-with-rice-noodles-green-salad-decorated-with-thai-food-ingredients-removebg-preview.png'
import image3 from '../../assets/white-plate-sweet-cookies-with-pink-sprinkles-stone.png'
import image4 from '../../assets/barbecued-red-pork-sauce-with-whole-wheat-noodles.png'
import heroImg from '../../assets/3605095.jpg'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaAppleAlt, FaChartBar, FaClipboardList, FaConciergeBell, FaHome, FaShoppingBag, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import './homeStyle.css'
import Table from "./Table"



const Home = () => {


    //set context
    const { selectedFood, setselectedFood } = useContext(foodProvider)
    const { ft, setFt } = useContext(foodProvider)

    // const [lsData, setLsData] = useState([])

    //state for food list
    const [foods, setfoods] = useState([]);

    //state for list
    const [list, setList] = useState([])

    //state for active
    const [active, setActive] = useState(null)

    //get food list
    useEffect(() => {
        fetch('http://localhost:5000/foodlist')
            .then(res => res.json())
            .then(data => {
                setfoods(data)
            })
    }, [])




    //submit food
    const btnHandler = (e) => {

        e.preventDefault()
        let form = e.target;
        let CQ = form.quant.value

        let DQ = parseFloat(selectedFood[0]?.quantity)

        //calculating factor
        let f = CQ / DQ;


        //name of selected food
        const name = selectedFood[0]?.name
        const unit = selectedFood[0]?.unit


        //calculated fat
        let fat = parseFloat(f * (selectedFood[0]?.fat)).toFixed(2)
        setFt(fat)
        //calculated fat
        let protine = parseFloat(f * (selectedFood[0]?.protine)).toFixed(2)
        //calculated fat
        let crab = parseFloat(f * (selectedFood[0]?.crab)).toFixed(2)
        //calculated fat
        let fiber = parseFloat(f * (selectedFood[0]?.fiber)).toFixed(2)
        //calculated fat
        let netCrab = parseFloat(f * (selectedFood[0]?.netCrab)).toFixed(2)
        //calculated fat
        let calories = parseFloat(f * (selectedFood[0]?.calories)).toFixed(2)

        //calculated food unit
        const foodList = { name, CQ, unit, fat, protine, crab, fiber, netCrab, calories }

        //sprading old vs new value
        const dietList = [...list, foodList];


        //set in LS
        localStorage.setItem('chart', JSON.stringify(dietList));

        //get from LS
        const getChart = JSON.parse(localStorage.getItem('chart'))

        setList(getChart)

        setActive('')

        form.reset()
        toast.success('Food added to list')

    }

    const keys = ["fat", "protine", "crab", "fiber", "netCrab", "calories"];

    const nutrientTotals = keys.reduce((totals, nutrient) => {
        totals[nutrient] = list.reduce((acc, item) => acc + parseFloat(item[nutrient]), 0);
        return totals;
    }, {});

    const { fat: totalFat, protine: totalProtine, crab: totalCrab, fiber: totalFiber, netCrab: totalNetCrab, calories: totalCalories } = nutrientTotals

    // useEffect(() => {
    //     const savedData = JSON.parse(localStorage.getItem('chart'))
    //     setList(savedData)
    // }, [])

    // console.log(list)




    const handleFilter = (fd) => {

        const filteredFood = foods?.filter(food => food?.id === fd?.id && fd?.id > 0)
        setActive(fd)
        setselectedFood(filteredFood)

    }

    console.log(selectedFood)

    //for pdf 
    // const printPage = () => {
    //     window.print();
    // };

    const componentRef = useRef();

    return (
        <div className='lg:w-11/12 mx-auto'>
            <div className="hero relative top-12">
                <div className="hero-content hidden lg:flex  flex-col lg:flex-row-reverse">
                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <img src={heroImg} alt='Banner' />
                    </div>
                    <div data-aos="zoom-in" className='lg:w-1/2 text-start'>
                        <h1 className="text-6xl text-[#F2A73F] font-bold"> Your Ultimate Guide</h1>
                        <h1 className="text-6xl text-[#F2A73F] font-bold">To Personalized </h1>
                        <h1 className="text-6xl text-[#3cbd72] font-bold">Diet Plans for a Healthier, Happier!</h1>
                        <p className="py-6 text-gray-500">Calories empowers you to create personalized diet charts, making healthy living easy. Achieve your wellness goals with tailored nutrition plans.</p>
                        <Link to={'/'} className="btn bg-[#3cbd72] text-white hover:bg-[#5bce67]">Get Started</Link>
                    </div>
                </div>
            </div>

            <div className='mt-12 lg:mt-40 mb-20'>

                <div data-aos="fade" className='text-center'>
                    <h1 className='text-xl  text-zinc-500'>Welcome to</h1>
                    <h1 className='text-2xl md:text-3xl text-black font-semibold'>Calories Diet Chart</h1>
                    <p className='w-6/12 mx-auto text-sm hidden lg:block text-gray-500 mt-2'>Choose the ideal diet for your body to promote a healthy life, tailored to your unique needs and preferences, ensuring long-term well-being and vitality.</p>
                </div>

                <div className='lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-32 mt-32 lg:mt-36'>

                    <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cards shadow-xl w-80 lg:w-96 mx-auto text-white rounded-3xl cursor-pointer'>

                        <div className="avatar mt-[-100px]">
                            <div className="w-52 rounded-full">
                                <img src={image1} />
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">Take a Breakfast</h2>
                            <div className='flex items-center'>
                                <span><FaConciergeBell /></span>
                                <p className='text-start mx-2'>Add your Healthy Breakfast</p>
                            </div>
                        </div>

                    </div>

                    <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

                        <div className="avatar mt-[-100px]">
                            <div className="w-52 rounded-full">
                                <img src={image2} />
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">Take a Lunch</h2>
                            <div className='flex items-center'>
                                <span><FaConciergeBell /></span>
                                <p className='text-start mx-2'>Add your Healthy Lunch</p>
                            </div>
                        </div>

                    </div>

                    <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

                        <div className="avatar mt-[-100px]">
                            <div className="w-52 rounded-full">
                                <img src={image3} />
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">Take a Snacks</h2>
                            <div className='flex items-center'>
                                <span><FaConciergeBell /></span>
                                <p className='text-start mx-2'>Add your Healthy Snacks</p>
                            </div>
                        </div>

                    </div>

                    <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

                        <div className="avatar mt-[-100px]">
                            <div className="w-52 rounded-full">
                                <img src={image4} />
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">Take a Dinner</h2>
                            <div className='flex items-center'>
                                <span><FaConciergeBell /></span>
                                <p className='text-start mx-2'>Add your Healthy Dinner</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Body  */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h1 className='text-xl font-semibold text-center my-5'>Select Your  Diet Plans</h1>

                        <form onSubmit={btnHandler} action="">
                            <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                {
                                    foods?.map((food) => <div onClick={() => handleFilter(food)} key={food.id} className={`text-start cursor-pointer  my-2
                                     p-1 hover:bg-slate-300 ${active === food ? 'bg-[#3cbd72] text-white' : ''}`}>
                                        {food.name}
                                    </div>)
                                }
                            </div>

                            <div className='flex justify-between align-middle mt-8'>
                                <input type="text" placeholder='Select Quantity' name='quant' className="input input-bordered rounded-md w-full mx-2 max-w-xs" />

                                <input type="text" placeholder='Unit' value={selectedFood[0]?.unit} readOnly className="input input-bordered rounded-md w-full max-w-xs mx-2" />
                            </div>

                            <button type="submit" className="btn mt-8 w-full mb-2 rounded-md bg-[#3cbd72] text-white hover:bg-[#5bce67]">Add to List</button>

                        </form>
                    </div>
                </dialog>
            </div>

            {/* <div className=''>
                <div>


                    <div className="overflow-x-auto">
                        {
                            ft &&

                            <div ref={componentRef}>

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
                                            // lsData.length > 0 ?

                                            //     lsData?.map(lst => <TableDetails list={lst}></TableDetails>)
                                            //     :
                                            list?.map(lst => <TableDetails list={lst}></TableDetails>)

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

                        }


                    </div>
                    <ReactToPrint
                        trigger={() => (
                            <div className='text-center lg:text-end'>
                                <button onClick={printPage} className='btn btn-wide bg-red-500 text-white hover:bg-black mt-5 mb-12'>Export Charts</button>
                            </div>
                        )} content={() => componentRef.current} />


                </div>

                


            </div> */}

            <Table list={list} totalCalories={totalCalories} totalFat={totalFat} totalProtine={totalProtine} totalCrab={totalCrab} totalFiber={totalFiber} totalNetCrab={totalNetCrab} />

            <Toaster></Toaster>
        </div>
    );
};

export default Home;