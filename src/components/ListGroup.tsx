import { useState } from "react";
//useState- It is a Hook that allows you to add state management to functional components in React.

// {items: [], heading: string} - This is a TypeScript type annotation that specifies the shape of the props object that the ListGroup component expects. It indicates that the component should receive an items prop, which is an array of strings, and a heading prop, which is a string.
interface Props {
  items: string[];
  heading: string;
  // (items: string[]) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
