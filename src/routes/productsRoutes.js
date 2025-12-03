import { Router } from "express";

const router = Router();

let products = [
    {
        id: 1,
        name: "Producto 1",
        price: 100
    },
    {
        id: 2,
        name: "Producto 2",
        price: 200
    },
    {
        id: 3,
        name: "Producto 3",
        price: 300
    }
];

// Todos los productos
router.get("/", (req, res) => {
    res.json(products);
});

// un producto
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === id);
    res.json(product);
});

// POST un producto
router.post("/", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

//Delete un producto
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === id);
    products = products.filter(product => product.id !== id);
    res.json(product);
});

export default router;