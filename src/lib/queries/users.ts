import { getUsers } from "../api/users";

const getUsersQuery = {
  queryKey: ["users"],
  queryFn: getUsers,
  retry: 3,
};

export { getUsersQuery };
