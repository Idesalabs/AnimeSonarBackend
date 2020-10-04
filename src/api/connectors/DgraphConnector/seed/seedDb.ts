import dgraph = require("dgraph-js");
import schema from './schema';
import seedData from './seed.json'

export default async (client: dgraph.DgraphClient) => {
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
};
