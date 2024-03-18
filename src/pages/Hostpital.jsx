import React, { useEffect, useState } from 'react'

import {Layout} from "./index";
import API from '../services/API';

const Hospital = () => {
  const [data, setData] = useState([]);
  const getDonarsRecords = async () => {
    try {
      const res = await API.get("inventory/get-hospitals");
      if (res.data.status) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("Error in API call",error);
    }
  }
  useEffect(() => {
    getDonarsRecords();
  }, []);
  return (
    <Layout>
      <div className='p-2'>
        <h2>List of Hospital</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((hospital, index) => (
              <tr key={hospital._id}>
                <th scope="row">{++index}</th>
                <td>{hospital.name || hospital.hospitalName}</td>
                <td>{hospital.email}</td>
                <td>{hospital.address}</td>
                <td><a href="tel:+{hospital.phone}">{hospital.phone}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  )
}

export default Hospital;