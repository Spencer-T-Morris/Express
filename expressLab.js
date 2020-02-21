import cartItem from "./cartItem.js";
"use strict"
// require the Express module
import express from "express";
// creates an instance of an Express server
const app = express();
// define the port
const port = 3000;
// run the server
app.use(express.json())
app.listen(port, () => console.log(`Listening on port: ${port}.`));
//node expressLab


// respond with "Hello Class!" at URI: /students
app.get("/cartItem", (req, res) => {
    res.json(cartItem);
    });
// respond with "Hello Class!" at URI: /students
app.get("/cartItem/:id", (req, res) => {
   let cart_Item = cartItem.find(function(element){
        return element.id === parseInt(req.params.id);
    })
    if(cart_Item === undefined){
        res.status(404);
    }else{
        res.status(200);
    }
    res.json(cart_Item);
    });
// accept POST request at URI: /students
app.post("/cartItem", (req, res) => {
    const body = req.body;
    const ID = new Date().getTime();
    const newItem = {
        id: ID,
        product: body.product,
        price: body.price,
        quantity: body.quantity
    };
    cartItem.push(newItem)
    res.json(newItem)
    });
// accept PUT request at URI: /students
app.put("/cartItem/:id", (req, res) => {
    let cart_Item = cartItem.findIndex(function(element){
        return element.id === parseInt(req.params.id);
    })
    if(cart_Item === undefined){
        res.status(404);
    }else{
        res.status(200);
        const body = req.body;
        const newItem = {
        id: parseInt(req.params.id),
        product: body.product,
        price: body.price,
        quantity: body.quantity

    }; cartItem[cart_Item] =newItem
        res.json(cartItem[cart_Item])
    }
    
    res.json(cartItem[cart_Item]);
    });
// accept DELETE request at URI: /students
app.delete("/cartItem/:id", (req, res) => {
    let cart_Item = cartItem.findIndex(function(element){
        return element.id === parseInt(req.params.id);
    })
    if(cart_Item >= 0){
    res.json(cartItem.splice(cart_Item,1,));}else{
        res.status(404)
        res.end()
    }
    });

//findindex








function log(){
    console.log(cartItem)
}
log()