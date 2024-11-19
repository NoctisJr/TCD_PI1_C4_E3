import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar'
import Header from '../../components/AdminPanel/Header/Header'
import Table from '../../components/AdminPanel/Table/Table'


const AdminPanel = () => {
  const [selectedSection, setSelectedSection] = useState('tours');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("Tours");

  const BASE_URL = "https://la-ramoja-production.up.railway.app"

  const handleSearch = (searchKeyWord) => {
    const keyword = searchKeyWord.trim().toLowerCase();
    console.log(keyword)
    if(!keyword){
      setFilteredData(data);
      return;
    }

    const filteredData = data.filter((item) => {
      // Get all values of the current object
      const values = Object.values(item);

      // Check if any value matches the keyword
      const matchesKeyword = values.some((value) => {
        // Safely convert the value to a string and normalize to lowercase
        const stringValue = value ? value.toString().toLowerCase() : '';
        return stringValue.includes(keyword);
      });
      return matchesKeyword; // Include the item in the filtered data if there's a match
    })
    setFilteredData(filteredData);
  };

  // Fetch data based on the selected section
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';

      switch (selectedSection) {
        case 'tours':
          endpoint = `${BASE_URL}/api/tours`;
          setTitle("Tours");
          break;
        case 'users':
          endpoint = `${BASE_URL}/api/user`;
          setTitle("Users");
          break;
        case 'categories':
          endpoint = `${BASE_URL}/api/categories`;
          setTitle("Categories");
          break;
        default:
          endpoint = `${BASE_URL}/api/tours`;
          setTitle("Tours");
        // #TODO Missing Reservations and Guides
      }

      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setData([]); // Reset on failure
        setFilteredData([]); // Reset filtered data
      }
    };

    fetchData();
  }, [selectedSection]);

  return (
    <div className='admin-panel'>
      <Sidebar onSectionChange={setSelectedSection} />
      <div className="content">
        <Header title={title} onSearch={handleSearch} />
        <Table data={filteredData} />
      </div>
    </div>
  )
}

export default AdminPanel