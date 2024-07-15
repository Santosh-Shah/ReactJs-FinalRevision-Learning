import styles from "./Item.module.css";
// const Item = (props) => {
//   return <li className="list-group-item">{props.foodItems}</li>;
// };

// destructuring all items
const Item = ({ foodItems }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItems} being bought`);
  };

  return (
    <li className={`${styles["ss-item"]} list-group-item}`}>
      <span className={styles["ss-span"]}>{foodItems}</span>

      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
