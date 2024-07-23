import { createUser, editUser, deleteUser } from "../api/users";

const createUserMutation = {
  mutationFn: createUser,
};
const editUserMutation = (id: string) => {
  return {
    mutationFn: editUser(id),
  };
};

const deleteUserMutation = (id: string) => {
  return {
    mutationFn: deleteUser(id),
  };
};

export { createUserMutation, editUserMutation, deleteUserMutation };
