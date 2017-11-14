import { fakeDatabase } from '../../fakeDatabase';
import {GraphQLInt, GraphQLNonNull} from 'graphql';
import { Post } from '../types/Post';

export default {
  post: {
    type: Post,
    description: 'Go get a post',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (parent, { id }) => fakeDatabase.getPost()
  }
};