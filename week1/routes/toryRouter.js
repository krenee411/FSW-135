const express = require('express')
const toryRouter = express.Router()
const { v4:uuidv4 } = require('uuid')

//CRUD

const InventorySchema = [
    {item: "Creator Ray", id: uuidv4()},
    {item: "Reading Glasses", id: uuidv4()},
    {item: "Prest-o-change-o", id: uuidv4()},
    {item: "Delete-o-matic", id: uuidv4()}
]
console.log(InventorySchema)

toryRouter
    .get('/', (req,res) => {
        res.send(InventorySchema)
    })

    .post('/', (req,res) => {
        const newItem = req.body;
        newItem.id = uuidv4();
        InventorySchema.push(newItem)
    })

    .put('/:toryId', (req,res) => {
        const toryId = req.params.toryId;
        const oneItem = InventorySchema.find(item => item.id === toryId);
        const updatedItems = Object.assign(InventorySchema[oneItem], req.body);
        console.log(updatedItems);
        res.send("New item was successfully added")
    })

    .delete('/:toryId', (req,res) => {
        const toryId = req.params.toryId;
        const oneItem = InventorySchema.find(item => item.id === toryId);
        InventorySchema.splice(oneItem, 1);
        res.send("the item was successfully deleted")
    })

    
    module.exports = toryRouter;