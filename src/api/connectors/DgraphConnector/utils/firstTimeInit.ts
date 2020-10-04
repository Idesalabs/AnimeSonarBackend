import dgraph = require("dgraph-js");
import schema from '../seed/schema';
import seedData from '../seed/metaSeed.json'

export default async (client: dgraph.DgraphClient) => {
    try {
        const op = new dgraph.Operation();
        op.setSchema(schema)
        op.setRunInBackground(true);
        await client.alter(op)

        const mutation = new dgraph.Mutation()
        mutation.setSetJson(seedData)
        const transaction = client.newTxn()

        await transaction.mutate(mutation)
        await transaction.commit()
        await transaction.discard()
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};
