import productData from "./productdetail.jsx";
import { useState} from "react";
import { useEffect, useRef} from "react";
import Nav from "./nav.jsx";
import "./profile.css";
import { Link } from "react-router-dom";

function Profile1(){
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState("");
    const [cartValue, setCartValue] = useState("");
    const [add, setAdd] = useState("Add to cart");
    // const inputRef = useRef();
    function searched(event){
        setSearching(event.target.value);
        setData((event.target.value===" ")?(data):(data.filter(res5=>(res5.category.toLowerCase().includes(searching))?1:0)));
    }
    useEffect(()=>setData(productData),[]);
    // useEffect(()=>{console.log(inputRef.current)},[cartValue])
    function addToCart(){
        setCartValue(prev=>Number(prev)+1);
    }
    return(<>
        <Nav numberOFitems ={cartValue}/>
        <br />
        <div>
            <input className="inputSearching" type="text" placeholder="Search what you want" onChange={searched}/>
        </div>
        <div className="productType">
        {data.map((res,index)=>{
            return(
            <div style={{marginLeft:"22px", marginTop:"20px"}} className="ten">
            <h4 style={{textAlign:"center", fontWeight:"bold", color:"black", textDecoration:"underline"}}>{data[index].name}</h4>
            <Link to="/product">
            <img src={data[index].image} alt={data[index].id} height="240px" width="240px"/></Link>
            <p style={{textAlign:"center", color:"green", fontWeight:"bold"}}>Price:{data[index].offerprice}</p>
            <p style={{textAlign:"center", color:"red"}}>Original Price:<span style={{textDecoration:"line-through"}}>{data[index].orginalPrize}</span></p>
            <button type="button" onClick={addToCart} style={{textAlign:"center", fontWeight:"bold", marginLeft:"35%", padding:"5px", border:"0", borderRadius:"5px"}}>{add}</button>
            </div>
            );
            }
        )}
        </div>
        </>
        );
}

export default Profile1;