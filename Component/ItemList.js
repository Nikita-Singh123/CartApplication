import React, {useState,useEffect} from 'react'
import Filter from './Filter';
import Sort from './Sort';
import axios from 'axios';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

// actions
import { itemAddedToCart } from '../Actions/index';
import { connect } from 'react-redux';

function ItemList(props) {
    const [items, setitems] = useState([]);

    useEffect(() => {
      if(props.itemListShowing.length === 0){
         axios.get('https://api.myjson.com/bins/qzuzi')
         .then(res=>{
             for(let i=0;i<res.data.length;i++){
                res.data[i].qty=1;
                res.data[i].markedPrice=res.data[i].price + ((res.data[i].price*res.data[i].discount)/100)
               }
             setitems(res.data);
         })
      }else{
         setitems(props.itemListShowing);
      }
     
      }, [props.itemInCart,props.itemListShowing])

    return (
        <div className="row">
        <div className="col-md-3 col-lg-2 d-none d-sm-block">
           <Filter/>
        </div>
        <div className="col-md-9 col-lg-10 ">
           <div className="row d-none d-sm-block">
              <Sort/>
           </div>
           <div className="col-sm-12 d-block d-sm-none">
               <div className="col-6 float-left mb-2" >
                  <button style={{width:"100%"}}><FontAwesomeIcon icon={faSort} /> Sort</button>
               </div>
               <div className="col-6 float-right mb-2" >
                  <button style={{width:"100%"}}><FontAwesomeIcon icon={faFilter} /> Filter</button>
               </div>
           </div>
           <div className="row">
              {items.map(result=>(
              <div className="col-lg-3 mb-3 col-6" key={result.id}>
                 <div > <img src={result.img_url} alt="item images" style={{width:"100%"}} /> </div>
                 <div>{result.name}</div>
                 <div>
                    <i className="fa fa-rupee"></i><strong className="mr-4">{result.price}</strong>
                    <del style={{opacity: "0.75"}}>
                    {result.price + ((result.price*result.discount)/100)}
                    </del>
                    <span style={{color:"green"}}> {result.discount}% off </span>
                 </div>                
                 <button className="btn btn-warning rounded-pill" onClick={()=>props.itemAddedToCart(result)}>Add to Cart</button>
              </div>            
                             
              ))}
           </div>
        </div>
     </div>
    )
}

const mapDispatchToProps = {
   itemAddedToCart 
 };
 
 const mapStateToProps = (state)=>{
   return state;
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
// export default ItemList
