import { IconFilter } from "../../icons/IconFilter";
import { useGetUsers } from "@/lib/tanstack-query/users";
import NewUserDialog from "./newUserDialog";
import Input from "@/components/global/input";
import { IconSearch } from "@/components/icons/IconSearch";
import DeleteUserDialog from "./deleteUserDialog";
import EditUserDialog from "./editUserDialog";
import { IconCaretdown } from "@/components/icons/IconCaretdown";
import { cn } from "@/lib/utils";

function UsersTable() {
  const { data: users, isLoading } = useGetUsers();
  const roles = {
    administrator: "Administrator",
    salesManager: "Sales Manager",
    salesRepresentative: "Sales Representative",
  };
  return (
    <div>
      <div className="bg-white flex-wrap gap-y-2 rounded-t-md p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="relative border rounded-md pl-3">
            <IconSearch className="absolute left-2 top-1/3 z-30" />
            <Input
              name="searchUsers"
              placeholder="Search here"
              title=""
              className="my-0 border-0 sm:w-72 outline-0"
            />
          </div>
          <button className="flex items-center border p-2 rounded-lg border-neutral-300 gap-2">
            <IconFilter className="w-4" /> Filter
          </button>
        </div>
        <NewUserDialog />
      </div>
      <div className="w-full overflow-x-scroll ">
        <table className="w-full text-sm text-left">
          <thead>
            <tr>
              <th
                scope="col"
                className="font-medium py-3 pl-2 sm:pl-6 flex text-xs items-center gap-2"
              >
                <input type="checkbox" name="" id="" />
                Name
                <span>
                  <IconCaretdown className="text-[#667185] -mb-2 w-4 rotate-180" />
                  <IconCaretdown className="text-[#667185] w-4" />
                </span>
              </th>
              <th className="font-medium text-xs py-3">
                <div className="flex items-center gap-2">
                  Email Address
                  <span>
                    <IconCaretdown className="text-[#667185] -mb-2 w-4 rotate-180" />
                    <IconCaretdown className="text-[#667185] w-4" />
                  </span>
                </div>
              </th>
              <th className="font-medium text-xs  py-3">
                <div className="flex items-center gap-2">
                  Role
                  <span>
                    <IconCaretdown className="text-[#667185] -mb-2 w-4 rotate-180" />
                    <IconCaretdown className="text-[#667185] w-4" />
                  </span>
                </div>
              </th>
              <th className="font-medium text-xs  py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white rounded-b-md">
            {isLoading ? (
              <>
                <tr className="animate-pulse mb-3">
                  <td scope="col" colSpan={2} className="bg-slate-200"></td>
                  <td className="bg-slate-200"></td>
                  <td className="bg-slate-200"></td>
                  <td className="font-medium text-xs  py-6 flex gap-3 bg-slate-200"></td>
                </tr>
                <tr className="animate-pulse">
                  <td scope="col" colSpan={2} className="bg-slate-200"></td>
                  <td className="bg-slate-200"></td>
                  <td className="bg-slate-200"></td>
                  <td className="font-medium text-xs  py-6 flex gap-3 bg-slate-200"></td>
                </tr>
              </>
            ) : (
              <>
                {users.length ? (
                  users.map(
                    (user: {
                      id: string;
                      fullName: string;
                      email: string;
                      role:
                        | "administrator"
                        | "salesManager"
                        | "salesRepresentative";
                    }) => (
                      <tr key={user.id} className="hover:bg-slate-50">
                        <td
                          scope="col"
                          className="font-medium py-6 pl-2 sm:pl-6 flex text-xs items-center gap-2"
                        >
                          <input type="checkbox" name="" id="" />
                          {user.fullName}
                        </td>
                        <td className="font-medium text-xs py-6">
                          {user.email}
                        </td>
                        <td className="font-medium text-xs  py-6">
                          <span
                            className={cn(
                              "bg-primary-50 px-2 py-1 rounded-xl text-primary-600",
                              {
                                "text-primary-600 bg-primary-50":
                                  user.role === "administrator",
                                "text-[#0F973D] bg-[#E7F6EC]":
                                  user.role === "salesManager",
                                "text-[#F58A07] bg-[#FEF4E6]":
                                  user.role === "salesRepresentative",
                              }
                            )}
                          >
                            {roles[user.role]}
                          </span>
                        </td>
                        <td className="font-medium text-xs  py-6 flex gap-3">
                          <EditUserDialog id={user.id} />
                          <DeleteUserDialog id={user.id} />
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan={4} className="p-3 text-center">
                      No user added
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
