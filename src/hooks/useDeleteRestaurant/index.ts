import { useDeleteRestaurantMutation } from 'generated/graphql';

const useDeleteRestaurant = (id: number) => {
  const [deleteRestaurantMutation] = useDeleteRestaurantMutation({
    variables: {
      id,
    },
    refetchQueries: ['restaurants', 'ownerHome'],
  });

  const onDeleteRestaurant = () => {
    deleteRestaurantMutation()
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteRestaurant;
};

export default useDeleteRestaurant;
