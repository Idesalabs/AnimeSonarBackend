import { Connector } from "src/api/connectors";
import dgraph = require("dgraph-js");
import grpc = require('grpc')
import createDbAnime from './createDbAnime';
import searchAnime from './searchAnime';
import firstTimeInit from './utils/firstTimeInit';

// https://gas-person-5102.us-west-2.aws.cloud.dgraph.io:443
type DgraphConnectorType = (address?: string, apiKey?: string) => Connector;

export const initDgraphClient = (address = 'localhost:9080', apiKey?: string) => {
    try {


        const creds = apiKey ? slashCreds(apiKey) : grpc.credentials.createInsecure();
        // meta.add('Authorization', apiKey)
        const clientStub = new dgraph.DgraphClientStub(address, creds)
        const client = new dgraph.DgraphClient(clientStub)
        // client.setDebugMode(true)

        return client
    } catch (error) {
        console.error(error)
        throw error
    }
}




const DgraphConnector: DgraphConnectorType = (address?: string, apiKey?: string) => {

    const client = initDgraphClient(address, apiKey)

    return {
        createDbAnime: anime => createDbAnime(anime, client),
        searchAnime: input => searchAnime(input, client),
        schemaInit: () => firstTimeInit(client)
    }
}

export default DgraphConnector

function slashCreds(apiKey: string | undefined) {
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', apiKey ?? '');
    const creds = grpc.credentials.createFromMetadataGenerator((params, callback) => {
        callback(null, metadata);
    });
    return creds;
}
