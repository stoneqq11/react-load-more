'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING_TEXT = '正在加载..';
var CLICK_TEXT = '点击加载更多';
var END_TEXT = '已全部加载';
var NONE_TEXT = '暂无内容';
/*
props:
	action: {!fn}，点击加载需要执行的动作
	loading: {!boolean}，是否正在执行action
	end: {!boolean}，是否还需要执行action
*/

var ScrollMore = function (_Component) {
	(0, _inherits3.default)(ScrollMore, _Component);

	function ScrollMore(props) {
		(0, _classCallCheck3.default)(this, ScrollMore);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollMore.__proto__ || (0, _getPrototypeOf2.default)(ScrollMore)).call(this, props));

		_this.state = {
			loading: false
		};
		_this.loading = false;
		_this.click = _this.click.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ScrollMore, [{
		key: 'render',
		value: function render() {
			var children = this.props.children;
			var tipContent = this.props.end ? _react2.default.createElement(
				'h6',
				null,
				children.length || children.size ? END_TEXT : NONE_TEXT
			) : this.state.loading ? _react2.default.createElement(
				'h6',
				null,
				LOADING_TEXT
			) : _react2.default.createElement(
				'h6',
				{ onClick: this.click },
				CLICK_TEXT
			);

			return _react2.default.createElement(
				'div',
				{ className: 'scroll-more-wrap' },
				this.props.children,
				tipContent
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.click();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var _this2 = this;

			if (this.props.loading && !prevProps.loading) {
				setTimeout(function () {
					if (_this2.props.loading) {
						_this2.setState({
							loading: true
						});
					}
				}, 300);
			}

			if (!this.props.loading && prevProps.loading) {
				this.loading = false;
				this.setState({
					loading: false
				});
			}
		}
	}, {
		key: 'click',
		value: function click() {
			var _props = this.props,
			    end = _props.end,
			    action = _props.action;


			if (this.loading || end) {
				return;
			}

			this.loading = true;
			this.setState({ loading: true });
			action && action();
		}
	}]);
	return ScrollMore;
}(_react.Component);

exports.default = ScrollMore;