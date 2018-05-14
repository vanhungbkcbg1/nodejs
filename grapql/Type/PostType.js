/**
 * Created by hungnv on 2018/05/14.
 */
var authors=require('../data/authors');
var AuthorType=require('../Type/AuthorType');
var {GraphQLObjectType,GraphQLNonNull,GraphQLString}=require('graphql');
const _ = require('lodash');
const PostType = new GraphQLObjectType({

    name: 'Post',
    description: "Post type",
    fields: function () {
        return {
            id: {type: new GraphQLNonNull(GraphQLString)},
            title: {type: new GraphQLNonNull(GraphQLString)},
            body: {type:GraphQLString},
            author: {
                type: AuthorType,
                resolve: function (post) {
                    return _.find(authors, a => a.id == post.author_id);
                }
            }
        }
    }
});

module.exports=PostType;