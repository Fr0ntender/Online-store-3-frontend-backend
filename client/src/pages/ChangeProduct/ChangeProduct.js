import React from 'react'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import Navbar from '../../components/Navbar'
import AddToCard from '../../composables/AddToCard'
import AdminMenu from '../../composables/AdminMenu'

const ChangeProduct = ({
    match,
    logout,
    authorized
}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar logout={logout} 
                        authorized={authorized}
                     />
                </Col>
            </Row>
            <Row mt="30">
                <Col set="2">
                    <AdminMenu />
                </Col>
                <Col set="10">
                    <AddToCard match={match}/>
                </Col>
            </Row>
        </Container>
    )
}
export default ChangeProduct