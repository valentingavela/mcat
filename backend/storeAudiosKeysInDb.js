const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event) => {
    const params = {
        TableName: 'audios_keys2',
        Item: {
            id: { N: '1' },
            sort: { N: Date.now().toString() },
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
