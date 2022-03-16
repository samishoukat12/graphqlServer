const graphql = require('graphql');

const { 
    GraphQLObjectType ,
    GraphQLString,
    GraphQLBoolean
} = graphql;

const statusType = new GraphQLObjectType({
    name: 'status' ,
    fields: ()=>({
        success: {type: GraphQLBoolean} , 
        message: {type: GraphQLString} , 
        error: {type: GraphQLString}
    })
})

module.exports = statusType;
