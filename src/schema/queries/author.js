import { fakeDatabase } from '../../fakeDatabase';
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { Author } from '../types/Author'

export default {
  author: {
    type: Author,
    description: 'Go get a specific author',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (parent, { id }) => fakeDatabase.getAuthor(id)
  }
}