import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ( {items, heading}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(i);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
