"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const file_upload_1 = require("./services/file_upload");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.singleUpload = file_upload_1.upload.single('image');
    }
    mountRoutes() {
        this.express.get('/', (req, res) => {
            return res.json({ 'response': 'hello' });
        });
        this.express.post('/upload', (req, res) => {
            this.singleUpload(req, res, (err) => {
                if (err) {
                    return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
                }
                return res.json({ 'image': req.file.location });
            });
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map