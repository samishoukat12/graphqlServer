const { GraphQLBoolean } = require("graphql");
const { GraphQLObjectType, GraphQLString,GraphQLInt}=require ("graphql");

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        home: { type: GraphQLString },
        chores:{type:GraphQLString},
        celebration:{type:GraphQLString},
        checkbox:{type:GraphQLBoolean}
    })
})

module.exports=userType;

