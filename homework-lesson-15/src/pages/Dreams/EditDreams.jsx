import { useParams, useNavigate } from "react-router";

import DreamForm from "@/shared/components/DreamForm/ui/DreamForm";
import { useEditItemMutation, useGetItemQuery } from "@/features/dreams/edit/model/editApi";
import { useAddItemMutation } from "@/features/dreams/add/model/addApi";

function EditDream() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: item, isLoading } = useGetItemQuery(id, { skip: !id });
  const [editItem, { isLoading: isSaving }] = useEditItemMutation();
  const [addItem, { isLoading: isAdding }] = useAddItemMutation();

  const isEdit = !!id;

  if (isLoading || isSaving || isAdding) return <div>Завантаження...</div>;
  if (isEdit && !item) return <div>Задача не знайдена</div>;

  const handleSubmit = async (values) => {
    if (isEdit) {
      await editItem({ id, data: values });
    } else {
      await addItem(values);
    }
    navigate("/dream");
  };

  return (
    <div>
      <h1>{isEdit ? "Редагування Dream" : "Створення нового Dream"}</h1>
      <DreamForm initialValues={item || { title: "", description: "" }} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditDream;
