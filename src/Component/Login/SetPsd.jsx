import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';

const SetPsd = () => {

    const { passwordReset } = useContext(authProvider);


    //state for error
    const [error, setError] = useState(null)

    //state for mail
    const [mail, setMail] = useState(null);
    console.log(mail)

    //get email address
    const handleEmail = (e) => {
        e.preventDefault();
        const email = e.target.value;
        console.log(email)
        setMail(email);
    }

    const setupPsd = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.value;

        passwordReset(mail)
            .then(() => {

                toast.success('Check your email to reset your password')
                form.reset()
                setError(null)
            })
            .catch(err => {

                console.log(err);
                setError('Please type your email')
            })
    }

    return (
        <div data-aos="fade-up" className=' rounded-3xl shadow-sm flex justify-center items-center w-96  mb-10 mx-auto'>
            <div className="card w-96 p-8  ">
                <h4 className='text-center text-2xl text-[#3CBD72] font-semibold mt-4 mb-6'>Login</h4>
                <form onSubmit={setupPsd}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onBlur={handleEmail} type="email" name='email' placeholder="Ex: JhonDoe@gmail.com" className="input input-bordered w-full max-w-xs rounded-lg" required />
                    </div>

                    <p className='text-red-600 my-3 text-start'><small>{error}</small></p>
                    <input type="submit" className='btn bg-[#3CBD72] hover:bg-[#5BCE67] border-none text-white mt-8 w-full rounded-sm' value={'Set Password'} />

                </form>

                <p className='my-2'>Switch back to login? <Link className='text-blue-600' to={'/login'}>Login</Link></p>


            </div>
            <Toaster />
        </div>
    );
};

export default SetPsd;