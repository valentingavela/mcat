const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const now = new Date();
const rand = Math.floor(Math.random() * 4) + 1;

exports.handler = async (event) => {
    const params = {
        TableName: 'audios_keys3',
        Item: {
            partKey: { S: rand.toString() },
            ordKey: { N: now.getTime().toString() },
            itemName: { S: event.Records[0].s3.object.key }
        }
    };

    const result = await ddb.putItem(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
