import React, { useState } from 'react';
import InputType from './Form/InputType';
import { toast } from 'react-toastify';
import API from './../services/API';
const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
import { useSelector } from 'react-redux';


const AddInventoryModal = () => {
    const [inventoryType, setInventoryType] = useState("in");
    const [bloodGroup, setBloodGroup] = useState("");
    const [email, setEmail] = useState("");
    const [quantity, setQuantity] = useState("");
    const {user} = useSelector(state => state.auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!bloodGroup || !email || !quantity) {
            toast.error("All Fields are mandatory");
            return false;
        }
        try {
            const res = await API.post("inventory/create",{
                inventoryType, bloodGroup, quantity, organisation: user?._id, email
            });
            toast.success(res.data.message);
            if (res.data.status) {
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            console.log("Error in API call",error);
            toast.error(error.response.data.message);
        }
    }
    
  return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Manage Blood Groups</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"  aria-label="Close"/>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="d-flex">
                                <p>Blood Type</p>
                                <div className="form-check ms-3">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inventoryType"
                                    id="flexRadioDefault1"
                                    value="in"
                                    defaultChecked
                                    onChange={(e) => setInventoryType(e.target.value)}
                                    required={true}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">IN</label>
                                </div>
                                <div className="form-check ms-3">
                                    <input 
                                    className="form-check-input"
                                    type="radio"
                                    value="out"
                                    name="inventoryType"
                                    id="flexRadioDefault2"
                                    onChange={(e) => setInventoryType(e.target.value)}
                                    required={true}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">OUT</label>
                                </div>
                            </div>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => setBloodGroup(e.target.value)} required={true}>
                                <option defaultValue="">Select Blood Group</option>
                                {bloodGroups.map((bloodGroup) => (
                                    <option key={bloodGroup} value={bloodGroup}>{bloodGroup}</option>
                                ))}
                            </select>
                            <div className="mb-3">
                                <InputType labelTitle="Email" inputType="text" id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="mb-3">
                                <InputType labelTitle="Quantity (ML)" inputType="number" id="quantity" placeholder="Enter quantity here" name="quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddInventoryModal
