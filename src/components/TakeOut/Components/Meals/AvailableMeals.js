import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../../Components/UI/Card";

import MealItem from "./MealItem/MealItem";

const dummy_available_items = [
  {
    id: "m0",
    name: "Peking Duck",
    price: "22.49",
    description:
      "Though they appear to be the same and taste the same, the two types of duck are processed, cooked, sliced, and consumed in very different ways. Peking duck is a type of roasted duck with a very thin layer of crispy skin that snaps when you bite it, which is the polar opposite of Cantonese roast duck skin.",
  },{
    id: "m1",
    name: "Sukiyaki Pot",
    price: "24.49",
    description:
      "Sukiyaki is the Japanese sweet and salty hot-pot meal. It is usually prepared tableside on a portable gas stove, in a traditional shallow iron pan. This popular Japanese dish is usually made with beef, preferably the well-marbled tender cuts. However, some varieties employ pork or even tofu, creating the vegetarian version of the dish.",
  },
  {
    id: "m2",
    name: "Kari Ikan",
    price: "15.49",
    description:
      "Kari ikan is a delicious fish curry originating from Malaysia. It is typically made with a combination of fish that is cut into pieces, coconut milk, and a variety of spices such as fenugreek, cumin, curry leaves, chili peppers, mustard seeds, tamarind, ginger, turmeric, coriander, and lemongrass.",
  },
  {
    id: "m3",
    name: "KUNG PAO CHICKEN",
    price: "16.49",
    description:
      "As one of the most popular Asian foods in America, kung pao chicken continues to add flavor to any meal of your choice. This delicious source of protein is boneless, skinless, stir-fried chicken breast that pairs well with vegetables and nuts. ",
  },
  {
    id: "m4",
    name: "Pork Ramen Bowl",
    price: "15.79",
    description:
      "Another staple in American diets is ramen. Due to the versatility in flavor, ingredients and preparation, ramen is one of the most popular Asian dishes that has become Americans’ favorite, easy meal option. ",
  },
  {
    id: "m5",
    name: "Top class WAGYU",
    price: "30.59",
    description:
      "Wagyu beef has become a delicacy for Japanese cuisines that has spread to the United States. Why is this meat so popular? Wagyu is a type of cattle breed in Japan. The meat they produce has a unique concentration of fat inside the muscle, categorizing the beef as a high marbling texture. This factor makes the meat more expensive since other beef does not have the same high-grain intramuscular fat. ",
  },
  {
    id: "m6",
    name: "BIBIMBAP",
    price: "15.49",
    description:
      "Bibimbap is a fun meal to create if you enjoy simple dishes with lots of protein. This dish is a mixed bowl of rice, beef, assorted vegetables and eggs. The individual ingredients cook separately and combine to create a delicious concoction of healthy food options for any meal. ",
  },
  {
    id: "m7",
    name: "GỎI CUỐN",
    price: "13.49",
    description:
      "Gỏi cuốn — also known as Vietnamese spring rolls — is meat, vegetables and rice noodles in a rice paper roll. The roll is thin enough to see the ingredients inside. ",
  },
]
const AvailableMeals = () => {
  const [items, setItems] = useState([]);
  const loadedData = [];

  useEffect(() => {
    for (let key in dummy_available_items) {
      loadedData.push({
        id: key,
        name: dummy_available_items[key].name,
        price: dummy_available_items[key].price,
        description: dummy_available_items[key].description,
      });
    }
    setItems(loadedData);
},[loadedData]);

  const mealsList = items.map((item) => {
    return (
      <MealItem
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
