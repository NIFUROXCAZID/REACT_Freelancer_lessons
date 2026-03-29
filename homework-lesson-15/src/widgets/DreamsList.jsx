import DreamCard from "@/entities/dream-item/ui/DreamCard";
import DeleteDreamButton from "@/features/dreams/delete/ui/DeleteDream";
import EditLink from "@/features/dreams/edit/ui/EditLink";

function DreamsList({ items }) {
  if(!items || items.length===0) return (<div>Список мрій порожній</div>);
  return (
    <div>
      <h1>Список мрій</h1>
      <hr />
      <div>
        {items.map((item) => (
          <DreamCard
            key={item.id}
            item={item}
            actions={[<DeleteDreamButton id={item.id} />, <EditLink id={item.id} />]}
          />
        ))}
      </div>
    </div>
  );
}

export default DreamsList;
