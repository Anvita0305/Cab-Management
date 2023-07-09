import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from "axios";

function Dcard({item}) {
  const navigate = useNavigate()
  const [disable, setdisable] = useState(true);
  const [reg, setreg] = useState(item.reg);
  const [model, setmodel] = useState(item.model);
  const [color, setcolor] = useState(item.color);
  const handledis=()=>{
    setdisable(false)
  }
  const handleen=()=>{
    setdisable(true)
  }
  const hng=()=>{
    const data={
      reg:reg,
      model:model,
      color:color
    }
    let gh=item.id
    axios.post(`http://localhost:8080/updatecab/${gh}`,data)
    .then(response => {
      toast.success("data updated sucessfully")
      console.log(response.data);
    })
    .catch(error => {
      toast.error("Error Updating data! please try again")
      console.error('Error:', error);
    });

  }
  const hng1=()=>{
    let gh=item.id
    axios.delete(`http://localhost:8080/deletecab/${gh}`)
    .then(response => {
      toast.success("Cab deleted Successfully")
      navigate("/drivers")
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
                <p>registration number:</p>          
                <input className="input-tags" placeholder="registration number" value={reg} onChange={(e) => setreg(e.target.value)} disabled={disable} />
                <p>Model number:</p>
                <input className="input-tags" placeholder="Model number" value={model} onChange={(e) => setmodel(e.target.value)} disabled={disable} />
                <p>Color:</p>
                <input className="input-tags" placeholder="Color" value={color} onChange={(e) => setcolor(e.target.value)} disabled={disable} />
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

export default Dcard