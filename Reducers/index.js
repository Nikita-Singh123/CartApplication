import {combineReducers} from 'redux';
import axios from 'axios';

const initialState=[];
var initialData;
var final_state;
axios.get('https://api.myjson.com/bins/qzuzi')
.then(res=>{
    for(let i=0;i<res.data.length;i++){
       res.data[i].qty=1;
       res.data[i].markedPrice=res.data[i].price + ((res.data[i].price*res.data[i].discount)/100)
      }
      initialData = res.data;
})

    const itemInCart = (state=initialState, action)=>{
    switch(action.type){
        case 'ITEM_ADDED_TO_CART':            
                let isExist = false;             
               
                state.length && state.map((item)=>{
                    if(item.id===action.payload.id){
                        ++action.payload.qty;
                        isExist = true;
                    }
                })       
                !isExist && state.push(action.payload);
                final_state=state.filter(item=>item.qty>0);
                console.log("state in reducer",state, state.length,final_state);
            return final_state;

        case 'ITEM_REMOVED_TO_CART':
                state = state.filter(item=>item.id!==action.payload);
                console.log("After removed item", state);  
                return state;

        case 'ADD_QUANTITY':
            state.map((item)=>{
                if(item.id===action.payload){
                    ++item.qty
                }
            })   
            state = state.filter(item=>item.qty!==0);
            return state;

        case 'REMOVE_QUANTITY':
            state.map((item)=>{
                if(item.id===action.payload){
                    --item.qty
                }
            })   
            state = state.filter(item=>item.qty!==0);
            return state;

        default:
                return state;
    }

}


const itemListShowing = (list="", action)=>{
    switch(action.type){
  
        case 'FILTER_DATA':
            if(list.length === 0){
                list = initialData.filter(item=>((action.payload.min<=item.price) &&
                (item.price<=action.payload.max)));
                
                return list;  
            }else{
                list = list.filter(item=>((action.payload.min<=item.price) &&
                (item.price<=action.payload.max)));
                
                return list;  
            }

            case 'SEARCH_ITEM':   
                if(list.length === 0){
                    list = initialData.filter(item=>item.name === action.payload);
                }else{
                    list = list.filter(item=>item.name === action.payload);
                }        
                 
                return list;

            case 'ITEMS_SORT':  
                list=action.data;
                
                return list;     
                             

        default:
                return list;

                
    }

}





const combineAllReducers = combineReducers({
    itemInCart,itemListShowing
});

export default combineAllReducers;

