import React, { Component } from 'react';

export default class Clients extends Component {
  render() {
    const clients = [{
        id: '12346',
        firstName: 'Kevin',
        lastName: 'Sheehan',
        email: 'kshee@mail.com',
        phone: '123-133-6678',
        balance: '40.59'
    }]
    if(clients) {
        return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>
                        <i className="fas fa-users"></i>Clients{' '}</h2>
                </div>
            </div>

            <table className="table table-striped">
                <thead className='thead-inverse'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>{clients.map(client => (
                    <tr key={client.id}></tr>
                ))}</tbody>
            </table>
        </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
  }
}
