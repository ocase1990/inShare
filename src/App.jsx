import React, { useEffect, useState } from 'react';
import List from "./components/List"
import { Box, Text, Button, TextInput } from "grommet";
import styled from "styled-components";
import ProductInputs from './components/ProductInputs';
import { getHeartbeat, getProducts, addProduct, deleteProduct, updateProduct, getProductsById  } from './api/services';
import { v4 as uuidv4 } from 'uuid'




function App() {
    const [productIdValue, setProductIdValue] = React.useState('');
    const [products, setProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const setProductsService = async () => {
        const productList = await getProducts()
        setProducts(productList.products)
        setErrorMessage('')
    } 

    useEffect(() => {
        setProductsService()
    }, [])


    const addProductService = (product) => {
        const productWithUUID = {
            ...product,
            productId: uuidv4()
        }
        addProduct(productWithUUID)
        setProductsService()
    }
    const removeProduct = (product) => {
        const { productId } = product;
        deleteProduct(productId)
        setProductsService()
    }
    const updateProductService = async (product) => {
        await updateProduct(product)
        setProductsService()
    }

    const singleProductService = async () => {
        const singleProduct = await getProductsById(productIdValue)
        if(singleProduct) {
           setProducts([singleProduct]) 
        } else {
            setErrorMessage('Unable to find UUID')
        }
        
    }
    return (
        <MainBox>
            <h1 style={{ color: '#0c0910', borderBottom: '1px solid #A393BF' }}>Product List</h1>
            <StyledButton onClick={setProductsService} type="submit" primary label="Show All Products"/>
            <Box>
              <StyledButton onClick={() => singleProductService()} type="submit" primary label="Show Product By UUID: "/> 
              <StyledTextInput onChange={event => setProductIdValue(event.target.value)} placeholder='UUID'/>
              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </Box>
            
            <ContentContainer>
                
                <ListContainer>
                    
                    <h3>List of Products</h3>
                    <List
                        products={products}
                        removeProduct={removeProduct}
                        updateProduct={updateProductService}
                    />
                    {products.length < 1 && <Text>Products loading or empty.</Text>}
                </ListContainer>
                <AddProductContainer>
                    <h3> Add a Product </h3>
                    <ProductInputs onSubmit={addProductService} />

                </AddProductContainer>
            </ContentContainer>


        </MainBox>
    );
}

export default App;

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 80px;
`;

const ContentContainer = styled(Box)`
    flex-direction: row;
 `

const ListContainer = styled(Box)`
    margin: 30px;
`

const AddProductContainer = styled(Box)`
    margin: 30px;
    width: 200px; 
    height: auto;
`
const StyledButton = styled(Button)`
width: 260px;
background-color: #A393BF;
padding: 5px;
margin: 5px;
font-weight: 600;
`
const StyledTextInput = styled(TextInput)`
width: 260px;
padding: 5px;
margin: 5px;
font-weight: 600;
`

const ErrorText = styled(Text)`
color: red;
font-weight: 600;
`




