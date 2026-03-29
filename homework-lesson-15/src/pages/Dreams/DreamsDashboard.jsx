import { useGetListQuery } from "@/entities/dream-item/model/itemApi";
import AddDreamButton from "@/features/dreams/add/ui/AddButton";
import DreamsList from "@/widgets/DreamsList";

function DreamsDashboard() {
  const { data: dreamList, isLoading, isError } = useGetListQuery()
  if (isLoading) return <div>Завантаження</div>
  if (isError) return <div>Помилка</div>;
    return (
      <div>
        <h1>DreamsDashboard</h1>
        <AddDreamButton/>
        <DreamsList items={dreamList} />
      </div>
    );
}

export default DreamsDashboard;
