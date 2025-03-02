import React from 'react';
import { crete_Product } from '../service/productSevise.ts';


const AddProduct = () => {

    const [productName, setproductName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [qyt, setQty] = React.useState("");

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        try {

            const customer = {
                name: productName,
                price:price,
                quantity:qyt
            }
            const respons = await crete_Product(customer)
            console.log(respons)
        } catch (error) {
            console.error(error)
            alert(error.name)

        }
        console.log("Product submited");
        

    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="pro_name" name="pro_name" value={productName} onChange={(e) => setproductName(e.target.value)} required />
            <br />

            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <br />


            <label htmlFor="qyt">Quantity</label>
            <input type="text" id="qyt" name="qyt" value={qyt} onChange={(e) => setQty(e.target.value)} required />
            <br />

            <button type="submit" value="Submit" >submit</button>
            </form>


        </div>
    )
}

export default AddProduct;