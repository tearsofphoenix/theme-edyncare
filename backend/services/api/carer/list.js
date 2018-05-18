'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.list = (event, context, callback) => {
  console.log("HELLO")

  const params = {
    TableName: process.env.CARER_DYNAMODB_TABLE
  };  

  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" 
  };

  dynamodb.scan(params, (error, result) => {
    if (error) {
      console.log(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t fetch the carers list.',
      });
      return;
    }

    const response = {
      statusCode: 200,
      headers: respHeaders,
      body: JSON.stringify(result.Items)
    };
    callback(null, response);
  });
}
