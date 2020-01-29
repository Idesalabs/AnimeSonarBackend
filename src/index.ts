import { ApolloServer, gql } from 'apollo-server-micro'
import schema from './schema/schemaString'
import resolvers from './resolvers'

const gqlSchema = gql(schema)
const microCors = require('micro-cors')
const cors = microCors({
    allowHeaders: ['X-Requested-With', 'Access-Control-Allow-Origin',
        'X-HTTP-Method-Override', 'Content-Type',
        'Authorization', 'Accept', 'token']
})

const server = new ApolloServer({
    playground: true,
    introspection: true,
    mocks: true,
    typeDefs: gqlSchema,
    resolvers: resolvers as any
})

// @ts-ignore
export default cors((req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return
    }
    return server.createHandler()(req, res)
})