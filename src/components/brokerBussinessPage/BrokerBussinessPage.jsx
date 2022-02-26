import React from 'react'
import { Table } from 'react-bootstrap'

function BrokerBussinessPage() {

  const brokerData = [
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'kded',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },
    {
      name: 'auto',
      lineOfBussiness: 'asda',
      status: 'xxx',
      coOrdinate: 'abc'
    },

  ]
  return (
    <div >

      <div className='section w-75 mt-5'>
        <h3>Broker Bussiness Page</h3>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Name</th>
              <th>Line of Bussiness</th>
              <th>Status</th>
              <th>Co-Ordinator</th>
            </tr>
          </thead>
          <tbody>
            {brokerData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.name}</td>
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

export default BrokerBussinessPage