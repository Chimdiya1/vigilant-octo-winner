import { useMutation, useQuery } from "@tanstack/react-query";

import { createUserMutation, editUserMutation,deleteUserMutation } from "../mutations/users";
import { getUsersQuery } from "../queries/users";

export const useCreateUserMutation = () => {
  return useMutation(createUserMutation);
};
export const useEditUserMutation = (id:string) => {
  return useMutation(editUserMutation(id));
};
export const useDeleteUserMutation = (id:string) => {
  return useMutation(deleteUserMutation(id));
};
export const useGetUsers = () => {
  return useQuery(getUsersQuery);
};
