import dgraph = require("dgraph-js");
import schema from '../seed/schema';

export default async (client: dgraph.DgraphClient) => {
    try {
        const op = new dgraph.Operation();
        op.setSchema(schema)
        op.setRunInBackground(true);
        await client.alter(op)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};
