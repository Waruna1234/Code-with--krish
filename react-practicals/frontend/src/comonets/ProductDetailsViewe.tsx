import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../service/productSevise.ts';
function VieweProducts(){

    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const respon = await getAllProduct();
            setProducts(respon?.data || []);
            console.log(respon.data);
        } catch (error) {
            console.error("Error", error)
        }
    }
    

    useEffect(() => {
        const fetchData = async () => {
            await fetchProduct();
        };
        fetchData();
    }, []);


    return(
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {products && products.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
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
export default VieweProducts;