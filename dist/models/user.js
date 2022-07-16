"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../database/connections"));
const User = connections_1.default.define('User', {
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    state: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false },
});
exports.default = User;
//# sourceMappingURL=user.js.map