# First GraphQL App
This is my first Application using GraphQl, NodeJs, Express and MongoDb.
Other dependencies used: Mongoose, Nodemon, Babel and RimRaf

## Objective
To List, Add, Remove and Update Users in a MongoDB using GraphQL and NodeJs.

## How to use
1. Clone the repo
2. Run `npm start`
3. Start your Mongo service
4. Go to `localhost:3001/graphql`

## Functions
- List:  
query {
  users {
    _id
    firstName
    lastname
    age
  }
}
- Add: 
mutation {
  createUser(input: 
    {firstName: "Arturo", 
      lastname: "Cantú", 
      age: 25}) {
    _id
  }
}
- Delete: 
mutation {
  deleteUser(_id: "62e9bfc55ac5d25f1ec8f245") {
    _id
    firstName
  }
}
- Update:
mutation {
  updateUser(_id: "62e9bfc55ac5d25f1ec8f245", input: {firstName: "Arturo", lastname:"Cantú", age:25}) {
    _id
    firstName
    lastname
    age
  }
}
