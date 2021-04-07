import { useDeleteReviewCommentMutation } from 'generated/graphql';

const useDeleteReviewComment = (id: number) => {
  const [deleteReviewCommentMutation] = useDeleteReviewCommentMutation({
    variables: {
      id,
    },
    refetchQueries: ['restaurant']
  });

  const onDeleteReviewComment = () => {
    deleteReviewCommentMutation()
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteReviewComment;
};

export default useDeleteReviewComment;
