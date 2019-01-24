// Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'REGION' });
var util = require('util')

// Create S3 service object
const s3 = new AWS.S3();
const bucketParams = { Bucket: 'audios-bucket123' };

exports.handler = async (event) => {
    // TODO implement
    // call S3 to retrieve policy for selected bucket

    const r = s3.getBucketAcl(bucketParams, function (err, data) {
        if (err) {
            return err;
        } else if (data) {
            return data.Grants;
        }
    });
    return r;

};
