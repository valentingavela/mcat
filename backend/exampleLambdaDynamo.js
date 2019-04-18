var params = {
    TableName: 'table_name',
    IndexName: 'index_name', // optional (if querying an index)
    KeyConditions: { // indexed attributes to query
                     // must include the hash key value of the table or index 
                     // with 'EQ' operator
        attribute_name: {
            ComparisonOperator: 'EQ', // (EQ | NE | IN | LE | LT | GE | GT | BETWEEN | 
                                      //  NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH)
            AttributeValueList: [ { S: 'STRING_VALUE' }, ],
        },
        // more key conditions ...
    },
    ScanIndexForward: true, // optional (true | false) defines direction of Query in the index
    Limit: 0, // optional (limit the number of items to evaluate)
    ConsistentRead: false, // optional (true | false)
    Select: 'ALL_ATTRIBUTES', // optional (ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | 
                              //           SPECIFIC_ATTRIBUTES | COUNT)
    AttributesToGet: [ // optional (list of specific attribute names to return)
        'attribute_name',
        // ... more attributes ...
    ],
    ExclusiveStartKey: { // optional (for pagination, returned by prior calls as LastEvaluatedKey)
        attribute_name: { S: 'STRING_VALUE' },
        // anotherKey: ...

    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.query(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else console.log(data); // successful response
});