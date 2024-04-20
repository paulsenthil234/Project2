import productData from "./productdetail.jsx";
import { useState} from "react";
import { useEffect} from "react";
import Nav from "./nav.jsx";
import "./profile.css";

function Offers1(){
    const [data, setData] = useState([]);
    const [cartValue, setCartValue] = useState("");
    useEffect(()=>setData(productData.filter((val)=>val.category==="offer")),[]);
    function addToCart(){
        setCartValue(prev=>Number(prev)+1);
    }
    return(<>
        <Nav numberOFitems ={cartValue}/>
        <br />
        <div className="productType">
        {data.map((res,index)=>{
            return( 
            <div style={{marginLeft:"22px", marginTop:"20px"}} className="ten">
            <h4 style={{textAlign:"center", textDecoration:"underline"}}>{data[index].name}</h4>
            <img src={data[index].image} alt="" height="240px" width="240px"/>
            <p style={{textAlign:"center", color:"green", fontWeight:"bold"}}>Price:{data[index].offerprice}</p>
            <p style={{textAlign:"center", color:"red"}}>Original Price:<span style={{textDecoration:"line-through"}}>{data[index].orginalPrize}</span></p>
            <button type="button" onClick={addToCart} style={{textAlign:"center", fontWeight:"bold", marginLeft:"35%", padding:"5px", border:"0", borderRadius:"5px"}}>Add to cart</button>
            </div>);
            }
        )}
        </div>
        </>
        );
}

export default Offers1;