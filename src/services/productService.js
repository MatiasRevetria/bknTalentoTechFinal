import productModel from "../models/productModel.js";

const getAllProducts = async () => {
    return await productModel.getAll();
};

const getProductById = async (id) => {
    return await productModel.getById(id);
};

const createProduct = async (product) => {
    return await productModel.create(product);
};

const deleteProduct = async (id) => {
    return await productModel.remove(id);
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
};
