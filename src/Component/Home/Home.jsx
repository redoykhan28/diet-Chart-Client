import React, { useContext, useEffect, useRef, useState } from 'react';
import FoodContext, { foodProvider } from '../../Context/FoodContext';
import TableDetails from './TableDetails';
import image1 from '../../assets/american-breakfast-blue-table-wi.png'
import image2 from '../../assets/som-tum-with-corn-shrimp-served-with-rice-noodles-green-salad-decorated-with-thai-food-ingredients-removebg-preview.png'
import image3 from '../../assets/white-plate-sweet-cookies-with-pink-sprinkles-stone.png'
import image4 from '../../assets/barbecued-red-pork-sauce-with-whole-wheat-noodles.png'
import heroImg from '../../assets/3605095.png'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaAppleAlt, FaChartBar, FaClipboardList, FaConciergeBell, FaHome, FaSearch, FaShoppingBag, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import './homeStyle.css'
import Table from "./Table"



const Home = () => {


    //set context
    const { selectedFood, setselectedFood } = useContext(foodProvider)
    const { ft, setFt, setFt2, setFt3, setFt4 } = useContext(foodProvider)

    // const [lsData, setLsData] = useState([])

    //state for food list
    const [foods, setfoods] = useState([]);

    //state for list
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [list3, setList3] = useState([])
    const [list4, setList4] = useState([])

    //ref for search
    const searchRef = useRef();
    const searchRef2 = useRef();
    const searchRef3 = useRef();
    const searchRef4 = useRef();

    //state for search
    const [search, setSearch] = useState('') //for search
    const [isSearchActive, setSearchActive] = useState(false); //for active clrsearch button
    const [searchInput, setSearchInput] = useState('');// to empty search box


    //state for error
    const [error, setError] = useState('')



    //state for active
    const [active, setActive] = useState(null)

    //handle modal
    const modalHandle = () => {
        setSearchActive(false)
        setSearch('')
        setSearchInput('')
    }

    //get food list
    useEffect(() => {
        fetch(`http://localhost:5000/foodlist?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setfoods(data)
            })
    }, [search])

    //search function
    const handleSearch1 = () => {

        setSearch(searchRef.current.value)

    }

    const handleSearch2 = () => {

        setSearch(searchRef2.current.value)
    }
    const handleSearch3 = () => {

        setSearch(searchRef3.current.value)
    }

    const handleSearch4 = () => {

        setSearch(searchRef4.current.value)
    }

    //handle input box for search
    const handleInput = () => {
        setSearchActive(true)

    }

    //handleActive
    const handleActive = () => {

        setSearch('')
        setSearchInput('')
        setSearchActive(false)

    }

    //input change
    const handleChange = (e) => {
        const form = e.target.value
        setSearchInput(form)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // When the Enter key is pressed, trigger the search
            // You can put your search logic here or call a search function
            setSearch(searchInput)
        }
    };

    // console.log(search)

    //submit food 1
    const btnHandler1 = (e) => {

        e.preventDefault()
        let form = e.target;
        let CQ = form.quant.value

        if (/^[0-9]*$/.test(CQ)) {
            let DQ = parseFloat(selectedFood[0]?.quantity)

            //calculating factor
            let f = CQ / DQ;

            //Table Name
            const TableTitle = 'Breakfast'


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
            const foodList = { TableTitle, name, CQ, unit, fat, protine, crab, fiber, netCrab, calories }

            //sprading old vs new value
            const dietList = [...list, foodList];


            //set in LS
            localStorage.setItem('chart', JSON.stringify(dietList));

            //get from LS
            const getChart = JSON.parse(localStorage.getItem('chart'))

            setList(getChart)

            setActive('')

            form.reset()
            setError('')
            toast.success('Food added to list')
        }

        else {

            setError('Please insert a number!')

        }

    }

    //submit food 2
    const btnHandler2 = (e) => {

        e.preventDefault()
        let form = e.target;
        let CQ = form.quant.value

        if (/^[0-9]*$/.test(CQ)) {
            let DQ = parseFloat(selectedFood[0]?.quantity)

            //calculating factor
            let f = CQ / DQ;

            //Table Name
            const TableTitle = 'Lunch'


            //name of selected food
            const name = selectedFood[0]?.name
            const unit = selectedFood[0]?.unit


            //calculated fat
            let fat = parseFloat(f * (selectedFood[0]?.fat)).toFixed(2)
            setFt2(fat)
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
            const foodList = { TableTitle, name, CQ, unit, fat, protine, crab, fiber, netCrab, calories }

            //sprading old vs new value
            const dietList = [...list2, foodList];


            //set in LS
            localStorage.setItem('chart', JSON.stringify(dietList));

            //get from LS
            const getChart = JSON.parse(localStorage.getItem('chart'))

            setList2(getChart)

            setActive('')

            form.reset()
            setError('')
            toast.success('Food added to list')
        }

        else {

            setError('Please insert a number!')

        }

    }

    //submit food 3
    const btnHandler3 = (e) => {

        e.preventDefault()
        let form = e.target;
        let CQ = form.quant.value

        if (/^[0-9]*$/.test(CQ)) {
            let DQ = parseFloat(selectedFood[0]?.quantity)

            //calculating factor
            let f = CQ / DQ;

            //Table Name
            const TableTitle = 'Snaks'


            //name of selected food
            const name = selectedFood[0]?.name
            const unit = selectedFood[0]?.unit


            //calculated fat
            let fat = parseFloat(f * (selectedFood[0]?.fat)).toFixed(2)
            setFt3(fat)
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
            const foodList = { TableTitle, name, CQ, unit, fat, protine, crab, fiber, netCrab, calories }

            //sprading old vs new value
            const dietList = [...list3, foodList];


            //set in LS
            localStorage.setItem('chart', JSON.stringify(dietList));

            //get from LS
            const getChart = JSON.parse(localStorage.getItem('chart'))

            setList3(getChart)

            setActive('')

            form.reset()
            setError('')

            toast.success('Food added to list')

        }

        else {

            setError('Please insert a number!')

        }
    }

    //submit food 4
    const btnHandler4 = (e) => {

        e.preventDefault()
        let form = e.target;
        let CQ = form.quant.value

        if (/^[0-9]*$/.test(CQ)) {

            let DQ = parseFloat(selectedFood[0]?.quantity)

            //calculating factor
            let f = CQ / DQ;

            //Table Name
            const TableTitle = 'Breakfast'


            //name of selected food
            const name = selectedFood[0]?.name
            const unit = selectedFood[0]?.unit


            //calculated fat
            let fat = parseFloat(f * (selectedFood[0]?.fat)).toFixed(2)
            setFt4(fat)
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
            const foodList = { TableTitle, name, CQ, unit, fat, protine, crab, fiber, netCrab, calories }

            //sprading old vs new value
            const dietList = [...list4, foodList];


            //set in LS
            localStorage.setItem('chart', JSON.stringify(dietList));

            //get from LS
            const getChart = JSON.parse(localStorage.getItem('chart'))

            setList4(getChart)

            setActive('')

            form.reset()
            setError('')
            toast.success('Food added to list')
        }

        else {

            setError('Please insert a number!')

        }

    }

    const keys = ["fat", "protine", "crab", "fiber", "netCrab", "calories"];

    const nutrientTotals = keys.reduce((totals, nutrient) => {
        totals[nutrient] = list.reduce((acc, item) => acc + parseFloat(item[nutrient]), 0);
        return totals;
    }, {});
    const nutrientTotals2 = keys.reduce((totals, nutrient) => {
        totals[nutrient] = list2.reduce((acc, item) => acc + parseFloat(item[nutrient]), 0);
        return totals;
    }, {});
    const nutrientTotals3 = keys.reduce((totals, nutrient) => {
        totals[nutrient] = list3.reduce((acc, item) => acc + parseFloat(item[nutrient]), 0);
        return totals;
    }, {});
    const nutrientTotals4 = keys.reduce((totals, nutrient) => {
        totals[nutrient] = list4.reduce((acc, item) => acc + parseFloat(item[nutrient]), 0);
        return totals;
    }, {});

    const { fat: totalFat, protine: totalProtine, crab: totalCrab, fiber: totalFiber, netCrab: totalNetCrab, calories: totalCalories } = nutrientTotals
    const { fat: totalFat2, protine: totalProtine2, crab: totalCrab2, fiber: totalFiber2, netCrab: totalNetCrab2, calories: totalCalories2 } = nutrientTotals2
    const { fat: totalFat3, protine: totalProtine3, crab: totalCrab3, fiber: totalFiber3, netCrab: totalNetCrab3, calories: totalCalories3 } = nutrientTotals3
    const { fat: totalFat4, protine: totalProtine4, crab: totalCrab4, fiber: totalFiber4, netCrab: totalNetCrab4, calories: totalCalories4 } = nutrientTotals4

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

    // console.log(selectedFood)

    //for pdf 
    // const printPage = () => {
    //     window.print();
    // };

    // const componentRef = useRef();

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

                <div data-aos='fade-up' className='lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-32 mt-32 lg:mt-36'>

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

                    <div onClick={() => document.getElementById('my_modal_4').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

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

                    <div onClick={() => document.getElementById('my_modal_5').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

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

                    <div onClick={() => document.getElementById('my_modal_6').showModal()} className='cards w-80 lg:w-96 shadow-xl mx-auto text-white rounded-3xl cursor-pointer'>

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
                {/* Modal Body 1  */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onClick={modalHandle} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h1 className='text-xl font-semibold text-center my-5'>Select Your  Diet Plans</h1>

                        <div className='flex justify-center items-center'>
                            <input onKeyDown={handleKeyDown}
                                onChange={handleChange}
                                onFocus={handleInput}
                                ref={searchRef}
                                type="text" placeholder="Search" className="input input-bordered border-gray-300 rounded-full input-sm w-full max-w-xs" />

                            <button onClick={handleSearch1} className="btn btn-sm btn-circle mx-2">
                                <span className='text-[#5bce67] hover:text-red-500'><FaSearch /></span>
                            </button>
                            {
                                isSearchActive &&
                                <button onClick={handleActive} className="btn btn-sm btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            }
                        </div>


                        <form onSubmit={btnHandler1} action="">
                            {
                                foods.length > 0 ?
                                    <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                        {
                                            foods?.map((food) => <div onClick={() => handleFilter(food)} key={food.id} className={`text-start cursor-pointer  my-2
                                     p-1 hover:bg-slate-300 ${active === food ? 'bg-[#3cbd72] text-white' : ''}`}>
                                                {food.name}
                                            </div>)
                                        }
                                    </div>
                                    :
                                    <p className='text-center font-semibold text-md my-10'>No Result Found!</p>
                            }

                            <div className='flex justify-between align-middle mt-8'>
                                <input type="text" placeholder='Select Quantity' name='quant' className="input input-bordered rounded-md w-full mx-2 max-w-xs" required />

                                <input type="text" placeholder='Unit' value={selectedFood[0]?.unit} readOnly className="input input-bordered rounded-md w-full max-w-xs mx-2" />
                            </div>
                            <p className=' mt-2 text-start text-red-400 text-sm'>{error}</p>


                            <button type="submit" className="btn mt-8 w-full mb-2 rounded-md bg-[#3cbd72] text-white hover:bg-[#5bce67]">Add to List</button>


                        </form>
                    </div>
                </dialog>

                {/* Modal Body 2  */}
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form onClick={modalHandle} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h1 className='text-xl font-semibold text-center my-5'>Select Your  Diet Plans</h1>

                        <div className='flex justify-center items-center'>
                            <input onKeyDown={handleKeyDown} onChange={handleChange} onFocus={handleInput} ref={searchRef2} type="text" placeholder="Search" className="input input-bordered border-gray-300 rounded-full input-sm w-full max-w-xs" />
                            <button onClick={handleSearch2} className="btn btn-sm btn-circle mx-2">
                                <span className='text-[#5bce67] hover:text-red-500'><FaSearch /></span>
                            </button>
                            {
                                isSearchActive &&
                                <button onClick={handleActive} className="btn btn-sm btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            }
                        </div>

                        <form onSubmit={btnHandler2} action="">
                            <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                {
                                    foods.length > 0 ?
                                        <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                            {
                                                foods?.map((food) => <div onClick={() => handleFilter(food)} key={food.id} className={`text-start cursor-pointer  my-2
                                     p-1 hover:bg-slate-300 ${active === food ? 'bg-[#3cbd72] text-white' : ''}`}>
                                                    {food.name}
                                                </div>)
                                            }
                                        </div>
                                        :
                                        <p className='text-center font-semibold text-md my-10'>No Result Found!</p>
                                }
                            </div>

                            <div className='flex justify-between align-middle mt-8'>
                                <input type="text" placeholder='Select Quantity' name='quant' className="input input-bordered rounded-md w-full mx-2 max-w-xs" required />

                                <input type="text" placeholder='Unit' value={selectedFood[0]?.unit} readOnly className="input input-bordered rounded-md w-full max-w-xs mx-2" />
                            </div>
                            <p className=' mt-2 text-start text-red-400 text-sm'>{error}</p>


                            <button type="submit" className="btn mt-8 w-full mb-2 rounded-md bg-[#3cbd72] text-white hover:bg-[#5bce67]">Add to List</button>

                        </form>
                    </div>
                </dialog>

                {/* Modal Body 3  */}
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box">
                        <form onClick={modalHandle} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h1 className='text-xl font-semibold text-center my-5'>Select Your  Diet Plans</h1>

                        <div className='flex justify-center items-center'>
                            <input onKeyDown={handleKeyDown} onChange={handleChange} onFocus={handleInput} ref={searchRef3} type="text" placeholder="Search" className="input input-bordered border-gray-300 rounded-full input-sm w-full max-w-xs" />
                            <button onClick={handleSearch3} className="btn btn-sm btn-circle mx-2">
                                <span className='text-[#5bce67] hover:text-red-500'><FaSearch /></span>
                            </button>
                            {
                                isSearchActive &&
                                <button onClick={handleActive} className="btn btn-sm btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            }
                        </div>

                        <form onSubmit={btnHandler3} action="">
                            <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                {
                                    foods.length > 0 ?
                                        <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                            {
                                                foods?.map((food) => <div onClick={() => handleFilter(food)} key={food.id} className={`text-start cursor-pointer  my-2
                                     p-1 hover:bg-slate-300 ${active === food ? 'bg-[#3cbd72] text-white' : ''}`}>
                                                    {food.name}
                                                </div>)
                                            }
                                        </div>
                                        :
                                        <p className='text-center font-semibold text-md my-10'>No Result Found!</p>
                                }
                            </div>

                            <div className='flex justify-between align-middle mt-8'>
                                <input type="text" placeholder='Select Quantity' name='quant' className="input input-bordered rounded-md w-full mx-2 max-w-xs" required />

                                <input type="text" placeholder='Unit' value={selectedFood[0]?.unit} readOnly className="input input-bordered rounded-md w-full max-w-xs mx-2" />
                            </div>
                            <p className=' mt-2 text-start text-red-400 text-sm'>{error}</p>


                            <button type="submit" className="btn mt-8 w-full mb-2 rounded-md bg-[#3cbd72] text-white hover:bg-[#5bce67]">Add to List</button>

                        </form>
                    </div>
                </dialog>

                {/* Modal Body 3  */}
                <dialog id="my_modal_6" className="modal">
                    <div className="modal-box">
                        <form onClick={modalHandle} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h1 className='text-xl font-semibold text-center my-5'>Select Your  Diet Plans</h1>
                        <div className='flex justify-center items-center'>
                            <input onKeyDown={handleKeyDown} onChange={handleChange} onFocus={handleInput} ref={searchRef4} type="text" placeholder="Search" className="input input-bordered border-gray-300 rounded-full input-sm w-full max-w-xs" />
                            <button onClick={handleSearch4} className="btn btn-sm btn-circle mx-2">
                                <span className='text-[#5bce67] hover:text-red-500'><FaSearch /></span>
                            </button>
                            {
                                isSearchActive &&
                                <button onClick={handleActive} className="btn btn-sm btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            }
                        </div>

                        <form onSubmit={btnHandler4} action="">
                            <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                {
                                    foods.length > 0 ?
                                        <div className='mt-5 overflow-hidden overflow-y-scroll h-72'>
                                            {
                                                foods?.map((food) => <div onClick={() => handleFilter(food)} key={food.id} className={`text-start cursor-pointer  my-2
                                     p-1 hover:bg-slate-300 ${active === food ? 'bg-[#3cbd72] text-white' : ''}`}>
                                                    {food.name}
                                                </div>)
                                            }
                                        </div>
                                        :
                                        <p className='text-center font-semibold text-md my-10'>No Result Found!</p>
                                }
                            </div>

                            <div className='flex justify-between align-middle mt-8'>
                                <input type="text" placeholder='Select Quantity' name='quant' className="input input-bordered rounded-md w-full mx-2 max-w-xs" required />

                                <input type="text" placeholder='Unit' value={selectedFood[0]?.unit} readOnly className="input input-bordered rounded-md w-full max-w-xs mx-2" />
                            </div>
                            <p className=' mt-2 text-start text-red-400 text-sm'>{error}</p>


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

            <Table list={list} list2={list2} list3={list3} list4={list4} totalCalories={totalCalories} totalFat={totalFat} totalProtine={totalProtine} totalCrab={totalCrab} totalFiber={totalFiber} totalNetCrab={totalNetCrab}

                totalCalories2={totalCalories2} totalFat2={totalFat2} totalProtine2={totalProtine2} totalCrab2={totalCrab2} totalFiber2={totalFiber2} totalNetCrab2={totalNetCrab2}

                totalCalories3={totalCalories3} totalFat3={totalFat3} totalProtine3={totalProtine3} totalCrab3={totalCrab3} totalFiber3={totalFiber3} totalNetCrab3={totalNetCrab3}

                totalCalories4={totalCalories4} totalFat4={totalFat4} totalProtine4={totalProtine4} totalCrab4={totalCrab4} totalFiber4={totalFiber4} totalNetCrab4={totalNetCrab4}

            />

            <Toaster></Toaster>
        </div>
    );
};

export default Home;