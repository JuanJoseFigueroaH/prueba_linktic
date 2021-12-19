"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
mongoose_1.default.Promise = global.Promise;
const dbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose_1.default.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
    .then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
    .catch(err => console.log(err));
const app = express_1.default();
exports.app = app;
app.set('trust proxy', true);
app.use(express_1.default.json());
app.use(morgan_1.default('combined'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use('/api/v1/public', express_1.default.static(path_1.default.join(__dirname, '/public')));
app.all('*', (req, res) => {
});
//# sourceMappingURL=app.js.map