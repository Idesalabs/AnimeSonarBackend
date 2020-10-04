import { Connector } from "../../../api/connectors";
import dgraph = require("simdi-dgraph-js");
import grpc = require('grpc')
import createDbAnime from './createDbAnime';
import searchAnime from './searchAnime';
import firstTimeInit from './utils/firstTimeInit';

// https://gas-person-5102.us-west-2.aws.cloud.dgraph.io:443
type DgraphConnectorType = (address: string, apiKey: string) => Connector;

export const initDgraphClient = (address: string, apiKey: string) => {
    try {


        // const creds = grpc.credentials.createInsecure();

        const clientStub = new (dgraph as any).clientStubFromSlashGraphQLEndpoint(address, apiKey) as dgraph.DgraphClientStub

        const client = new dgraph.DgraphClient(clientStub)
        // client.setDebugMode(true)

        return client
    } catch (error) {
        console.error(error)
        throw error
    }
}




const DgraphConnector: DgraphConnectorType = (address: string, apiKey: string) => {

    const client = initDgraphClient(address, apiKey)

    return {
        createDbAnime: anime => createDbAnime(anime, client),
        searchAnime: input => searchAnime(input, client),
        schemaInit: () => firstTimeInit(client)
    }
}

export default DgraphConnector


