import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./adriver.css"
import toast from 'react-hot-toast';
import axios from "axios";
import {  useNavigate } from 'react-router-dom'

export default function ADriver() {
  const navigate = useNavigate()
  const [nams, setnams] = useState('');
  const [cons, setcons] = useState('');
  const [ems, setems] = useState('');
  const [id,setid]=useState('');
  const hng=()=>{
    // const data={
    //   name:nams,
    //   contact_number:cons,
    //   email:ems
    // }
    axios.post(`http://localhost:8080/createDriver`, null, {
                params: {
                    name: nams,
                    email: ems,
                    contact: cons,
                    id: id,
                },
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
        <p>Name :</p>          
        <input className="input-tags" placeholder="Driver name" value={nams} onChange={(e) => setnams(e.target.value)} />
        <p>Contact number:</p>
        <input className="input-tags" placeholder="Contact number" value={cons} onChange={(e) => setcons(e.target.value)} />
        <p>Email :</p>
        <input className="input-tags" placeholder="Email" value={ems} onChange={(e) => setems(e.target.value)}  />
        <p>Unique Id :</p>
        <input className="input-tags" placeholder="Id" value={id} onChange={(e) => setid(e.target.value)}  />
        <br></br>
        {<button className='' style={{marginTop:5}} onClick={hng}>Add</button>}
        <p class="cardf-footer">Go Ahead with Afourathon.</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
