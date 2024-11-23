import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar'
import Header from '../../components/AdminPanel/Header/Header'
import Table from '../../components/AdminPanel/Table/Table'


const AdminPanel = () => {
  const [selectedSection, setSelectedSection] = useState('tours');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("Tours");

  const BASE_URL = "https://ramoja-tours.up.railway.app"


  const handleSearch = (searchKeyWord) => {
    const keyword = searchKeyWord.trim().toLowerCase();
    console.log("Search triggered for: "+keyword)
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


  const handleDelete = async (row) => {
    if (row.isAdmin) {
      alert("No se permite eliminar usuarios con rol de ADMIN.");
      return;
    }
      const confirmDelete = confirm("¿Está seguro que desea eliminar este registro?");

      if(confirmDelete){
        try {
          const endpoint = `${BASE_URL}/api/${selectedSection}/${row.id}`
          const response = await fetch(endpoint, {method: "DELETE"})
          if (response.ok) {
            setData((prevData) => prevData.filter((item) => item.id !== row.id));
            setFilteredData((prevFilteredData) =>
              prevFilteredData.filter((item) => item.id !== row.id)
            );
            alert("Registro eliminado.");
          } else {
            throw new Error("Error al eliminar el item.");
          }
        } catch (error) {
          console.error(error);
          alert("Ha ocurrido un error al tratar de eliminar el item.");
        }
      }
  }


  // Fetch data based on the selected section
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';

      switch (selectedSection) {
        case 'tours':
          endpoint = `${BASE_URL}/api/tours`;
          setTitle("Tours");
          break;
        case 'user':
          endpoint = `${BASE_URL}/api/user`;
          setTitle("Usuarios");
          break;
        case 'categories':
          endpoint = `${BASE_URL}/api/categories`;
          setTitle("Categorias");
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
        <Header title={title} onSearch={handleSearch} selectedSection={selectedSection}/>
        <Table data={filteredData} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default AdminPanel