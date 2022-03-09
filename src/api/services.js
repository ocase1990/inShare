import axios from "axios";

export async function getHeartbeat() {
    try {
        const res = await axios.get(`/rest/heartbeat`);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export async function getProducts() {
    try {
        const res = await axios.get(`/rest/product/getProducts`);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export async function getProductsById(productUUID) {
    try {
        const res = await axios.get(`/rest/product/getProduct/${productUUID}`);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export async function addProduct(productObj) {
    try {
        const res = await axios.post(`/rest/product/createProduct`, productObj);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export async function updateProduct(productObj) {
    try {
        const res = await axios.put(`/rest/product/updateProduct`, productObj);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}

export async function deleteProduct(productUUID) {
    try {
        const res = await axios.delete(`/rest/product/deleteProduct/${productUUID}`);
        return res.data
    } catch (error) {
        console.error('Error: ', error)
    }
}