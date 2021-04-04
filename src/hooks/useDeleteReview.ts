import { useDeleteReviewMutation } from 'generated/graphql';

const useDeleteReview = (id: number) => {
  const [deleteReviewMutation] = useDeleteReviewMutation({
    variables: {
      id,
    },
  });

  const onDeleteReview = () => {
    deleteReviewMutation()
      .then((response) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteReview;
};

export default useDeleteReview;
