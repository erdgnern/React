const foods = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Crabcake",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sea-food" },
    preptime: "7 min",
    servingsize: "2 pcs",
    price: "$12",
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Chicken Kebab",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meat Dish" },
    preptime: "12 min",
    servingsize: "2 pcs",
    price: "$8",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Baklava",
    category: { _id: "5b21ca3eeb7f6fbccd471816", name: "Dessert" },
    preptime: "None",
    servingsize: "4 pcs",
    price: "$8",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Carrot Cake",
    category: { _id: "5b21ca3eeb7f6fbccd471816", name: "Dessert" },
    preptime: "None",
    servingsize: "1 pcs",
    price: "$4",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Chicken Curry",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meat Dish" },
    preptime: "16 min",
    servingsize: "Plate",
    price: "$10",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Fried Rice",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Side-meal" },
    preptime: "5 min",
    servingsize: "Plate",
    price: "$6",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Noodle",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Side-meal" },
    preptime: "6 min",
    servingsize: "Plate",
    price: "$6",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Smoked Salmon",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sea-food" },
    preptime: "13 min",
    servingsize: "150 gr",
    price: "$16",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Gyro",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meat Dish" },
    preptime: "2 min",
    servingsize: "150 gr",
    price: "$12",
  },
];

export function getFoods() {
  return foods;
}
