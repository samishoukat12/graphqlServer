const { GraphQLString, GraphQLInt } = require('graphql');
const userType = require('../objectTypes/UserType');
const studentsCollection = require('../StudentModal');
const statusType = require('../objectTypes/StatusType');
const { GraphQLBoolean } = require('graphql');

module.exports.addStudent = {
    type: userType,
    args: {

        checkbox: { type: GraphQLBoolean },
    },
    resolve(parent, args) {
        const newStudent = new studentsCollection({

            checkbox: args.checkbox
        });

        newStudent.save((err, success) => {
            console.log("success", success);
        });

        return newStudent;
    }
}


module.exports.updateStudent = {
    type: userType,
    args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        home: { type: GraphQLString },
        chores: { type: GraphQLString },
        celebration: { type: GraphQLString },
        checkbox: { type: GraphQLBoolean },
        homeStatus: { type: GraphQLBoolean },
        time: { type: GraphQLBoolean },
        diamond: { type: GraphQLBoolean },

    },
    resolve: async (parent, args) => {
        const _id = args.id;

        const updateObj = {
            checkbox: args.checkbox
        }
        await studentsCollection.map((item) => {
            if (args.id == item.id) {
                return args
            }
            else {
                return item
            }
        })

        return args
    }
}


module.exports.deleteStudent = {
    type: statusType,
    args: {
        id: { type: GraphQLString }
    },
    resolve(parent, args) {
        const _id = args.id;
        studentsCollection.findByIdAndRemove(_id, (err, data) => {
            console.log('Document ID will be here: ', _id);
            // console.log("Error" , err);
            if (err) {
                return err
            }
            console.log("Document is Deleted!! Successfully");
        });

        return {
            success: true, message: "Successfully Deleted", err: " "
        }
    }
}