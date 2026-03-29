import { useDeleteItemMutation } from "../model/deleteApi";

function DeleteDreamButton({id}) {
  const [deleteItem, { isLoading }] = useDeleteItemMutation()
  const handleDelete = async () => {
    if (confirm("Вивпевнені. Мрія не здійсниться.")) {
      try {
        await deleteItem(id);
      } catch {
        alert("Error!");
      }
    }
  };
  const buttonTitle = isLoading ? "Deleting ..." : "Delete";
  return <button onClick={handleDelete}>{buttonTitle}</button>;
}

export default DeleteDreamButton;
