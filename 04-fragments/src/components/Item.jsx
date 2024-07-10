import styles from "./Item.module.css";
// const Item = (props) => {
//   return <li className="list-group-item">{props.foodItems}</li>;
// };

// destructuring all items
const Item = ({ foodItems }) => {
  return (
    <li className={`${styles["ss-item"]} list-group-item}`}>
      <span className={styles["ss-span"]}>{foodItems}</span>
    </li>
  );
};

export default Item;
