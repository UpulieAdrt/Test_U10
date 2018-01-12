let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

    ddb.get({
        TableName: 'ddb_test1',
        Key: { id: '2', class: 'class2' }
    }, function (err, data) {
        if (err) {
            console.log("No data Recieved");
        } else {
            console.log("Data Received Successfully");
        }
    });



}