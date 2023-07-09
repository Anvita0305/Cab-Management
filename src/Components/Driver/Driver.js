import { useState,useEffect } from "react";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Driver.css"
import { useParams } from 'react-router-dom';
import axios from "axios";
import DCard from "./Dcard";

function Driver() {
  const { id }=useParams();
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/cab/${id}`);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  let data=[{id:1,reg:'mayur',model:'45',color:'hj'}] 

  return (
    <div>
        <Navbar/>
        <div className="db">
        {data.length===0 ? (<h3>No Cabs Yet!</h3>) :
           data.map((item)=>{
                   const idh=Math.random() * (87654321 - 1) + 1
                  item.id=id
                  return <DCard key={idh}  item={item}/>
          })
        }
        </div>
        <Footer/>    
    </div>
  )
}

export default Driver