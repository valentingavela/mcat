const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event) => {
    const params = {
        TableName: 'audios_keys2',
        ExpressionAttributeValues: {
          ':i': {N: '1'},
          ':s' : {N: Date.now().toString()}
        },
        KeyConditionExpression: 'id = :i and sort < :s',
        ProjectionExpression: "itemName",
        Limit: 10
      };


    const result = await ddb.query(params).promise();
    console.log(result);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
