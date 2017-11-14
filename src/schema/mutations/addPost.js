import { fakeDatabase } from '../../fakeDatabase';
import { Post, PostInputType } from '../types/Post';

export default {
  addPost: {
    type: Post,
    description: 'Create a new post',
    args: {
      post: {
        type: PostInputType
      }
    },
    resolve: (parent, { post }) => fakeDatabase.addNewPost(post)
  }
}