import React, { useRef } from 'react'

// import {
//     Container,
//     Row,
//     Col,
// } from '../../styles/greed.style'

import {
    HeaderH1
} from '../../styles/typography.style'

import {
    LoginWrapper,
    LoginModal,
    ModalHolder,
    InputRow,
    InputLabel,
    Input,
    LoginButton,
    Footer
} from './Authorize.styled';

const Authorize = ({
    state,
    authorize,
    triggerModal
}) => {
    const $login = useRef(null)
    const $password = useRef(null)
    const $modals = useRef(null)
    const closeModal = e => {
        if (!$modals.current.contains(e.target)) {
            triggerModal({
                name: 'adminIsOpen',
                state: false,
            })
        }
    }
    const hideModal = () => {
        triggerModal({
            name: 'adminIsOpen',
            state: false,
        })
    }
    const Login = (
        <LoginModal ref={$modals} visibles={state}>
            <ModalHolder>
                <HeaderH1 mt="55" mb="40">
                    Вход
                </HeaderH1>

                <form onSubmit={authorize({
                    username: $login,
                    password: $password,
                })}>
                    <InputRow marginBottom="48.38">
                        <Input ref={$login} type="text" required="required" autoFocus id="login" autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" name="email" defaultValue="" />
                        <InputLabel htmlFor="login">
                            Логин
                    </InputLabel>
                    </InputRow>
                    <InputRow marginBottom="40.62">
                        <Input ref={$password} type="password" required="required" id="password" defaultValue="" />
                        <InputLabel htmlFor="password">
                            Пароль
                    </InputLabel>
                    </InputRow>

                    <Footer top="40" bottom="67.79">
                        <LoginButton type="submit" onClick={hideModal}>
                            Войти
                        </LoginButton>
                    </Footer>
                </form>
            </ModalHolder>
        </LoginModal>
    )

    return (
        <LoginWrapper visibles={state} onClick={closeModal}>
            {Login}
        </LoginWrapper>
    )
}

export default Authorize;