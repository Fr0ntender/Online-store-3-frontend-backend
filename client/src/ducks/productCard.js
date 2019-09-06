import prefixRequestAction from '../helper/prefixRequestAction'
import { 
    prodUrl,
    devUrl,
    devPort
} from '../etc/config.json'
// import removeProductData from '../helper/removeProductData'
// import chengeProductData from '../helper/chengeProductData'
// import sortProductData from '../helper/sortProductData'

export const [
    ADD_CARD_DATA_START,
    ADD_CARD_DATA_SUCCESS,
    ADD_CARD_DATA_FAIL,
] = prefixRequestAction('ADD_CARD_DATA')

export const [
    RELOAD_CARD_DATA_START,
    RELOAD_CARD_DATA_SUCCESS,
    RELOAD_CARD_DATA_FAIL,
] = prefixRequestAction('RELOAD_CARD_DATA')

export const [
    CHENGE_CARD_DATA_START,
    CHENGE_CARD_DATA_SUCCESS,
    CHENGE_CARD_DATA_FAIL,
] = prefixRequestAction('CHENGE_CARD_DATA')

export const [
    DELATE_CARD_DATA_START,
    DELATE_CARD_DATA_SUCCESS,
    DELATE_CARD_DATA_FAIL,
] = prefixRequestAction('DELATE_CARD_DATA')

export const [
    SORT_CARD_DATA_START,
    SORT_CARD_DATA_SUCCESS,
    SORT_CARD_DATA_FAIL,
] = prefixRequestAction('SORT_CARD_DATA')

const apiPrefix = process.env.NODE_ENV === 'development' ? `${devUrl}:${devPort}`
: prodUrl
/*
    Action to add data to the product card
*/
export const addCardData = data => dispath => {

    const url = `${apiPrefix}/api/product/add`

    dispath({
        type: ADD_CARD_DATA_START
    })

    if (typeof data.productId === 'number') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(error => dispath({
            type: ADD_CARD_DATA_FAIL,
            payload: {
                payload: `Add fetching error - ${error}`
            }
        }))
        dispath({
            type: ADD_CARD_DATA_SUCCESS
        })

    } else {
        dispath({
            type: ADD_CARD_DATA_FAIL,
            payload: 'The coincidence of dates in the localStorage'
        })
    }
}

/*
    Action update products (run in componentWillMount())
*/
export const reloadCardData = () => dispath => {

    const url = `${apiPrefix}/api/product`

    dispath({
        type: RELOAD_CARD_DATA_START
    })

    fetch(url)
        .then(res => res.json())
        .then(data => {
            dispath({
                type: RELOAD_CARD_DATA_SUCCESS,
                payload: data
            })
        })
        .catch(error => dispath({
            type: RELOAD_CARD_DATA_FAIL,
            payload: `Reload fetching error - ${error}`
        }))
}

/*
    Action data changes in the product card
*/
export const chengeCardData = (id, data) => dispath => {

    const url = `${apiPrefix}/api/product/change/${id}`

    dispath({
        type: CHENGE_CARD_DATA_START
    })

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            dispath({
                type: CHENGE_CARD_DATA_SUCCESS
            })
        })
        .catch(error => dispath({
            type: CHENGE_CARD_DATA_FAIL,
            payload: `Change fetching error - ${error}`
        }))
}

/*
    Action to delete product data
*/
export const delateCardData = id => dispath => {

    const url = `${apiPrefix}/api/product/${id}`

    dispath({
        type: DELATE_CARD_DATA_START
    })

    fetch(url, {
        method: 'DELETE'
    })
        .then(() => {
            dispath({
                type: DELATE_CARD_DATA_SUCCESS,
            })
        })
        .catch(error => dispath({
            type: DELATE_CARD_DATA_FAIL,
            payload: `Delate fetching error - ${error}`
        }))
}

/*
    Action to change the data in the product card
*/
export const sortCardData = (state, name) => dispath => {

    const url = `${apiPrefix}/api/product/sort`

    dispath({
        type: SORT_CARD_DATA_START
    })

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({state, name})
    })
        .then(res => res.json())
        .then(data => {
            dispath({
                type: SORT_CARD_DATA_SUCCESS,
                payload: data
            })
        })
        .catch(err => dispath({
            type: SORT_CARD_DATA_FAIL,
            payload: {
                payload: `Sort fetching error - ${err}`
            }
        }))
}

export default function (state = {
    fetching: false,
    error: '',
    cardData: []
}, action) {
    switch (action.type) {
        case ADD_CARD_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case ADD_CARD_DATA_SUCCESS:
            return {
                ...state,
                fetching: false
            }
        case ADD_CARD_DATA_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case RELOAD_CARD_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case RELOAD_CARD_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                cardData: action.payload
            }
        case RELOAD_CARD_DATA_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case CHENGE_CARD_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case CHENGE_CARD_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
            }
        case CHENGE_CARD_DATA_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case DELATE_CARD_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case DELATE_CARD_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                cardData: action.payload
            }
        case DELATE_CARD_DATA_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case SORT_CARD_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case SORT_CARD_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                cardData: action.payload
            }
        case SORT_CARD_DATA_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}