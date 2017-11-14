import { fakeDatabase } from '../../fakeDatabase';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { Comment } from './Comment';

export const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'This is Post',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve: (comment) => fakeDatabase.getComments()
    }
  }
})

export const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'post input type',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    author: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})