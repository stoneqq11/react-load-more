'use strict'

import './index.css'

import React, { Component } from 'react'


const LOADING_TEXT = '正在加载..'
const CLICK_TEXT = '点击加载更多'
const END_TEXT = '已全部加载'
const NONE_TEXT = '暂无内容'
/*
props:
	action: {!fn}，点击加载需要执行的动作
	loading: {!boolean}，是否正在执行action
	end: {!boolean}，是否还需要执行action
*/
export default class ScrollMore extends Component {

	constructor (props) {
		super(props)
		this.state = {
			loading: false
		}
		this.loading = false
		this.click = this.click.bind(this)
	}

	render () {
		let children = this.props.children
		let tipContent = this.props.end
			? <h6>{(children.length || children.size) ? END_TEXT : NONE_TEXT}</h6>
			: (
				this.state.loading
					? <h6>{LOADING_TEXT}</h6>
					: <h6 onClick={this.click}>{CLICK_TEXT}</h6>
			)

		return (
			<div className='scroll-more-wrap'>
				{this.props.children}
				{tipContent}
			</div>
		)
	}

	componentDidMount () {
		this.click()
	}

	componentDidUpdate (prevProps, prevState) {

		if (this.props.loading && !prevProps.loading) {
			setTimeout(() => {
				if (this.props.loading) {
					this.setState({
						loading: true
					})
				}
			}, 300)
		}

		if (!this.props.loading && prevProps.loading) {
			this.loading = false
			this.setState({
				loading: false
			})
		}
	}

	click () {
		let { end, action } = this.props
		
		if (this.loading || end) {
			return
		}

		this.loading = true
		this.setState({loading: true})
		action && action()
	}
}