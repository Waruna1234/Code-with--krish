import axios from "axios";
const CreateCustomer = "http://localhost:3002/customer";

export const crete_customer = async (customer) => {
    try {
      return await axios.post(CreateCustomer, customer);
    } catch (error) {
      console.log(error);
    }
  };

 export const GetCustomers = async()=>{
    return axios.get(CreateCustomer)
}