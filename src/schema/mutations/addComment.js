import { fakeDatabase } from '../../fakeDatabase';
import { Comment, CommentInputType } from '../types/Comment';

export default {
  addComment: {
    type: Comment,
    description: 'Create a new comment',
    args: {
      comment: {
        type: CommentInputType
      }
    },
    resolve: (parent, { comment }) => fakeDatabase.createComment(comment)
  }
}