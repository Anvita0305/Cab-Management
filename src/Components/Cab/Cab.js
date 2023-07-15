import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom';
import axios from "axios";
import CCard from './CCard';

export default function Cab() {
    const { id }=useParams();
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/driverDetails/${id}?id=${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  }, []);
  // let data=[{id:1,name:'mayur',contact_number:'45',email:'hj'}] 

  return (
    <div>
    <Navbar/>
    <div className="db">
        {data.length===0 ? (<h3>No Driver Yet!</h3>) :
           data.map((item)=>{
                   const idh=Math.random() * (87654321 - 1) + 1
                  item.id=id
                  return <CCard key={idh}  item={item}/>
          })
        }
    </div>
    <Footer/>
    </div>
  )
}
