
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import produtos from './produtos'
import banner from './banner'


export default createSchema({

  name: 'default',

  types: schemaTypes.concat([produtos,banner]),
})
