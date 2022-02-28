import React from 'react'
import { Table } from 'react-bootstrap'
import './CustomerListPage.css'

function CustomerListPage() {
  const customerData = [
    {
      entry: 'auto',
      name: 'jjrrofif',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'kded',
      name: 'ddsf',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: 'fnsdjfhdu',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: ' nmbhfb',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: 'Omkar',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: 'Omkar',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: 'Omkar',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
    {
      entry: 'auto',
      name: 'Omkar',
      lineOfBussiness: 'asda',
      status: 'xxx',
      bussinessOwner: 'abc'
    },
  ]
  return (
    <div>

      <div className='table' >
      <h3>Customer List Page</h3>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Entity Type</th>
              <th>Name</th>
              <th>Line of Bussiness</th>
              <th>Status</th>
              <th>Bussiness Owner</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((e,i) => {
              return (
                <tr key={i}>
                  <td>{e.entry}</td>
                  <td>{e.name}</td>
                  <td>{e.lineOfBussiness}</td>
                  <td>{e.status}</td>
                  <td>{e.bussinessOwner}</td>
                </tr>

              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default CustomerListPage