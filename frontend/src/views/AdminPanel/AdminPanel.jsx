import React, { useState } from 'react'
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar'
import Header from '../../components/AdminPanel/Header/Header'
import Table from '../../components/AdminPanel/Table/Table'

const sampleData = [
    {
      id: 1,
      destination: "MESA_DE_LOS_SANTOS",
      description: "Visita al mercado campesino y cultivos de tabaco",
      categoryId: 4,
      climbingStyle: null,
      level: null,
      day: "SUN",
      schedule: "08:00",
      status: 'Activo'
    },
    {
      id: 2,
      destination: "LA_MOJARRA",
      description: "Escalada Deportiva",
      categoryId: 1,
      climbingStyle: "SPORT",
      level: "BEGINNER",
      day: "MON",
      schedule: "15:00",
      status: 'Activo'
    },
    {
      id: 3,
      destination: "LA_MOJARRA",
      description: "Escalada Clásica",
      categoryId: 1,
      climbingStyle: "TRAD",
      level: "ADVANCED",
      day: "TUE",
      schedule: "12:00",
      status: 'Inactivo'
    },
    {
      id: 4,
      destination: "LA_MOJARRA",
      description: "Escalada Deportiva",
      categoryId: 1,
      climbingStyle: "SPORT",
      level: "INTERMEDIATE",
      day: "WED",
      schedule: "14:00",
      status: 'Inactivo'
    },
    {
      id: 5,
      destination: "LA_MOJARRA",
      description: "Escalada Deportiva",
      categoryId: 1,
      climbingStyle: "TOP_ROPE",
      level: "BEGINNER",
      day: "THU",
      schedule: "13:00",
      status: 'Activo'
    },
    {
      id: 6,
      destination: "CHICAMOCHA",
      description: "Caminata por el cañon del chicamocha",
      categoryId: 2,
      climbingStyle: null,
      level: null,
      day: "SAT",
      schedule: "09:00",
      status: 'Activo'
    },
    {
      id: 7,
      destination: "MACAGUATO",
      description: "Via Ferrata en parque Macaguato",
      categoryId: 1,
      climbingStyle: "FERRATA",
      level: "ADVANCED",
      day: "SUN",
      schedule: "14:00",
      status: 'Inactivo'
    },
    {
      id: 8,
      destination: "MACAGUATO",
      description: "Escalada deportiva en parque Macaguato",
      categoryId: 1,
      climbingStyle: "SPORT",
      level: "EXPERT",
      day: "FRI",
      schedule: "10:00",
      status: 'Activo'
    },
    {
      id: 9,
      destination: "LA_MOJARRA",
      description: "Via Ferrata en La Mojarra",
      categoryId: 1,
      climbingStyle: "FERRATA",
      level: "BEGINNER",
      day: "MON",
      schedule: "15:00",
      status: 'Activo'
    },
  ];
  
  


const AdminPanel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(sampleData);

    const handleSearch = (term) => {
      setSearchTerm(term);
      // Here you could also add logic to filter your data based on `term`
    };
  return (
    <div className='admin-panel'>
        <Sidebar />
        <div className="content">
        <Header title="Tours" onSearch={handleSearch} />
        <Table data={data}/>
      </div>
    </div>
  )
}

export default AdminPanel