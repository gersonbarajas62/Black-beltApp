const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
    type Query{
        prueba:String
    }
`
const resolvers = {
    Query:{
        prueba: () => "Hola Mundo"
    }
}
const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({url}) => {
    console.log(`Server ready set: ${url}`)
})``