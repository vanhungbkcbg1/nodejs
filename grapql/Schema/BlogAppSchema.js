/**
 * Created by hungnv on 2018/05/14.
 */
var {GraphQLSchema}=require('graphql');

var BlogQueryRootType=require('../Query/BlogQueryRootType');
const BlogAppSchema = new GraphQLSchema({
    query: BlogQueryRootType
    // If you need to create or updata a datasource,
    // you use mutations. Note:
    // mutations will not be explored in this post.
    // mutation: BlogMutationRootType
});

module.exports=BlogAppSchema;