import React from "react";
import { Box, Layer } from "grommet";
import styled from "styled-components";
import ProductInputs from "./ProductInputs";


const EditProductModal = ({ setShow, product, updateProduct, indexOfProduct }) => {
    const submitService = (product, index) => {
        updateProduct(product, index)
        setShow(false)
    }
    return (
        <StyledLayer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
        >
            <UpdateBox>
                <h3>Update: {product.name}</h3>
            </UpdateBox>
            <ProductInputs
                product={product}
                onSubmit={submitService}
                indexOfProduct={indexOfProduct}
                setShow={setShow} />
        </StyledLayer>
    )
}

export default EditProductModal;

const UpdateBox = styled(Box)`
    width: 70vw;
`
const StyledLayer = styled(Layer)`
padding: 10px;
`
