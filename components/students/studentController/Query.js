const { GraphQLList } =require("graphql");
const studentsCollection =require("../StudentModal");
const userType=require('../objectTypes/UserType');

const studentsList = {
    type: new GraphQLList(userType),
    resolve(parent, args) {
        let data =  [
            {
                id: '000000000',
                title: 'Call carpenter to fix kitchen pipe',
                home: 'Home',
                chores: 'Chores',
                celebration: "Celebartions",
                checkbox:false
            },
            {
                id: '111111111',
                title: 'Pick Melanie from football game',
                home: 'Home',
                chores: 'Chores',
                celebration: "Celebartions",
                checkbox:false
            },
            {
                id: '222222222',
                title: 'Mow the lawn',
                home: 'Home',
                chores: 'Chores',
                celebration: "Celebartions",
                checkbox:false
            },
            {
                id: '3333333333',
                title: 'Help Andreas with homework',
                home: 'Home',
                chores: 'Chores',
                celebration: "Celebartions",
                checkbox:false
            },
            {
                id: '4444444444',
                title: 'Pick Melanie from football game',
                home: 'Home',
                chores: 'Chores',
                celebration: "Celebartions",
                checkbox:false
            },
    
    
        ]
        return data;
    }
}

module.exports=studentsList;