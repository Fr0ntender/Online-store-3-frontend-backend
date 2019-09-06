import React from 'react'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import Navbar from '../../components/Navbar'
import AdminMenu from '../../composables/AdminMenu'
import ProductTable from '../../components/ProductTable'

const Products = ({
    data,
    logout,
    history,
    delProduct,
    authorized,
    searchActive,
 }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar logout={logout}
                        data={data}
                        authorized={authorized}
                     />
                </Col>
            </Row>
            <Row mt="30">
                <Col set="2">
                    <AdminMenu />
                </Col>
                <Col set="10">
                    <ProductTable
                        data={data}
                        sortState={history.location}
                        searchActive={searchActive}
                        delProduct={delProduct}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Products