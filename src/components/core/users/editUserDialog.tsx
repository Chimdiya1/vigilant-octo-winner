import { IconUser } from "@/components/icons/IconUser";
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
import { useEditUserMutation } from "@/lib/tanstack-query/users";
import { useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

function EditUserDialog({ id }: { id: string }) {
  const qc = useQueryClient();
  const [role, setRole] = useState("");
  const { register, handleSubmit, reset } = useForm({
    mode: "all",
  });

  const { mutateAsync: editUser, isPending: isEditUserLoading } =
    useEditUserMutation(id);

  const submit = async (values: object) => {
    const body = { ...values, role: role };
    try {
      await editUser(body);
      await qc.invalidateQueries({
        queryKey: ["users"],
      });
      reset();
      toast.success("User Edited successfully!");
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
      <DialogTrigger className="text-primary-600">Edit</DialogTrigger>
      <DialogContent>
        <div className="mx-auto flex flex-col items-center">
          <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center ">
            <IconUser />
          </div>
          <p className="text-[#1D2739] text-2xl">Edit User</p>
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
            disabled={isEditUserLoading}
            type="submit"
            className="w-full bg-primary-600 py-4 rounded-lg text-white"
          >
            {isEditUserLoading ? <>Loading...</> : <>Update User</>}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserDialog;
