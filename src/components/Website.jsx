import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import { JewelryList } from "./JewelryList";
import { Search } from "./Search";
import { Categories } from "./Categories";

export const Website = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3004/jewelries")
    .then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios
    .get("http://localhost:3004/categories")
    .then((res) => {
      setCategories(res.data);
    })
  }, []);

  useEffect(() => { 
    axios
    .get("http://localhost:3004/gender")
    .then((res) => {
      setGender(res.data);
    })
  }, [])

  // useEffect(() => {
  //   // Filter data based on selected gender
  //   if (selectedGender) {
  //     setFilteredData(data.filter((jewelry) => jewelry.gender === selectedGender));
  //   } else {
  //     setFilteredData(data); // Show all items if no gender is selected
  //   }
  // })

  return (
      <div className="website">
        <Search />
        <Categories 
        categories={categories} 
        gender={gender}
        
        /> 
        {/* <Gender />  */}
        <JewelryList jewelries={data} />
      </div>
  );
};
