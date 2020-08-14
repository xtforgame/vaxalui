"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexPage extends _react.default.Component {
  render() {
    const {
      posts,
      title
    } = this.props;
    return _react.default.createElement("section", {
      className: "section"
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "content"
    }, _react.default.createElement("h1", {
      className: "has-text-weight-bold is-size-2"
    }, title)), posts.map(({
      node: post
    }) => _react.default.createElement("div", {
      className: "content",
      style: {
        border: '1px solid #eaecee',
        padding: '2em 4em'
      },
      key: post.id
    }, _react.default.createElement("p", null, _react.default.createElement(_gatsby.Link, {
      className: "has-text-primary",
      to: `/${post.slug}`
    }, post.title), _react.default.createElement("span", null, " \u2022 "), _react.default.createElement("small", null, post.date, ' ', "- posted by", ' ', _react.default.createElement(_gatsby.Link, {
      to: `/author/${post.author.slug}`
    }, post.author.name))), _react.default.createElement("div", null, _react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: post.excerpt.replace(/<p class="link-more.*/, '')
      }
    }), _react.default.createElement(_gatsby.Link, {
      className: "button is-small",
      to: `/${post.slug}`
    }, "Keep Reading \u2192"))))));
  }

}

exports.default = IndexPage;
IndexPage.propTypes = {
  posts: _propTypes.default.arrayOf(_propTypes.default.object),
  title: _propTypes.default.string
};
const pageQuery = (0, _gatsby.graphql)`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`;
exports.pageQuery = pageQuery;