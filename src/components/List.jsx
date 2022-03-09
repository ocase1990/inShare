import React, { useState } from "react";
import { Close } from 'grommet-icons';
import { Box, Image, Text, Button } from "grommet";
import styled from "styled-components";
import EditProductModal from "./EditProductModal";

const List = ({ products, removeProduct, updateProduct }) => {
    const [show, setShow] = useState(false)
    const [indexOfProduct, setIndexOfProduct] = useState()
    const editProductModalService = (index) => {
        setIndexOfProduct(index)
        setShow(true)
    }
    return (
        <>
            {products.map((product, index) => {
                return (
                    <div key={product.name}>
                        <ActionsBox>
                            <EditButton onClick={() => editProductModalService(index)}> Edit </EditButton>
                            <RemoveButton onClick={() => removeProduct(product)}><Close size='small' /> Remove </RemoveButton>
                        </ActionsBox>
                        <ProductCard >
                            <TextBox>
                                <u>
                                    <li>
                                        <TitleText>{product.name}</TitleText>
                                    </li>
                                </u>
                                <Text> {product.productCost}</Text>
                                <Text>{product.description} </Text>
                            </TextBox>
                        </ProductCard>
                    </div>
                )
            })}
            {show &&
                <EditProductModal
                    product={products[indexOfProduct]}
                    setShow={setShow}
                    updateProduct={updateProduct}
                    indexOfProduct={indexOfProduct}
                />
            }

        </>
    )
}

export default List;

const ActionsBox = styled(Box)`
    justify-content: space-between;
    flex-direction: row;
    margin-left: 10px;
`
const EditButton = styled(Button)`
    color: #453750;
    font-weight: 600;
    margin-left: 10px;
`
const RemoveButton = styled(Button)`
    color: red;
    font-weight: 600;
    margin-right: 10px
`
const ProductCard = styled(Box)`
    margin-bottom: 10px;
    background: linear-gradient(#0C0910, #453750);
    border: 3px solid #A393BF;
    padding-horizontal: 50px;
    width: 300px;
    border-radius: 10px;
    color: #A393BF;
`
const TitleText = styled(Text)`
    width: 100%
    align-text: center;
    font-weight: 700;
`
const TextBox = styled(Box)`
    margin: 5px
`