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
                        Описание проекта
                    </HeaderH1>
                    <Desc1>
                        Вы находитесь на странице приложения которое представляет собой небольшую часть функционала интернет-магазина с упрощенной панелью управления администратора, в которую можно войти, используя "test" в качестве логина и пароля.
                        Приложение предназначено для демонстрации кода.
                    </Desc1>
                    <Desc1>
                        Приложение предназначено для демонстрации кода.
                    </Desc1>
                    <Desc2 mt="40">
                        Код приложения доступен по ссылке - <a href="http://bit.ly/2m2ip3T">http://bit.ly/2m2ip3T</a>
                    </Desc2>
                    <Desc1>
                        Ссылки созданы при помощи сервиса Bitly который помогает мне оценить важность этого приложения.
                    </Desc1>
                    <Desc2 mt="40">
                        Я использовал следющий стэк для создания приложения:
                    </Desc2>
                    <Desc1>
                        Клиент: React / React-Apollo / Redux / Styled Components.
                    </Desc1>
                    <Desc1>
                        Сервер: Node / GraphQL / Express / Mongoose.
                    </Desc1>
                    <Desc1>
                        База данных: MongoDB.
                    </Desc1>
                    <Desc1>
                        Приложение развёрнуто на: AWS ES2 - Ubunu.18.04 при помощи Docker и Nginx.
                    </Desc1>
                </Col>
            </Row>
        </Container>
    )
}

export default Description
