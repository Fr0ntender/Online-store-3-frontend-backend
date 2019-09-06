import React from 'react'
import { v4 } from "uuid"
import { Transition } from 'react-transition-group'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import {
    HeaderH1,
} from '../../styles/typography.style'

// import {
//     List,
//     ListElem,
//     CardRow,
//     CardWrap
// } from './Home.style'

import {
    CardRow,
    CardWrap
} from './Home.style'

import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import Authorize from '../../composables/Authorize'

const Home = ({
    data,
    modals,
    showModal,
    authorized
}) => {
    const { products = [] } = data
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar
                            data={data}
                            authorized={authorized}
                            showModal={showModal}/>
                    </Col>
                </Row>
                <Row mt="30">
                    <Col set="2">
                        {/* <aside>
                            <List>
                                <ListElem>Художественная литература</ListElem>
                                <ListElem>Бизнес-литература</ListElem>
                                <ListElem>Нехудожественная литература</ListElem>
                            </List>
                        </aside> */}
                    </Col>
                    <Col set="10">
                        <HeaderH1 mt="0" mb="20">Книги</HeaderH1>
                        <CardRow>
                            {products.map(v =>
                                <CardWrap key={v4()}>
                                    <Card
                                        key={v4()}
                                        name={v.name}
                                        vote={v.vote}
                                        year={v.year}
                                        price={v.price}
                                        rating={v.rating}
                                        imgUrl={v.imgUrl}
                                        fastName={v.fastName}
                                        lirstName={v.lirstName}
                                    />
                                </CardWrap>
                            )}
                        </CardRow>
                    </Col>
                </Row>
            </Container>
            <Transition in={modals} timeout={400} unmountOnExit={true}>{state => <Authorize state={state} />}
            </Transition >
        </div>
    )
}
export default Home