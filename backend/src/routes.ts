import { upload } from './services/file_upload';
import { Router } from 'express'
const router = Router();

const singleUpload = upload.single('image')

router.post('/image-upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
        }

        return res.json({ 'imageUrl': req.file });
    });
})

export default router;