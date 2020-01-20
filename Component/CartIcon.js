import React,{useEffect,useState} from 'react';

// actions
import { itemRemovedToCart,addQuantity,removeQuantity } from '../Actions/index';
import { connect } from 'react-redux';

function CartIcon(props) {
    const [totalScores, settotalScores] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);
    
   

useEffect(() => {    


        console.log("props in carticon",props.itemInCart );
        settotalScores(props.itemInCart.reduce(
        (previousScore, item)=>previousScore+(item.markedPrice*item.qty), 
        0));

        setPayableAmount(props.itemInCart.reduce(
        (previousScore, item)=>previousScore+(item.price*item.qty), 
        0));      
   
}, [props.itemInCart])


    return (
        <>
            <div className="row">
                <div className="col-lg-9">                            

                    {props.itemInCart.map(result=>(
                    <div className="border mb-2" style={{border:"2px solid black"}} key={result.id} >
                        <div className="row m-2">
                            <div className="col-lg-2">
                                <img src={result.img_url} style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-10">
                            <div style={{width:"100%"}}> {result.name}</div>
                                    <span className="col-lg-4">
                                        <i className="fa fa-rupee"></i><strong className="mr-4">{result.price}</strong>
                                        <del style={{opacity: "0.75"}}>
                                        {result.price + ((result.price*result.discount)/100)}
                                        </del>
                                        <span style={{color:"green"}}> {result.discount}% off </span>
                                    </span>

                                    <span className="col-lg-4">
                                        <button className="rounded" onClick={()=>props.removeQuantity(result.id)}>
                                            <strong>-</strong>
                                        </button>
                                        <strong className="m-2">{result.qty}</strong>
                                        <button className="rounded" onClick={()=>props.addQuantity(result.id)}>
                                            <strong>+</strong>
                                        </button>
                                    </span>

                                    <span className="col-lg-4">
                                        <strong className="cursor-pointer" onClick={()=>props.itemRemovedToCart(result.id)}>Remove</strong>                                
                                    </span>
                            
                                
                            </div>
                         
                        </div>
                    </div>                       
              ))}



                </div>
                <div className="col-lg-3 ">
                    price details

                    <div>Price: {totalScores}</div>
                    <div>Discount: {totalScores-payableAmount}</div>
                    <div>Total Payable: {payableAmount}</div>
                </div>
            </div>
        </>
    )
}


const mapDispatchToProps = {
    itemRemovedToCart,
    addQuantity,
    removeQuantity
  };
  
  const mapStateToProps = (state) => {
    return state;
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
