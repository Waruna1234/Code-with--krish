import React from 'react';
import { crete_customer } from '../service/customer-service.ts';


const AddCustomerDetails = () => {

    const [customerName, setcustomerName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [add, setAddress] = React.useState("");

    const handleCustomerSubmit = async (e) => {
        e.preventDefault();
        try {

            const customer = {
                name: customerName,
                email:email,
                add:add
            }
            const respons = await crete_customer(customer)
            console.log(respons)
        } catch (error) {
            console.error(error)
            alert(error.name)

        }
        console.log("Customer submited");
        

    }

    return (
        <div>
            <form onSubmit={handleCustomerSubmit}>
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" id="cus_name" name="cus_name" value={customerName} onChange={(e) => setcustomerName(e.target.value)} required />
            <br />

            <label htmlFor="emai">Eamil</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />


            <label htmlFor="add">Address</label>
            <input type="text" id="add" name="add" value={add} onChange={(e) => setAddress(e.target.value)} required />
            <br />

            <button type="submit" value="Submit" >submit</button>
            </form>


        </div>
    )
}

export default AddCustomerDetails;