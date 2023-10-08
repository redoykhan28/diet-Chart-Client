import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const TotalUser = () => {

    const [users, setUsers] = useState([])

    //for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users.length / recordPerPage);
    const numbers = Array.from({ length: npage }, (_, i) => i + 1)
    console.log(numbers)



    useEffect(() => {
        fetch('http://localhost:5000/totalUser', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setUsers(data)
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


    //handle Admin
    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/admin/${user._id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }


        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`Admin added successfully`);
                    window.location.reload()
                }
            })
    }


    return (
        <div data-aos="fade-up">
            <h1 className='text-center text-2xl mt-12 font-semibold'>Total Users</h1>

            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table p-4 mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead className='bg-gradient-to-r from-red-600 to-orange-400 text-white'>
                            <tr>
                                <th>Sl ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                records?.map((user, i) =>
                                    <tr key={user._id}>

                                        <td>{user?.id}</td>
                                        <td>
                                            <div className='flex items-center'>
                                                {user.username}
                                            </div>

                                        </td>
                                        <td>{user?.email}</td>

                                        <td>
                                            {
                                                user?.role === "admin" ?
                                                    <td className='font-bold'>Admin</td>
                                                    :
                                                    <Link onClick={() => handleAdmin(user)} className='btn btn-xs bg-gradient-to-r from-red-600 to-orange-400 text-white hover:to-red-600  transition-all duration-300 hover:delay-300'>Make Admin</Link>
                                            }
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
                            <button key={i + 1} onClick={() => changeCpage(n)} className={`join-item btn ${currentPage === n ? 'btn-active bg-orange-400 text-white' : ''}`}>{n}</button>
                        ))
                    }

                    <button onClick={nextPage} className="join-item btn">Next</button>
                </div>

            </div>

            <Toaster />
        </div >
    );
};

export default TotalUser;