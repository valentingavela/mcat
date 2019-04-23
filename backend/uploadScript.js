var AWS = require("aws-sdk");
var fs = require('fs');

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: '',
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

var allMovies = JSON.parse(fs.readFileSync('data.json', 'utf8'));
allMovies.forEach(function (item) {
  var params = {
    TableName: "audios_keys3",
    Item: {
      "partKey": (Math.floor(Math.random() * 5) + 1).toString(),
      "ordKey": Date.now(),
      "itemName": item.itemName.S
    }
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.error("Unable to add movie", item.partKey, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {item
      console.log("PutItem succeeded:", item.itemName);
    }
  });
});