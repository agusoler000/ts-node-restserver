"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize('node', 'root', '9876543210', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = database;
//# sourceMappingURL=connections.js.map