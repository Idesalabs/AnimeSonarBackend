import { Connector } from "src/api/connectors";
import dgraph = require("dgraph-js");
import grpc = require('grpc')
import createDbAnime from './createDbAnime';


type DgraphConnectorType = (address?: string) => Connector;

export const initDgraphClient = (address = 'localhost:9080') => {
    try {
        const clientStub = new dgraph.DgraphClientStub(address,
            grpc.credentials.createInsecure())
        const client = new dgraph.DgraphClient(clientStub)
        // client.setDebugMode(true)
        return client
    } catch (error) {
        console.error(error)
        throw error
    }
}




const DgraphConnector: DgraphConnectorType = (address?: string) => {

    const client = initDgraphClient(address)

    return {
        createDbAnime: anime => createDbAnime(anime, client)
    }
}

export default DgraphConnector