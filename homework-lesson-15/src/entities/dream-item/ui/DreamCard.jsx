import { Fragment } from "react";

function DreamCard({item, actions}) {
  return (
    <div>
      <p>{item.description}</p>
      <p>{item.year}</p>
      <p>{item.friends}</p>
      {!!actions && (
        <div>
          {actions.map((action, index) => (
            <Fragment key={index}>{action}</Fragment>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
}

export default DreamCard;
