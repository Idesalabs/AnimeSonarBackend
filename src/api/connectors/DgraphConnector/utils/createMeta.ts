import { UidMap } from 'src/types'
import { DgraphClient, Mutation } from 'dgraph-js'
const dgraph = require('dgraph-js')


type MetaInput = { name: string, description?: string }

export default (type: 'Genre' | 'Tag', client: DgraphClient) => async (metaInputs: Array<MetaInput>): Promise<UidMap> => {
    const txn = client.newTxn()

    const req = new dgraph.Request();

    const mutationList: Mutation[] = []

    for (const metaInput of metaInputs) {

        const mu = new dgraph.Mutation()
        mu.setSetJson({ "dgraph.type": type, ...metaInput, uid: `_:${metaInput.name}` })
        mutationList.push(mu)
    }

    req.setMutationsList(mutationList)
    req.setCommitNow(true)

    const response = await txn.doRequest(req)
    const uidMap = response.getUidsMap()
    // await txn.commit()
    await txn.discard()

    return (() => {
        const d: UidMap = {}
        uidMap.forEach((uid, key) => {
            d[key] = uid
        })
        return d
    })()
}