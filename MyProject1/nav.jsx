import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props){
    return(
        
        <div className="one">
            <h3>Shopeez</h3>
            <ul className="two">
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/profiles">Home</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/latest">Latest</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/mens">Mens</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/womens">Womens</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/kids">Kids</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/offers">Offers</Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/cart">Cart<sup style={{color:"red"}}>{props.numberOFitems}</sup></Link></li>
                <li>
                <Link style={{color:"yellow", textDecoration:"none", fontFamily:"cursive", fontSize:"larger", fontWeight:"bold"}} to="/signin">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Nav;