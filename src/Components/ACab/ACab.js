import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./acab.css"
import toast from 'react-hot-toast';
import axios from "axios";
import {  useNavigate } from 'react-router-dom'

export default function ACab() {
  const navigate = useNavigate()
  const [reg, setreg] = useState('');
  const [model, setmodel] = useState('');
  const [color, setcolor] = useState('');
  const [id, setid] = useState('');
  const hng=()=>{
    const data={
        cabRegistrationNumber:reg,
        carModel:model,
        carColour:color
      }
    axios.post(`http://localhost:8080/addCab`,data)
    .then(response => {
      toast.success("Cab Added sucessfully")
      navigate('/cabs')
      console.log(response.data);
    })
    .catch(error => {
      toast.error("Error Updating data! please try again")
      console.error('Error:', error);
    });

  }
  return (
    <div>
        <Navbar/>
        <div className='outer'>
        <div class="cardf">
        <p>registration number:</p>          
        <input className="input-tags" placeholder="registration number" value={reg} onChange={(e) => setreg(e.target.value)} />
        <p>Model number:</p>
        <input className="input-tags" placeholder="Model number" value={model} onChange={(e) => setmodel(e.target.value)} />
        <p>Color:</p>
        <input className="input-tags" placeholder="Color" value={color} onChange={(e) => setcolor(e.target.value)} />
        <p>Unique Id :</p>
        <input className="input-tags" placeholder="Id" value={id} onChange={(e) => setid(e.target.value)}  />
        <br></br>
        {<button className='' style={{marginTop:5}} onClick={hng}>Add Cab</button>}
        <p class="cardf-footer">Go Ahead with Afourathon.</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
