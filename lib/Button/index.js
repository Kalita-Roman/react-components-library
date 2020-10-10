"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, "Click me!");
};

var _default = Button;
exports["default"] = _default;