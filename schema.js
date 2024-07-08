const { gql } = require('apollo-server-express');
const typeDefs= gql `
    type User{
        id: ID !,
        name: String !,
        email: String !,
        password: String!
    }
    type Query{
        getUser(id: ID!):User,
        getUsers:[User],
        searchUsers(name:String!):[User],
        getLimitedUser(limit:Int!, offset:Int!):[User]
    }
    input createUserInput{
        name:String!,
        email:String!,
        password:String!
    }
    input updateUserInput{
        name:String!,
        email:String!,
        password:String!
    }

    type Mutation{
        createUser(input:createUserInput!):User
        changePass(id:ID!, password:String!):User
        updateUser(id:ID!, input:updateUserInput!):User
        deleteUser(id:ID!):User
    }
`;
module.exports = typeDefs; //export out