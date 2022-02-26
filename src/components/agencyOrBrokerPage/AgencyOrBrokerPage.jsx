import React from 'react'
import { Table } from 'react-bootstrap'

function AgencyOrBrokerPage() {
  const agencyData = [
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'kded',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      companyName: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
  ]

  return (
    <div>

      <div className='section w-75 mt-5'>
        <h3>Agency Page</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Line of Bussiness</th>
              <th>Status</th>
              <th>Co-Ordinator</th>
            </tr>
          </thead>
          <tbody>
            {agencyData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.companyName}</td>
                  <td>{e.lineOfBussiness}</td>
                  <td>{e.status}</td>
                  <td>{e.coOrdinate}</td>

                </tr>


              )

            })}

          </tbody>
        </Table>
      </div>
    </div>


  )
}

export default AgencyOrBrokerPage