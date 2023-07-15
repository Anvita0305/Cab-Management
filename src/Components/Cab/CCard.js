import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from "axios";
// let data=[{id:1,name:'mayur',contact_number:'45',email:'hj'}]
function CCard({item}) {
  const navigate = useNavigate()
  const [disable, setdisable] = useState(true);
  const [nams, setnams] = useState(item.name);
  const [cons, setcons] = useState(item.contact_number);
  const [ems, setems] = useState(item.email);
  const handledis=()=>{
    setdisable(false)
  }
  const handleen=()=>{
    setdisable(true)
  }
  const hng=()=>{
    // const data={
    //   name:nams,
    //   contact_number:cons,
    //   email:ems
    // }
    let gh=item.email
    console.log(gh);
    axios.post(`http://localhost:8080/updateDriver/${gh}`, null, {
                params: {
                    name: nams,
                    email: ems,
                    contact: cons,
                    id: item.id,
                },
            })
    .catch(error => {
      toast.error("Error Updating data! please try again")
      console.error('Error:', error);
    });

  }
  const hng1=()=>{
    let gh=item.email
    axios.delete(`http://localhost:8080/deleteDriver/${gh}?email=${gh}`)
    .then(response => {
      toast.success("Driver deleted Successfully")
      navigate("/cabs")
      console.log(response.data);
    })
    .catch(error => {
      toast.error("Error deleting data")
      console.error('Error:', error);
    });

  }


  return (
    <div>
        <div className="containerer">
            <div className="carrd">
                <div className="boxx">
                <div className="content">     
                {disable ? (<button onClick={handledis} className="button-33">Edit</button>) : <button onClick={handleen} className="button-33">Stop Edit</button>}     
                <p>Name :</p>          
                <input className="input-tags" placeholder="Driver name" value={nams} onChange={(e) => setnams(e.target.value)} disabled={disable} />
                <p>Contact number:</p>
                <input className="input-tags" placeholder="Contact number" value={cons} onChange={(e) => setcons(e.target.value)} disabled={disable} />
                <p>Email :</p>
                <input className="input-tags" placeholder="Email" value={ems} onChange={(e) => setems(e.target.value)} disabled={disable} />
                <br></br>
                {!disable && <button className='' style={{marginTop:5}} onClick={hng}>Update</button>}
                <br></br>
                {!disable && <button className='' style={{marginTop:5}} onClick={hng1}>Delete</button>}
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CCard