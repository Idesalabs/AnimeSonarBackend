
export const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) console.info('JWT_SECRET NOT PASSED')
export const DGRAPH_ADDRESS = process.env.DGRAPH_ADDRESS
if (!DGRAPH_ADDRESS) console.info('DGRAPH_ADDRESS NOT PASSED')
export const DGRAPH_API_KEY = process.env.DGRAPH_API_KEY
if (!DGRAPH_API_KEY) console.info('DGRAPH_API_KEY NOT PASSED')


