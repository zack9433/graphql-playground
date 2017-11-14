import { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from 'graphql';

export const Comment = new GraphQLObjectType({
  name: 'Comment',
  description: 'this is comment',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  }
});

export const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    postId: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})