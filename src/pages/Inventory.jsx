import React, { useEffect, useState } from 'react'
import {Layout} from "./index";
import { AddInventoryModal } from '../components';
import API from '../services/API';
import dateFormat, { masks } from "dateformat";

const Inventory = () => {
  const [data, setData] = useState([]);
  const getInventoryRecords = async () => {
    try {
      const res = await API.get("inventory/get-inventory-data");
      if (res.data.status) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("Error in API call",error);
    }
  }
  useEffect(() => {
    getInventoryRecords();
  }, []);
  
  return (
    <Layout>
      <div className='p-2'>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-outline-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">Add Inventory</button>
        <AddInventoryModal />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Quantity (ML)</th>
              <th scope="col">Email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((inventory, index) => (
              <tr key={inventory._id}>
                <th scope="row">{++index}</th>
                <td>{inventory.inventoryType.toUpperCase()}</td>
                <td>{inventory.bloodGroup}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.email}</td>
                <td>
                  {dateFormat(inventory.createdAt, "dd mmmm, yyyy h:MM:ss TT")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  )
}

export default Inventory;