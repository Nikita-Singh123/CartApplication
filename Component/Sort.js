import React, {Component} from 'react';

// actions
import { itemsSorting } from '../Actions/index';
import { connect } from 'react-redux';

class Sort extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            active: false,
             data: [
                {
                    id : 1,
                    text : "Price -- High Low",
                    stateName :"inActive",
                    type : "Price -- High Low"            
                },
                {
                    id : 2,
                    text : "Price -- Low High",
                    stateName :"inActive",
                    type : "Price -- Low High"            
                },
                {
                    id : 3,
                    text : "Discount",
                    stateName :"inActive",
                    type : "Discount"            
                }
            ]
        }
    }

    listItemClicked = (data) => {
            this.setState({
                data: this.state.data.map(item=>{
                    item.stateName = 'inActive';
                    if(item.id==data.id){
                        item.stateName = 'active';
                    }
                    return item;
                })
            })
    }

    render(){
        const {data} = this.state;
        return (
            <div className="d-flex flex-row bd-highlight mb-3">            
                <h4 className="mr-3">Sort By</h4>
                <ul className="d-flex flex-row bd-highlight mb-3 nav" style={{listStyle:"none"}}>
                    {this.state.data.map((item, index)=>{
                        return(
                            <li key={index} className="mr-3" >
                                <a className={item.stateName} 
                                    onClick={()=>{this.listItemClicked(item);this.props.itemsSorting(item.text)}} >{item?item.text:''}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


const mapDispatchToProps = {
    itemsSorting 
  };
  
  const mapStateToProps = (state)=>{
    return state;
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sort);






















// import React, {useState} from 'react';
// // actions
// import { itemsHighToLow } from '../Actions/index';
// import { connect } from 'react-redux';

// function Sort(props) {
//     const [tabsData, setTabsData] = useState([
//         {
//             "id" : 1,
//             "text" : "Price -- High Low",
//             "stateName" :"active",
//             "type" : "Price -- High Low"            
//         },
//         {
//             "id" : 2,
//             "text" : "Price -- Low High",
//             "stateName" :"inActive",
//             "type" : "Price -- Low High"            
//         },
//         {
//             "id" : 3,
//             "text" : "Discount",
//             "stateName" :"inActive",
//             "type" : "Discount"            
//         },
//     ])

//     const listItemClicked = (data) => {
//             // tabsData.map((item)=>{
//             //     if(item.id === data.id){
//             //         item.state="active";
//             //     }else{
//             //         item.state="inActive";
//             //     }
//             // }
//             // )

           
//             setTabsData( tabsData.map(item=>{
//                 item.stateName = 'inActive';
//                 if(item.id==data.id){
//                     item.stateName = 'active';
//                 }
//             }
//             )
//             return tabsData; 

//             );
//         console.log("tabsData",tabsData)        
//     }
//     return (
//         <div className="d-flex flex-row bd-highlight mb-3">            
//             <h4 className="mr-3">Sort By</h4>
//             <ul className="d-flex flex-row bd-highlight mb-3 nav" style={{listStyle:"none"}}>
//                 {tabsData.map((item,index)=>(
//                 // <li key={item.id} className="mr-3" >
//                 //     <a onClick={()=>props.itemsHighToLow()} className={item.state}>{item.text}</a>
//                 // </li>      
//                 <li key={index} className="mr-3" >
//                 <a className={item.stateName} 
//                     onClick={()=>listItemClicked(item)} >{item?item.text:''}</a>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }



// const mapDispatchToProps = {
//     itemsHighToLow
//   };
  
//   const mapStateToProps = (state) => {
//     return state;
//   };
  
// export default connect(mapStateToProps, mapDispatchToProps)(Sort);

