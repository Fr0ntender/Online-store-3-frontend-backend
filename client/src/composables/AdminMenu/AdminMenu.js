import React from 'react'
import { Link } from 'react-router-dom'

import {
    List,
    ListElem
} from './AdminMenu.style'

const AddToCard = () => {
    return (
        <aside>
            <List>
                <ListElem><Link to={`/admin/products`}>Список товаров</Link></ListElem>
                <ListElem><Link to={`/admin/addnewproduct`}>Добавить новый товар</Link></ListElem>
            </List>
        </aside>
    )
}

export default AddToCard