const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const rand = Math.floor(Math.random() * 5) + 1;

exports.handler = async (event) => {

    const counterResult = await getCounter();
    console.log(counterResult);
    const count = counterResult.Item.counter.N;
    const x = await adder(count);

    const params = {
        TableName: 'audios_keys3',
        Item: {
            partKey: { S: rand.toString() },
            ordKey: { N: Date.now().toString() },
            itemName: { S: event.Records[0].s3.object.key }
        }
    };

    const result = await ddb.putItem(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(7),
    };
    return response;
};

async function getCounter() {
    const params = {
        TableName: 'audios_keys3',
        Key: {
            partKey: { S: 'counter' },
            ordKey: { N: '0' },
        }
    };

    return await ddb.getItem(params).promise();
}

function adder(num) {
    num = parseInt(num);
    const putItemParams = {
        TableName: 'audios_keys3',
        Item: {
            partKey: { S: 'counter' },
            ordKey: { N: '0' },
            counter: { N: (num + 1).toString() }
        }
    };

    return ddb.putItem(putItemParams).promise();
}