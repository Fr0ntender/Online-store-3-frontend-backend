import React from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import Search from '../../components/Search'
import LoginSrc from '../../assets/login.svg'
import ExitSrc from '../../assets/exit.svg'
import Logo from '../../assets/logo.svg'
// import BooksSrc from '../../assets/books.svg'
// import TrashSrc from '../../assets/trash.svg'

import {
    Nav,
    Logos,
    Icons,
    IconText,
    LogosIcon,
    LogosDesc,
} from './Navbar.style'

const Navbar = ({
    data,
    logout,
    showModal,
    authorized,
}) => {
    return (
        <Nav>
            <Link to="/">
                <Logos>
                    <LogosIcon src={Logo} alt="logotype" />
                    <LogosDesc>React</LogosDesc>
                </Logos>
            </Link>
            <Search data={data}/>
            {
                authorized
                    ?
                    (
                        !logout
                            ?
                            <Link to="/admin/products">
                                <Icons enter={true} >
                                    <ReactSVG src={LoginSrc}/>
                                    <IconText>Войти</IconText>
                                </Icons>
                            </Link>
                            :
                            <Icons onClick={logout}>
                                <ReactSVG src={ExitSrc} />
                                <IconText>Выйти</IconText>
                            </Icons>
                    )
                    :
                    <Icons onClick={showModal} enter={true} >
                        <ReactSVG src={LoginSrc} />
                        <IconText>Войти</IconText>
                    </Icons>
            }
            {/* <Icons>
                <ReactSVG src={BooksSrc} />
                <IconText>Книги</IconText>
            </Icons>
            <Icons>
                <ReactSVG src={TrashSrc} />
                <IconText>Корзина</IconText>
            </Icons> */}
        </Nav>
    )
}

export default Navbar