import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
function ProductDetail() {

    const navigate=useNavigate();
    const para = useParams();
    const prod_val=para.productId;
    const [prodsetval,prodset]=useState([]);
    /* If the function is only used within the useEffect, you can define it directly inside the hook. This avoids the dependency issue entirely.*/
    useEffect(()=>{  
    function loadProductsById(){     
        fetch('https://fakestoreapi.com/products/'+ prod_val).then((response)=>{
          response.json().then((data)=>{  
            prodset(data);        
          }).catch(error=>{console.log(error)})
        }).catch(error=>{console.log(error)})
       }
         
        loadProductsById();
       },[prod_val]);
       
    return( <>
    <div className='items'>

    
        <div>
          <h2><i className="fa-solid fa-p"></i>roduct <i className="fa-solid fa-d"></i>etails</h2>
        </div>
        <div>
            <img src={prodsetval.image} alt="" height={150}></img>
        </div>
        <div>
            <h3>{prodsetval.title}</h3>
        </div>
        <div>
            <h6><i className="fa-solid fa-caret-right"></i>{prodsetval.description}</h6>
        </div>
        <div>
            Price :₹{prodsetval.price}
        </div>
        <button className="btn btn-secondary" onClick={()=>{navigate(-1);}}>Back</button>
        </div>
        
        </> );
}

export default ProductDetail;