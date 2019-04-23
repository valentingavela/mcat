const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const rand = Math.floor(Math.random() * 5) + 1;

exports.handler = async (event) => {
  const params = {
    TableName: 'audios_keys3',
    ExpressionAttributeValues: {
      ':i': { S: rand.toString() },
      ':s': { N: Date.now().toString() }
    },
    KeyConditionExpression: 'partKey = :i and ordKey < :s',
    ProjectionExpression: "itemName",
    Limit: 10
  };

  const result = await ddb.query(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};