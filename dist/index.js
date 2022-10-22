"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.groceryList = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded());
exports.app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});
exports.groceryList = [
    { item: "milk", quantity: 2 },
    { item: "cereal", quantity: 1 },
    { item: "pop-tarts", quantity: 1 },
];
exports.app.get("/groceries", (req, res) => {
    res.send(exports.groceryList);
    res.sendStatus(200);
});
exports.app.post("/groceries", (req, res) => {
    exports.groceryList.push(req.body);
    res.sendStatus(201);
});
exports.server = exports.app.listen(process.env.PORT, () => {
    console.log(`Start http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map