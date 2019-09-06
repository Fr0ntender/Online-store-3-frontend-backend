import React from 'react'

import {
    BayButton1
} from '../../styles/button.style'

import {
    CardWrap,
    CardImgWrap,
    CardPriceWrap,
    CardPrice,
    CardDescWrap,
    CardDesc,
    CardStarWrap,
    CardStarElemWrap,
    CardStarElem,
    CardStarElemWrapQuont,
    CardAvtor,
    CardAvtorName,
    Bay
} from './Card.style'

const Card = ({
    name,
    vote,
    year,
    price,
    rating,
    imgUrl,
    lastName,
    firstName,
}) => {
    return (
        <CardWrap>
            <CardImgWrap>
                <img src={imgUrl} alt={name} width="158" height="250" />
            </CardImgWrap>
            <CardPriceWrap>
                <CardPrice>{price} ₽</CardPrice>
            </CardPriceWrap>
            <CardDescWrap>
                <CardDesc>{name}</CardDesc>
            </CardDescWrap>
            <CardStarWrap>
                <CardStarElemWrap>
                    <CardStarElem rating={rating} />
                </CardStarElemWrap>
                <CardStarElemWrapQuont>{vote}</CardStarElemWrapQuont>
            </CardStarWrap>
            <CardAvtor>
                <CardAvtorName>{`${firstName} ${lastName}`}</CardAvtorName>
            </CardAvtor>
            <CardAvtor>
                <CardAvtorName>{year}</CardAvtorName>
            </CardAvtor>
            <Bay>
                <BayButton1>В корзину</BayButton1>
            </Bay>
        </CardWrap>
    )
}

export default Card