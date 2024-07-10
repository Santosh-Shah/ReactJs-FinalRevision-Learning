import Item from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Bhat", "Roti", "Apple", "Mango"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
