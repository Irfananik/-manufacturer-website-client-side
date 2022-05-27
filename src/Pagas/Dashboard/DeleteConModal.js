import React from 'react';
import { toast } from 'react-toastify';

const DeleteConModal = ({ deleteUser, refetch, setDeleteUser }) => {
    const { name, _id } = deleteUser
    const handleDelete = email => {
        fetch(`http://localhost:5000/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast(`${name} is deleted successfully!`)
                    setDeleteUser(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You sure you want to delete ${name}?</h3>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-sm">Cancel</label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConModal;