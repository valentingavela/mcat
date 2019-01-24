import * as express from 'express'
import { upload } from './services/file_upload';

class App {
    public express
    singleUpload;

    constructor() {
        this.express = express()
        this.mountRoutes()
        this.singleUpload = upload.single('image');
    }

    private mountRoutes(): void {
        this.express.get('/', (req, res) => {
            return res.json({ 'response': 'hello' });
        })

        this.express.post('/upload', (req, res) => {
            this.singleUpload(req, res, (err) => {
                if (err) {
                    return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
                }
                return res.json({ 'image': req.file.location });
            });
        })
    }
}

export default new App().express