import axios from "axios";
const baseUrl = " http://localhost:3001/inventory";

export const crete_Product = async (product) => {
    try {
      return await axios.post(baseUrl, product);
    } catch (error) {
      console.log(error);
    }
  };

 export const getAllProduct = async()=>{
    return axios.get(baseUrl)
}