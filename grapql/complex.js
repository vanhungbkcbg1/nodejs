/**
 * Created by hungnv on 2018/05/14.
 */
var express=require('express');
var express_graphql = require('express-graphql');
var schema=require('./Schema/BlogAppSchema.js');

// Create an express server and a GraphQL endpoint
let {buildSchema}=require('graphql');

let mySchema = buildSchema(`
  type Query {
    postTitle(name:String): String,
    blogTitle: String
  }
`);

let root = {
    postTitle: (args) => {
        return args.name;
    },
    blogTitle: () => {
        return 'scotch.io';
    }
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}));

app.use('/mygraphql', express_graphql({
    schema: mySchema,
    graphiql: true,
    rootValue:root
}));



app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
