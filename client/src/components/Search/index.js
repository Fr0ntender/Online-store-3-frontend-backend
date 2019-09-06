import React, { Component } from 'react'

import {
    Wrap,
    Search,
    SearchInput,
    SearchButtonWrap,
    SearchButtonWrapContent,
} from './Search.style'

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
                </Search>
                <SearchButtonWrap onClick={this.handeleSubmit}>
                    <SearchButtonWrapContent></SearchButtonWrapContent>
                </SearchButtonWrap>
            </Wrap>
        )
    }
}