import React, { useEffect, useState } from 'react'

import {Layout} from "./index";
import API from '../services/API';

const Donar = () => {
  const [data, setData] = useState([]);
  const getDonarsRecords = async () => {
    try {
      const res = await API.get("inventory/get-donars");
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
        <h2>List of Donars</h2>
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
            {data.map((donar, index) => (
              <tr key={donar._id}>
                <th scope="row">{++index}</th>
                <td>{donar.name}</td>
                <td>{donar.email}</td>
                <td>{donar.address}</td>
                <td><a href="tel:+{donar.phone}">{donar.phone}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  )
}

export default Donar;