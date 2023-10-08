import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const AddChart = () => {

    //use react hook form
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    //Add Diet Chart
    const handleChart = (data) => {

        console.log(data)

        const currentChart = {
            name: data?.name,
            quantity: data?.quantity,
            unit: data?.unit,
            fat: data?.fat,
            protine: data?.protine,
            crab: data?.crab,
            fiber: data?.fiber,
            netCrab: data?.netCrab,
            calories: data?.calories,
        }

        //post data
        fetch('http://localhost:5000/charts', {

            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },

            body: JSON.stringify(currentChart)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Chart Added Successfully!")
                reset()
            })

    }

    return (
        <div>
            <div className='rounded-lg shadow-md flex justify-center items-center w-11/12 my-14 mx-auto border border-gray-200'>
                <div className="card p-8 bg-base-100 ">
                    <h4 className='text-center text-2xl mt-4 mb-6 font-semibold'>Add Diet Chart</h4>
                    <form onSubmit={handleSubmit(handleChart)}>

                        <div className='mt-4 w-full text-start'>
                            <label htmlFor="name">Name</label>
                            <input {...register('name', { required: 'This field is required' })} type="text" className="input   input-bordered w-full rounded-sm mt-1" />

                            {errors.name && <p className='text-red-600'><small>{errors.name.message}</small></p>}

                        </div>

                        <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>

                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="quantity">Quantity</label>
                                <input  {...register('quantity', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.quantity && <p className='text-red-600'><small>{errors.quantity.message}</small></p>}

                            </div>


                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="unit">Unit</label>
                                <div>
                                    <select {...register('unit', { required: 'This field is required' })} className="select select-bordered w-11/12 my-4  mx-auto ">
                                        <option>gm</option>
                                        <option>ml</option>
                                        <option>Slice</option>
                                        <option>Piece</option>
                                    </select>
                                </div>
                                {errors.unit && <p className='text-red-600'><small>{errors.unit.message}</small></p>}
                            </div>


                        </div>

                        <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>


                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="fat">Fat</label>
                                <input  {...register('fat', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.fat && <p className='text-red-600'><small>{errors.fat.message}</small></p>}

                            </div>



                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="protine">Protine</label>
                                <input  {...register('protine', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.protine && <p className='text-red-600'><small>{errors.protine.message}</small></p>}

                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>


                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="crab">Carb</label>
                                <input  {...register('crab', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.crab && <p className='text-red-600'><small>{errors.crab.message}</small></p>}

                            </div>



                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="fiber">Fiber</label>
                                <input  {...register('fiber', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.fiber && <p className='text-red-600'><small>{errors.fiber.message}</small></p>}

                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>


                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="netCrab">Net Carb</label>
                                <input  {...register('netCrab', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.netCrab && <p className='text-red-600'><small>{errors.netCrab.message}</small></p>}

                            </div>



                            <div className='mt-4 w-full text-start'>
                                <label htmlFor="calories">Calories</label>
                                <input  {...register('calories', { required: 'This field is required' },
                                )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.calories && <p className='text-red-600'><small>{errors.calories.message}</small></p>}

                            </div>
                        </div>


                        <input type="submit" className='btn bg-gradient-to-r from-red-600 to-orange-400 border-none text-white mt-8 w-full rounded-sm hover:from-orange-400 hover:to-red-600  transition-all duration-300 hover:delay-300' value={'Add Chart'} />

                    </form>


                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default AddChart;