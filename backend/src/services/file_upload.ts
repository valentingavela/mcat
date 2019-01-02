import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as aws from 'aws-sdk';
import * as cfg from '../awsConfig';

aws.config.update({
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: cfg.awsConfig.SecretKey,
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: cfg.awsConfig.AccessKey,
    region: cfg.awsConfig.Region
});

const s3 = new aws.S3();

export const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: cfg.awsConfig.Bucket,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})