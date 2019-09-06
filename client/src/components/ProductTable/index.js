import React from 'react'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

import {
    HeaderH1,
    Desc2,
} from '../../styles/typography.style'

import {
    Table,
    Th,
    Td,
    Content,
    ImgArrow,
    TableDesc,
} from './ProductTable.style'

import Arrow from '../../assets/arrow.svg'

const ProductTable = ({
    data,
    sortState,
    delProduct,
    searchActive,
}) => {
    const { products = [] } = data
    return (
        <div>
            <HeaderH1 mt="0" mb="0">Список товаров</HeaderH1>
            <Table>
                <thead>
                    <tr>
                        <Th set="0.6">
                            <Content>
                                <Desc2 mt="0" mb="0">Код товара</Desc2>
                            </Content>
                        </Th>
                        <Th set="2.65" active onClick={() => searchActive('Name')}>
                            <Content>
                                <Desc2 mt="0" mb="0">Наименование</Desc2>
                                <ImgArrow src={Arrow} rotates={sortState} name="Name" />
                            </Content>
                        </Th>
                        <Th set="0.45">
                            <Content>
                                <Desc2 mt="0" mb="0">Цена</Desc2>
                            </Content>
                        </Th>
                        <Th set="0.4" active onClick={() => searchActive('Year')}>
                            <Content>
                                <Desc2 mt="0" mb="0">Год</Desc2>
                                <ImgArrow src={Arrow} rotates={sortState}
                                name="Year" />
                            </Content>
                        </Th>
                        <Th set="0.3"></Th>
                        <Th set="0.5"></Th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 
                        ? products.map(v =>
                            <tr key={v4()}>
                                <Td key={v4()} set="0.6">{v.num}</Td>
                                <Td key={v4()} set="2.65">{v.name}</Td>
                                <Td key={v4()} set="0.45">{v.price} ₽</Td>
                                <Td key={v4()} set="0.4">{v.year}</Td>
                                <Td key={v4()} set="0.3">
                                    <Link to={`/admin/products/${v.id}`}>
                                        <TableDesc mt="0" mb="0" color="change">Изменить</TableDesc>
                                    </Link>
                                </Td>
                                <Td key={v4()} set="0.5">
                                    <TableDesc mt="0" mb="0"
                                    color="remove"
                                    onClick={() => delProduct(v.id)}>Удалить</TableDesc>
                                </Td>
                            </tr>)
                        :
                        <tr><Td colSpan="6">Добавьте товары ...</Td></tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable