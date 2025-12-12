import { Router } from "express";
import productController from "../controllers/productController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = Router();

// Todos los productos
router.get("/", productController.getAllProducts);

// un producto
router.get("/:id", productController.getProductById);

// POST un producto
router.post("/", authenticateToken, productController.createProduct);

//Delete un producto
router.delete("/:id", authenticateToken, productController.deleteProduct);

export default router;