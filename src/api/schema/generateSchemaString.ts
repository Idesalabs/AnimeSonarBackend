import schema from '.'
import fs = require('fs')

(async () => {
    const data = `
    const data = \`${await (schema)}\`
    export default data
    `
    console.log('Generating Schema String')

    fs.writeFile('./src/api/schema/schemaString.ts', data, (err) => {
        if (err) console.error(err)
        console.log('Successfully Generated Schema String')
    })
})()