import React , {useState,useEffect}from 'react';
import './BookDetails.css';
import {useParams} from "react-router-dom";
const axios = require('axios');

  function BookDetails(){
    const icon_buy = '../../public/images/carts.png';

    const {id} = useParams();
    const img_style={
        width: "150px"
    };
    const icon_style={
        
        width: "30px",
        
    }
    const url = `http://localhost:4000/getbookdetails?id=${id}`;
    const [booksdetails , getbookDetails] = useState({"data":{}});
    const booksdetailsres = async ()=>{
        const resp = await axios.get(url);
            getbookDetails(resp.data);
    }
    useEffect(()=>{
        booksdetailsres();
    },[]); 
    if(booksdetails.data && Object.keys(booksdetails.data).length != 0){
        return(<>
            <div className = "bookdetails">
                <div className="book_img">
                    <img src ={booksdetails.data.img_source} style = {img_style} />
                    
                </div>
                <div className="book_desc">
                    <h3><b>{booksdetails.data.title}</b> </h3><br/>
                    <h5>Published IN {booksdetails.data.year} - ₹{booksdetails.data.price}</h5><br/>
                    <a href = {booksdetails.data.buy_link} target= "_blank">
                        <button type="button" class="btn btn-primary">
                        <img src = '/images/shopping-cart.png' style = {icon_style} /> 
                        Buy On Amazon
                        </button>
                    </a><br/><br/>
                    <span></span>
                    {booksdetails.data.description}
                    
                </div>    
        
            </div>
            
            </>
            )
    }else{
        return(
            <div>
                
            </div>
        )
    }
    
}
export default BookDetails;