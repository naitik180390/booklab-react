import React, {useState,useEffect} from 'react';
import './BookList.css';
import { Link } from "react-router-dom";

//import axios from 'axios'
const axios = require('axios');
function BookList(){

    const url = `http://localhost:4000/getbooklist`;
    const [bookslist , getbookList] = useState({"data":[]});
    const bookslistres = async ()=>{
        const resp = await axios.get(url);
            getbookList(resp.data);

    }
    useEffect(()=>{
        bookslistres();
    },[]);

    if(bookslist.data.length){
        console.log(bookslist.data);
        var booksresp =bookslist.data; 
        console.log(booksresp);
        const img_style={
            width: "150px"
        }
        const bookdata = booksresp.map((books) => {
            return( 
                <>
                    <Link to ={`/book_details/${books.id}`}>

                    <div className = "internal-class">
                        <img src = {books.img_source}  style={img_style}/><br/>
                    
                        <b>{books.title}</b><br/>
                        ₹{books.price}
                    </div>
                </Link>
                </>
             )
        });
        
        return(
            <div className = "booklist">
                {bookdata}
            </div>
        )
    }else{
        return(
            <div>
                
            </div>)
    }
    
}

export default BookList;