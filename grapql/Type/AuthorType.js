/**
 * Created by hungnv on 2018/05/14.
 */
var {GraphQLObjectType,GraphQLNonNull,GraphQLString}=require('graphql');
const AuthorType=new GraphQLObjectType({

    name:'Author',
    description:"Author",
    fields:function() {
        return {
            id: {type: new GraphQLNonNull(GraphQLString)},
            name: {type: new GraphQLNonNull(GraphQLString)}
        }
    }
});

module.exports=AuthorType;