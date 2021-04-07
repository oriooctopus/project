import { useDeleteUserMutation } from 'generated/graphql';

const useDeleteUser = (id: number) => {
  const [deleteUserMutation] = useDeleteUserMutation({
    variables: {
      id,
    },
    refetchQueries: ['users']
  });

  const onDeleteUser = () => {
    deleteUserMutation()
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteUser;
};

export default useDeleteUser;
