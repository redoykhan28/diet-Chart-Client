import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import { getToken } from '../../Token/Token';

const Signup = () => {

    //use location and navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const navigate = useNavigate();

    //use context
    const { signUp, updateUser, handleVarificationMail } = useContext(authProvider)

    //state for error
    const [error, setError] = useState(null)

    //use react hook form
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handlesignup = (data) => {

        // console.log(data)

        const role = "user"
        const id = '1'

        //handle signup
        signUp(data?.email, data?.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
                handleProfile(data?.username)
                postUser(data.username, data.email, role, id)
                toast.success('Successfully SignUp')
                handleMailVarification()
                reset()
                navigate('/')
            })
            .catch(err => {
                console.error(err);
                setError("Invalid Username or Password");
            })


    }

    //post user
    const postUser = (username, email, role, id) => {

        const currentUser = {
            username,
            email,
            role,
            id
        }

        fetch('http://localhost:5000/users', {

            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getToken(email)
            })

    }

    //update profile
    const handleProfile = (name) => {

        updateUser(name)
            .then(() => console.log('Profile updated:', name))
            .catch(err => console.log(err))
    }

    //handle email varificatons
    const handleMailVarification = () => {

        handleVarificationMail()
            .then(() => {

                toast.success('A varification link send to youe email! please varify');

            })

    }


    return (
        <div className='rounded-lg flex justify-center items-center lg:w-1/2  mx-auto'>
            <div className="card p-8 bg-base-100 ">
                <h4 className='text-center text-2xl mt-16 text-[#3CBD72] mb-6 font-semibold'>SIGNUP</h4>
                <form onSubmit={handleSubmit(handlesignup)}>

                    <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>
                        <div className='mt-4 w-full text-start'>
                            <label htmlFor="username">Username*</label>
                            <input placeholder="Ex: Jhon Doe" {...register('username', { required: 'This field is required' })} type="text" className="input   input-bordered w-full rounded-sm mt-1" />

                            {errors.username && <p className='text-red-600'><small>{errors.username.message}</small></p>}

                        </div>

                        <div className='mt-4 w-full text-start'>
                            <label htmlFor="email">Email*</label>
                            <input placeholder="Ex: JhonDoe@gmail.com" {...register('email', { required: 'This field is required' })} type="email" className="input         input-bordered w-full rounded-sm mt-1" />

                            {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}

                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>



                        <div className='mt-4 w-full text-start'>
                            <label htmlFor="password">Password*</label>
                            <input  {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password Should be 6 length long' } },
                            )} type="password" className="input input-bordered w-full rounded-sm mt-1" />

                            {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}

                        </div>
                    </div>

                    <p className='text-red-600 my-3 text-start'><small>{error}</small></p>
                    <input type="submit" className='btn bg-[#3CBD72] hover:bg-[#5BCE67] border-none text-white mt-8 w-full rounded-sm' value={'Register'} />

                </form>

                <p className='my-2'>Already have an account? <Link
                    className='text-blue-600' to={'/Login'}>Login</Link></p>
            </div>
            <Toaster />
        </div>
    );
};

export default Signup;