import React, { useEffect, useState } from "react"
import { createOrder, GetOrders } from "../service/order-service";

function OrderManagement() {


    const [customerId, setCustomerId] = React.useState("");
    const [productId, setProductId] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [qty, setQty] = React.useState("");

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        try {

            const order = {
                customerId,
                items: [{
                    productId,
                    price,
                    quantity: qty
                }]

            }
            const respons = await createOrder(order)
            console.log(respons)
        } catch (error) {
            console.error(error)
            alert(error.name)

        }
        console.log("Order submited");
        console.log(customerId, productId, price, qty);

    }


    const [orders, setOrders] = useState([]);

    const fetcchOrder = async () => {
        try {
            const respon = await GetOrders();
            setOrders(respon?.data || []);
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

    return (
        <>
            <p>Create order</p>
            <form onSubmit={handleOrderSubmit}>
                <label htmlFor="cus_id">Customer ID</label>
                <input type="text" id="cus_id" name="cus_id" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
                <br />
                <label htmlFor="prod_id">Product ID</label>
                <input type="text" id="prod_id" name="prod_id" value={productId} onChange={(e) => setProductId(e.target.value)} required />
                <br />
                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <br />

                <label htmlFor="qty">QTY</label>
                <input type="text" id="qty" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} required />
                <br />
                <button type="submit" value="Submit" >submit</button>

            </form>


            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customet Id</th>
                            <th>Order Datr</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders && orders.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.customerId}</td>
                                    <td>{item.creatAt}</td>
                                    <td><button>edit</button></td>
                                    <td><button>View</button></td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        </>
    )
}
export default OrderManagement