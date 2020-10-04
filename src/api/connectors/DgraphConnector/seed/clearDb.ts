import dgraph = require("simdi-dgraph-js");

export default async (client: dgraph.DgraphClient) => {
  const op = new dgraph.Operation();
  op.setDropAll(true)
  await client.alter(op)
};
