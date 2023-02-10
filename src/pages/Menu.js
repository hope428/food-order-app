import React from "react";
import MenuItem from "../components/MenuItem";

export default function Menu() {
  const tempData = [
    {
      _id: 1,
      name: "Burger",
      description: "lorem ipsum dolor",
      price: 7.99,
    },
    {
        _id: 2,
        name: "Sushi",
        description: "lorem ipsum dolor",
        price: 10.99,
      },
      {
        _id: 3,
        name: "Fried chicken",
        description: "lorem ipsum dolor",
        price: 5.99,
      },
  ];

  return <div className="menu">
    {tempData.map((item) => <MenuItem key={item._id} item={item}/>)}
  </div>;
}
