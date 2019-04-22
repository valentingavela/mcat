const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const now = new Date();

const fullDate = {
  year: now.getYear(),
  month: now.getMonth(),
  day: now.getDate(),
  formatted: function () { return `${this.year}-${this.month}-${this.day}` }
}

exports.handler = async (event) => {
  const params = {
    TableName: 'audios_keys3',
    ExpressionAttributeValues: {
      ':i': { S: fullDate.formatted() },
      ':s': { N: Date.now().toString() }
    },
    KeyConditionExpression: 'partKey = :i and ordKey < :s',
    ProjectionExpression: "itemName",
    Limit: 10
  };
  console.log(fullDate.formatted())
  const result = await ddb.query(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};