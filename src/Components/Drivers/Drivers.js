import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { useState, useEffect } from 'react';
import axios from 'axios';
import DriverCard from "./DriverCard";
import { Link } from 'react-router-dom';

function Drivers() {
   const [data, setData] = useState([]);
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:8080/driverDetails');
         setData(response.data);
         console.log(response.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
     fetchData();
   }, []);
//  let data=[{id:1,name:'mayur',contact_number:'45',email:'hj'}]
  return (
    <div>
    <Navbar/>
    <div className="towork">
    <Link to={`/addriver`} className="todecide">Add Driver</Link>
    </div>
    <section className="page-contain">
        {data.length===0 ? (<h3>No Drivers Yet!</h3>) :
              data.map((item)=>{
                    const id=Math.random() * (87654321 - 1) + 1
                      return <DriverCard key={id}  item={item}/>
              })
        }
    </section>
    <Footer/>
    </div>
  )
}

export default Drivers