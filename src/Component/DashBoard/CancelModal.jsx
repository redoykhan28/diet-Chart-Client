import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const CancelModal = ({ deleted, setDeleted }) => {

    //handle Delete
    const handleDelete = (deletedFood) => {

        fetch(`http://localhost:5000/deleteFoods/${deletedFood?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => {

                return res.json()
            })
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    toast.success('Deleted Successfully!')
                    setDeleted(null)
                    window.location.reload()

                }
            })
    }

    return (
        <div>
            {/* modals */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div className="modal-action">
                        <form method="dialog" className='flex justify-evenly items-center'>
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleDelete(deleted)} className="btn btn-error text-white hover:bg-red-600 mx-2">Yes</button>
                            <button onClick={() => handleDelete(null)} className="btn btn-success text-white hover:bg-green-600 mx-2">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <Toaster />
        </div>
    );
};

export default CancelModal;