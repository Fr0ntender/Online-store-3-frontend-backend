import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
//import validator from 'validator'

import {
    Row,
    Col,
} from '../../styles/greed.style'

import {
    HeaderH1,
    Desc1,
} from '../../styles/typography.style'

import {
    FileInput,
    FileLabel,
    FileLabelDesc
} from '../../styles/forms.style'

import {
    BayButton1
} from '../../styles/button.style'

import {
    CardWrap,
    CustomRow
} from './AddToCard.style'


import AddToCardInput from '../../components/AddToCardInput'
import FileloadSrc from '../../assets/fileload.svg'
import validate from '../../helper/validate'
import Card from '../../components/Card'
import DEF_DATA from './DefaultData.json'
import INPUT_NAMES from './input_name'

export default class AddToCard extends Component {
    state = DEF_DATA
    static propTypes = {
        upProduct: PropTypes.func.isRequired,
        addProduct: PropTypes.func.isRequired,
    }
    ImgUrlOnChange = e => {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            this.setState({
                imgName: file.name,
                imgUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    }
    previewData = (Data, thisId) => {
        const data = Data.filter(({ id }) => String(id) === thisId)
        if (data.length > 0) {
            const {
                num,
                isbn,
                name,
                vote,
                year,
                price,
                rating,
                imgUrl,
                imgName,
                lastName,
                firstName
            } = data[0]
            this.setState({
                num,
                isbn,
                name,
                vote,
                year,
                price,
                rating,
                imgUrl,
                imgName,
                lastName,
                firstName
            })
        }
    }
    UNSAFE_componentWillMount() {
        this.id = this.props.match.params.id ? this.props.match.params.id : false
        if (this.id) {
            if (this.props.data.products && this.props.data.products.length > 0) {
                this.previewData(this.props.data.products, this.id)
            }
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.id) {
            if (nextProps.data.products.length > 0 && !this.props.data.products) {
                this.previewData(nextProps.data.products, this.id)
            }
        }
    }
    handleChange = e => {
        e.preventDefault()
        const name = e.target.name
        let value = validate(name, e.target.value)
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const addData = {
            num: Number(this.state.num),
            isbn: this.state.isbn,
            name: this.state.name,
            vote: Number(this.state.vote),
            year: Number(this.state.year),
            price: Number(this.state.price),
            rating: Number(this.state.rating),
            imgUrl: this.state.imgUrl,
            imgName: this.state.imgName,
            lastName: this.state.lastName,
            firstName: this.state.firstName
        }
        const upData = {
            id: this.id,
            num: Number(this.state.num),
            isbn: this.state.isbn,
            name: this.state.name,
            vote: Number(this.state.vote),
            year: Number(this.state.year),
            price: Number(this.state.price),
            rating: Number(this.state.rating),
            imgUrl: this.state.imgUrl,
            imgName: this.state.imgName,
            lastName: this.state.lastName,
            firstName: this.state.firstName
        }

        const validateId = () => {
            this.id ?
                this.props.upProduct(upData)
                :
                this.props.addProduct(addData)
        }
        // const validateIsbn = () => {
        //     validator.isISBN(this.state.isbn, 13) ?
        //         validateId()
        //         :
        //         this.setState({
        //             firstRequired: true,
        //             isbnValid: false
        //         })
        // }
        const validateLastName = () => {
            this.state.lastName.length > 0 ?
                validateId()
                :
                this.setState({
                    firstRequired: true,
                    lastRequired: false
                })
        }
        const validateFirstName = () => {
            this.state.firstName.length > 0 ?
                validateLastName()
                :
                this.setState({
                    yearValid: true,
                    firstRequired: false,
                })
        }
        const validateYear = () => {
            this.state.year > 1800 ?
                validateFirstName()
                :
                this.setState({
                    nameRequired: true,
                    yearValid: false
                })
        }
        this.state.name.length > 0 ?
            validateYear()
            :
            this.setState({
                nameRequired: false
            })
    }
    render() {
        return (
            <form>
                <CustomRow>
                    <Col set="9">
                        <Row>
                            <Col>
                                <HeaderH1 mt="0" mb="20">{this.props.match.url !== '/admin/addnewproduct' ? 'Редактировать товар' : 'Добавить новый товар'}</HeaderH1>
                            </Col>
                        </Row>
                        <Row mb="10">
                            <Col set="4" flex js="flex-start" al="center">
                                <Desc1 mt="0" mb="0">Изображение товара</Desc1>
                            </Col>
                            <Col set="8" flex js="flex-start" al="center">
                                <FileInput id="FileImg" type="file" name="image" onChange={this.ImgUrlOnChange} />
                                <FileLabel htmlFor="FileImg">
                                    <ReactSVG src={FileloadSrc} />
                                    <FileLabelDesc ml="10"> {this.state.imgName !== '' ? this.state.imgName : 'Выбрать изображение'}</FileLabelDesc>
                                </FileLabel>
                            </Col>
                        </Row>
                        {
                            INPUT_NAMES.map((v, i) =>
                                <AddToCardInput
                                    key={i}
                                    name={v.name}
                                    label={v.label}
                                    value={this.state[v.label]}
                                    handleChange={this.handleChange}
                                    isbnValid={this.state.isbnValid}
                                    yearValid={this.state.yearValid}
                                    nameRequired={this.state.nameRequired}
                                    lastRequired={this.state.lastRequired}
                                    firstRequired={this.state.firstRequired}
                                />
                            )
                        }
                        <Row mt="40" mb="10">
                            <Col flex js="flex-start" al="center">
                                <BayButton1 onClick={this.handleSubmit}>
                                    Сохранить
                                </BayButton1>
                            </Col>
                        </Row>
                    </Col>
                    <Col set="3">
                        <HeaderH1 mt="0" mb="20">Превью</HeaderH1>
                        <CardWrap>
                            <Card
                                name={this.state.name}
                                vote={this.state.vote}
                                year={this.state.year}
                                price={this.state.price}
                                rating={this.state.rating}
                                imgUrl={this.state.imgUrl}
                                lastName={this.state.lastName}
                                firstName={this.state.firstName}
                            />
                        </CardWrap>
                    </Col>
                </CustomRow>
            </form>
        )
    }
}