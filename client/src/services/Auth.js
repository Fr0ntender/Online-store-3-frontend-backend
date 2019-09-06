class Auth {
    login = () => {
        localStorage.setItem('sessionData', 'true')
    }
    logout = () => {
        localStorage.removeItem('sessionData')
        window.location.replace('/')
    }
}

export default new Auth()