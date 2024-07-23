import { IconUser } from "@/components/icons/IconUser";
import { IconAdd } from "../../icons/IconAdd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Input from "@/components/global/input";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "@/lib/tanstack-query/users";
import { useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { DialogTitle } from "@radix-ui/react-dialog";

function NewUserDialog() {
  const qc = useQueryClient();
  const [role, setRole] = useState("");
  const { register, handleSubmit, reset } = useForm({
    mode: "all",
  });

  const { mutateAsync: createUser, isPending: isCreateUserLoading } =
    useCreateUserMutation();

  const submit = async (values: object) => {
    try {
      await createUser({ ...values, role: role });
      await qc.invalidateQueries({
        queryKey: ["users"],
      });
      reset();
      toast.success("User Created successfully!");
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        toast.error(
          e?.response?.data?.message ?? "Something went wrong, please try again"
        );
      } else {
        toast.error("An unexpected error has occured");
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-[#0D6EFD] min-w-max text-white px-3 py-2 rounded-md flex gap-2">
        <IconAdd />
        New User
      </DialogTrigger>
      <DialogContent>
        <div className="mx-auto flex flex-col items-center">
          <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center ">
            <IconUser />
          </div>
          <DialogTitle>
            <p className="text-[#1D2739] text-2xl">New User</p>
          </DialogTitle>
        </div>
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(submit)}>
          <Input
            name="email"
            placeholder="New User's Email Address"
            title="Email Address"
            className="text-[#475367] border rounded-md p-4 text-sm"
            register={register("email", { required: "Required" })}
          />
          <Input
            name="fullName"
            placeholder="New User's Email Address"
            title="Full Name"
            className="text-[#475367] border rounded-md p-4 text-sm"
            register={register("fullName", { required: "Required" })}
          />

          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#475367] mb-1">
              Role
            </label>
            <Select defaultValue="admin" onValueChange={(e) => setRole(e)}>
              <SelectTrigger className="w-full py-6 text-sm">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="divide-y">
                <SelectItem value="admin" className="text-sm font-normal py-4">
                  Admin
                </SelectItem>
                <SelectItem
                  value="salesManager"
                  className="text-sm font-normal py-4"
                >
                  Sales Manager
                </SelectItem>
                <SelectItem
                  value="salesReresentative"
                  className="text-sm font-normal py-4"
                >
                  Sales Reresentative
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="password"
            register={register("newPassword", { required: "Required" })}
            name="password"
            placeholder=".........."
            title="Create Password"
            className="text-[#475367] border rounded-md p-4 text-sm"
          />

          <button
            disabled={isCreateUserLoading}
            type="submit"
            className="w-full bg-primary-600 py-4 rounded-lg text-white"
          >
            {isCreateUserLoading ? (
              <span className="mx-auto">Loading...</span>
            ) : (
              <>Add User</>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewUserDialog;
