const { GraphQLList } =require("graphql");
const studentsCollection =require("../StudentModal");
const userType=require('../objectTypes/UserType');

const studentsList = {
    type: new GraphQLList(userType),
    resolve(parent, args) {
        let data = studentsCollection
        return data;
    }
}

module.exports=studentsList;