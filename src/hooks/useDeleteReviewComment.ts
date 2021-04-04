import { useDeleteReviewCommentMutation } from 'generated/graphql';

const useDeleteReviewComment = (id: number) => {
  const [deleteReviewCommentMutation] = useDeleteReviewCommentMutation({
    variables: {
      id,
    },
  });

  const onDeleteReviewComment = () => {
    deleteReviewCommentMutation()
      .then((response) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteReviewComment;
};

export default useDeleteReviewComment;
