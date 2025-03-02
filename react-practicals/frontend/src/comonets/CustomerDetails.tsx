import React, { useEffect, useState } from 'react';
import { GetCustomers } from '../service/customer-service.ts';
function VieweCustomerDetails(){

    const [customers, setCutomers] = useState([]);

    const fetcchOrder = async () => {
        try {
            const respon = await GetCustomers();
            setCutomers(respon?.data || []);
            console.log(respon.data);
        } catch (error) {
            console.error("Error", error)
        }
    }
    

    useEffect(() => {
        const fetchData = async () => {
            await fetcchOrder();
        };
        fetchData();
    }, []);


    return(
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {customers && customers.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.add}</td>
                                    <td><button>edit</button></td>
                                    <td><button>View</button></td>
                                </tr>
                            );
                        })}
                </tbody>


            </table>
        </div>
        
        
    )

}
export default VieweCustomerDetails;