import { useDeleteUserMutation } from 'generated/graphql';

const useDeleteUser = (id: number) => {
  const [deleteUserMutation] = useDeleteUserMutation({
    variables: {
      id,
    },
  });

  const onDeleteUser = () => {
    deleteUserMutation()
      .then((response: any) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log('there was an error with deleting!', e);
      });
  };

  return onDeleteUser;
};

export default useDeleteUser;
