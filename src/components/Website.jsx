import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import { JewelryList } from "./JewelryList";
import { Search } from "./Search";
import { Categories } from "./Categories";

export const Website = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/jewelries").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
      <div className="website">
        <Search />
        <Categories /> 
        <JewelryList jewelries={data} />
      </div>
  );
};

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { JewelryList } from "./JewelryList";

// export const Website = () => {
//   const [data, setData] = useState([]);  // For all jewelry items
//   const [filteredData, setFilteredData] = useState([]); // For gender-specific items
//   const [genders, setGenders] = useState([]); // For the list of genders
//   const [selectedGender, setSelectedGender] = useState(""); // To store the currently selected gender

//   // Fetch jewelry items
//   useEffect(() => {
//     axios
//       .get("http://localhost:3004/jeweleries")
//       .then((res) => {
//         setData(res.data);
//         setFilteredData(res.data); // Initially show all items
//       });
//   }, []);

//   // Fetch gender options
//   useEffect(() => {
//     axios
//       .get("http://localhost:3004/genders")
//       .then((res) => {
//         setGenders(res.data); // Assuming you have genders like 'male', 'female'
//       });
//   }, []);

//   // Filter the jewelry data based on the selected gender
//   const handleGenderChange = (e) => {
//     const selectedGender = e.target.value;
//     setSelectedGender(selectedGender);

//     if (selectedGender === "") {
//       // If no gender is selected, show all items
//       setFilteredData(data);
//     } else {
//       // Filter jewelry items by gender
//       const filtered = data.filter((jewelry) => jewelry.gender === selectedGender);
//       setFilteredData(filtered);
//     }
//   };

//   return (
//     <>
//       <div className="website">
//         {/* Gender Dropdown */}
//         <div className="row">
//           <label htmlFor="genderSelect">Select Gender:</label>
//           <select id="genderSelect" value={selectedGender} onChange={handleGenderChange}>
//             <option value="">All</option>
//             {genders.map((gender) => (
//               <option key={gender} value={gender}>
//                 {gender.charAt(0).toUpperCase() + gender.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Display Jewelry List */}
//         <div className="row">
//           <JewelryList jewelries={filteredData} />
//         </div>
//       </div>
//     </>
//   );
// };
