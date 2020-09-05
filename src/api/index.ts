import { ApolloServer, gql, ApolloError } from 'apollo-server-micro'
import schema from './schema/schemaString'
import resolvers from './resolvers'
import { Context, DecodedToken } from 'src/types'
import jwt from 'jsonwebtoken'
import DgraphConnector from './connectors/DgraphConnector'
import { DGRAPH_ADDRESS, JWT_SECRET, DGRAPH_API_KEY } from 'src/credentials'

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
    // mocks: true,

    typeDefs: gqlSchema,
    resolvers: resolvers as any,
    cacheControl: {
        calculateHttpHeaders: true,
        defaultMaxAge: 10
    },
    context: async ({ req }: any): Promise<Context> => {
        let connector;
        try {
            connector = DgraphConnector(DGRAPH_ADDRESS, DGRAPH_API_KEY)
        } catch (error) {
            throw new ApolloError('Issue Connecting To Database')
        }

        const token = req.headers.token
        if (!token) {
            return {

                connector
            }
        }

        const tokenValue = verifyToken(token, JWT_SECRET ?? '')

        return {
            me: tokenValue,
            connector
        }
    }
})

// @ts-ignore
export default cors((req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return
    }
    return server.createHandler()(req, res)
})

const verifyToken = (token: string, secret: string): DecodedToken => {
    try {
        const decodedToken = jwt.verify(token, secret) as object
        const isValid = 'role' in decodedToken
        if (!isValid) throw ''
        return decodedToken as DecodedToken
    } catch (error) {
        console.log(error.message)
        throw new ApolloError('Token Invalid')
    }
}