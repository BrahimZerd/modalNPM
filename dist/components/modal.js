"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    className,
    style,
    text,
    close
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "modalOverlay",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: style,
    id: "modal"
  }, /*#__PURE__*/_react.default.createElement("span", null, text), /*#__PURE__*/_react.default.createElement("button", {
    onClick: close
  }, "Close")));
};
var _default = Modal;
exports.default = _default;