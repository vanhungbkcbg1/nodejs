/**
 * Created by hungnv on 2018/05/14.
 */

var {GraphQLObjectType,GraphQLList,GraphQLString}=require('graphql');
var authors=require('../data/authors');
var posts=require('../data/posts');
var AuthorType=require('../Type/AuthorType');
var PostType=require('../Type/PostType');
const BlogQueryRootType = new GraphQLObjectType({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        authors: {
            type: new GraphQLList(AuthorType),
            description: "List of all Authors",
            resolve: function() {
                return authors
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            description: "List of all Posts",
            resolve: function() {
                return posts;
            }
        },
        message:{
            type:GraphQLString,
            resolve: function () {
                return 'hungnv';
            }
        }

    })
});


module.exports=BlogQueryRootType;