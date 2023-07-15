import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Callc from './Callc';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./call.css"


export default function Call() {
    const { id }=useParams();
    // const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:8080/cabs/${id}`);
    //       setData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []); 
    let data=[{id:1,name:'mayur',email:'45',color:'hj'}] 
  return (
    <div>
        <Navbar/>
        <section className="page-contain">
        {data.length===0 ? (<h3>No Drivers Yet!</h3>) :
           data.map((item)=>{
                   const idh=Math.random() * (87654321 - 1) + 1
                  item.id=id
                  return <Callc key={idh}  item={item}/>
          })
        }
        </section>
        <Footer></Footer>
    </div>
  )
}
