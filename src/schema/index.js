import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import posts from './queries/posts';
import author from './queries/author';
import post from './queries/post';
import addPost from './mutations/addComment';
import addComment from './mutations/addComment';

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      ...posts,
      ...author,
      ...post
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      ...addPost,
      ...addComment
    }
  })
})