"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const connections_1 = __importDefault(require("../database/connections"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8000;
        this.dbConnection();
        /**
         * define middlewares
         */
        this.middlewares();
        /**
         * define routes
         */
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} `);
        });
    }
    routes() {
        this.app.use(this.apiPaths.users, user_routes_1.default);
    }
    /**
     * DDBB
     * for sql alternatives:
     *  -https://ampps.com/downloads/
     *  -https://www.wampserver.com/en/
     *  -https://www.apachefriends.org/es/index.html   *
     */
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connections_1.default.authenticate();
                console.log('Connection with database has been established successfully.');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //Body Parser
        this.app.use(express_1.default.json());
        //public folder
        this.app.use(express_1.default.static('public'));
        //Custom Middlewares
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map