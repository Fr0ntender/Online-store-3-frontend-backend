import React from 'react'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import {
    HeaderH1,
    Desc1,
    Desc2,
} from '../../styles/typography.style'

import Navbar from '../../components/Navbar'

const Description = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar
                        desc={true}/>
                </Col>
            </Row>
            <Row mt="40">
                <Col>
                    <HeaderH1>
                        Описание:
                    </HeaderH1>
                    <Desc1>
                        Это 3 версия демонстрационного приложения, которое представляет собой небольшую часть функционала интернет-магазина с упрощенной панелью управления администратора, в которую можно войти, используя "test" в качестве логина и пароля. От 2 версии отличается тем что написанно при помощи GraphQL и Apollo.
                    </Desc1>
                    <Desc2 mt="40">
                        В разработке использовал:
                    </Desc2>
                    <Desc1>
                        Для клиента: React / React-Apollo / Redux / Styled Components.
                    </Desc1>
                    <Desc1>
                        Для сервера: Node / GraphQL / Express / Mongoose.
                    </Desc1>
                    <Desc1>
                        База данных: MongoDB.
                    </Desc1>
                    <Desc1>
                        Приложение развёрнуто на: AWS ES2 - Ubuntu 18.04 при помощи Docker и Nginx.
                    </Desc1>
                </Col>
            </Row>
        </Container>
    )
}

export default Description
