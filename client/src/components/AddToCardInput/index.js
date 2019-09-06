import React from 'react'

import {
    Row,
    Col,
} from '../../styles/greed.style'

import {
    Desc1,
} from '../../styles/typography.style'

import {
    TextInput,
    TextInputWrap
} from '../../styles/forms.style'

const AddToCardInput = ({
    name, 
    value,
    label,
    isbnValid,
    yearValid,
    nameRequired,
    handleChange,
    lastRequired,
    firstRequired,
 }) => {
    return (
        <Row mt="20" mb="10">
            <Col set="4" flex js="flex-start" al="center">
                <Desc1 mt="0" mb="0">{name}</Desc1>
            </Col>
            <Col set="8" flex js="flex-start" al="center">
                <TextInputWrap 
                    name={label} 
                    isbnValid={isbnValid}
                    yearValid={yearValid}
                    nameRequired={nameRequired}
                    lastRequired={lastRequired}
                    firstRequired={firstRequired}
                    >
                    <TextInput type="text" name={label}
                        onChange={handleChange}
                        value={value}
                        />
                </TextInputWrap>
            </Col>
        </Row>
    )
}
export default AddToCardInput