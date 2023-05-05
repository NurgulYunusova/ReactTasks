/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [namee, setName] = useState([]);
  const [descriptionn, setDescription] = useState([]);

  const loadData = () => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const add = () => {
    let categories = {
      name: namee,
      description: descriptionn,
    };

    axios
      .post("https://northwind.vercel.app/api/categories", categories)
      .then((res) => {
        loadData();
      });
  };

  return (
    <>
      <label htmlFor="">Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      <label htmlFor="">Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <button onClick={add}>ADD</button>
      <ul>
        {categories &&
          categories.map((item) => (
            <li>
              {item.name} - {item.description}
            </li>
          ))}
      </ul>
    </>
  );
}

export default CategoryPage;
