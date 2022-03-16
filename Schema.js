const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLSchema,
} = graphql;
const studentsList=require('./components/students/studentController/Query');
const {addStudent,updateStudent,deleteStudent}=require('./components/students/studentController/Mutation');
const rootQuery = new GraphQLObjectType({
    name: 'test',
    fields: {
        studentsList: studentsList,
    }
})

const mutation = new GraphQLObjectType({
    name: 'mutation' ,
    fields: {
        addStudent: addStudent,
        updateStudent: updateStudent , 
        deleteStudent: deleteStudent,
    }
})

module.exports = new GraphQLSchema({ query: rootQuery,mutation:mutation})