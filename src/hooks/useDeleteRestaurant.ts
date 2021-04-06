import { useDeleteRestaurantMutation } from 'generated/graphql';

const useDeleteRestaurant = (id: number) => {
  const [deleteRestaurantMutation] = useDeleteRestaurantMutation({
    variables: {
      id,
    },
  });

  const onDeleteRestaurant = () => {
    deleteRestaurantMutation()
      .then((response) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteRestaurant;
};

export default useDeleteRestaurant;
