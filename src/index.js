import { graphql } from 'graphql';
import { Schema } from './schema';

const query = `
  {
    posts {
      id
      title
    }
  }
`

graphql(Schema, query).then(result => console.log(result))
