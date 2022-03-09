import React, { useState } from "react";
import { Box, TextInput, Button, Form, FormField } from "grommet";
import styled from "styled-components";


const ProductInputs = ({ onSubmit, product, indexOfProduct, setShow }) => {
    // this is repetetive however this removes the react uncontroled -> controlled error
    const emptyInputs = { name: '', description: '', productCost: '' }
    const initialValue = product ? { ...product } : emptyInputs
    const [value, setValue] = useState(initialValue);
    const inputs = {
        name: 'Product Name',
        description: 'Description',
        productCost: 'Product Cost',
    }
    
    return (
        <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue(emptyInputs)}
            onSubmit={({ value }) => { onSubmit(value, indexOfProduct) }}
        >
            {Object.entries(inputs).map(([key, input]) => {
                return (
                    <FormField key={key} name={key} htmlFor={key} label={input} >
                        <TextInput id={key} name={key} placeholder={input} />
                    </FormField>
                )

            })}
            <Box direction="row" gap="medium">
                <SubmitButton type="submit" primary label="Submit" />

                {product ? <ResetButton onClick={() => setShow(false)} type='reset' label='Cancel' /> : <ResetButton type="reset" label="Reset" />}
            </Box>
        </Form>



    )
}

export default ProductInputs;

const SubmitButton = styled(Button)`
width: 100px;
background-color: #A393BF;
padding: 5px;
margin: 5px;
font-weight: 600;
`
const ResetButton = styled(Button)`
width: 100px;
background-color: #453750;
padding 5px;
margin: 5px;
color: #A393BF;
font-weight: 600;
`