import { fakeDatabase } from '../../fakeDatabase';
import { Post } from './Post';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';

export const Author = new GraphQLObjectType({
  name: 'Author',
  description: 'this is author',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: source => fakeDatabase.getPostsOfAuthor(source.id)
    }
  }
});
