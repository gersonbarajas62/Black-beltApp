require('dotenv').config
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose'),
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');


async function start() {


const MONGO_URI = process.env.MONGO_URI;
const typeDefs = importSchema(__dirname + '/schema.graphql');
mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const mongo = mogoose.connection;
mongo.on('error', error => console.log(error) )
    .once('open', () => console.log('connected to database'))



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

}

start()

