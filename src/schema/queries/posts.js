import { fakeDatabase } from '../../fakeDatabase';
import { GraphQLNonNull, GraphQLList } from 'graphql'
import { Post } from '../types/Post';

export default {
  posts: {
    type: new GraphQLList(Post),
    description: 'Go a bunch of posts',
    resolve: (parent, { id }) => fakeDatabase.getBlogPosts(id)
  }
}