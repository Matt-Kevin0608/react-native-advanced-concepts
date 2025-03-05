import { TouchableOpacity, Text } from "react-native";
import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

export function TotalPrice() {
  const { books, currency, setCurrency } = useContext(BookContext);

  const totalPrice = books.reduce((acc, currentBook) => {
    return currentBook.price + acc;
  }, 0);

  return (
    <>
      <Text style={{ marginTop: 20 }}>
        Total price : {totalPrice} {currency}
      </Text>
      <TouchableOpacity
        style={{ marginTop: 30, backgroundColor: "green" }}
        onPress={() => setCurrency(currency === "$" ? "€" : "$")}
      >
        <Text>Change currency to {currency === "$" ? "€" : "$"}</Text>
      </TouchableOpacity>
    </>
  );
}
