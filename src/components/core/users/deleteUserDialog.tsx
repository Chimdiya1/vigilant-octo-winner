import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteUserMutation } from "@/lib/tanstack-query/users";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IconTrash } from "@/components/icons/IconTrash";
import { useQueryClient } from "@tanstack/react-query";

function DeleteUserDialog({ id }: { id: string }) {
  const qc = useQueryClient();
  const { mutateAsync: deleteUser, isPending: isDeleteUserLoading } =
    useDeleteUserMutation(id);

  const submit = async () => {
    try {
      await deleteUser();
      await qc.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("User Deleted successfully!");
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
      <DialogTrigger className="text-[#98A2B3]">Remove</DialogTrigger>
      <DialogContent className="flex flex-col items-center text-center">
        <h2 className="text-[#1D2739] font-bold text-2xl">Delete this user</h2>
        <p className="text-base text-[#667185] font-normal mb-5 w-[358px]">
          This user and all associated data will be permanently removed. Do you
          wish to continue
        </p>
        <div className="flex gap-2">
          <DialogClose asChild>
            <button className="py-2 px-3 rounded-md border border-[#D0D5DD] bg-[#F7F9FC]">
              Cancel action
            </button>
          </DialogClose>

          <button
            onClick={() => submit()}
            className="flex text-sm py-2 px-3 gap-2 items-center rounded-md border text-[#D42620] border-[#D42620] bg-[#FBEAE9]"
          >
            {isDeleteUserLoading ? (
              "Loading"
            ) : (
              <>
                <IconTrash className=" text-sm" /> Yes Delete
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteUserDialog;
