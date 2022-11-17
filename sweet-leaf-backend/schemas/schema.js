import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import category from './category'
import asset from './asset'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, category, asset
  ]),
})
