const ErrorMsg = ({ items }) => {
  // let foodItems = ["Dal", "Bhat", "Roti", "Apple", "Mango"];

  // let foodItems = [];

  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMsg;
