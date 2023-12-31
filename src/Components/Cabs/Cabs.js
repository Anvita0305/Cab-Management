import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import CabCard from "./CabCard"
import "./Cabs.css"
import { Link } from 'react-router-dom';


function Cabs() {
   const [data, setData] = useState([]);
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:8080/cabDetails');
         console.log(response.data);
         setData(response.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
     fetchData();
   }, []);
//  let data=[{id:1,cabreg:'mayur',model:'45',color:'hj'}]
  return (
    <div>
      <Navbar/>
      <div className="towork">
      <Link to={`/adcab`} className="todecide">Add Cab</Link>
      </div>
      <section className="page-contain">
        {data.length===0 ? (<h3>No Cabs Yet!</h3>) :
              data.map((item)=>{
                    const id=Math.random() * (87654321 - 1) + 1
                      return <CabCard key={id}  item={item}/>
              })
        }
    </section>
      
      <Footer/>
    </div>
  )
}

export default Cabs