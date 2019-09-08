import React, { Component } from 'react'

import {
    Wrap,
    Search,
    SearchInput,
    CancellButton,
    SearchButtonWrap,
    SearchButtonWrapContent,
} from './Search.style'

import Cancell from '../../assets/cancell.svg'

export default class SearchClass extends Component {
    state = {
        name: ''
    }
    handleChange = e => {
        this.setState({ name: e.target.value })
    }
    handeleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const { data } = this.props
        data.fetchMore({
            variables: { name },
            updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
        })
    }
    cleanup = () => {
        const name = ''
        this.setState({ name })
        this.props.data.fetchMore({
            variables: { name },
            updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
        })
    }
    render() {
        const { name } = this.state
        return (
            <Wrap>
                <Search>
                    <SearchInput
                        name="name"
                        placeholder="Поиск..."
                        onChange={this.handleChange}
                        value={name} />
                        {name.length > 0 && <CancellButton src={Cancell} onClick={this.cleanup} />}
                </Search>
                <SearchButtonWrap onClick={this.handeleSubmit}>
                    <SearchButtonWrapContent></SearchButtonWrapContent>
                </SearchButtonWrap>
            </Wrap>
        )
    }
}