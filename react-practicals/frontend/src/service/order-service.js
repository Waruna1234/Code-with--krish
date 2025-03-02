import axios from'axios'


const baseUrl = "http://localhost:5000/orders"
const  createOrder = async(order)=>{
    return axios.post(baseUrl,order)
}
const GetOrders = async()=>{
    return axios.get(baseUrl)
}
export { GetOrders,createOrder}; 