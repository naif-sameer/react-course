import PropTypes from "prop-types";

export default function TodoList({ items }) {
  //   const items = props.items;
  //   const { items } = props;

  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
