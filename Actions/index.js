import axios from 'axios';

const itemAddedToCart = (data) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: data
    }
}

const itemRemovedToCart = (data) => {
    return {
        type: 'ITEM_REMOVED_TO_CART',
        payload: data
    }
}

const addQuantity = (data) => {
    return {
        type: 'ADD_QUANTITY',
        payload: data
    }
}

const removeQuantity = (data) => {
    return {
        type: 'REMOVE_QUANTITY',
        payload: data
    }
}


const itemsSorting = (data)=>{
    return async (dispatch)=>{
        
            await axios.get('https://api.myjson.com/bins/qzuzi')
            .then((res)=>{
                if(data === "Price -- High Low"){
                    for(let i=0;i<res.data.length;i++){
                        res.data[i].qty=1;
                        res.data[i].markedPrice=res.data[i].price + ((res.data[i].price*res.data[i].discount)/100)
                        }
                        res.data.sort(function(a, b){
                            return b.price-a.price
                        })
                }
                if(data === "Price -- Low High"){
                    for(let i=0;i<res.data.length;i++){
                        res.data[i].qty=1;
                        res.data[i].markedPrice=res.data[i].price + ((res.data[i].price*res.data[i].discount)/100)
                        }
                        res.data.sort(function(a, b){
                        return a.price-b.price
                        })
                        
                }
                               
                dispatch({type: 'ITEMS_SORT', data: res.data});
            })
        
    }
}

const searchItem = (data) => {
    console.log("in action",data);
    return {
        type: 'SEARCH_ITEM',
        payload: data
    }
}

const filterItem = (data) => {
    console.log("in action filter data",data);
    return {
        type: 'FILTER_DATA',
        payload: data
    }
}

export { itemAddedToCart,itemRemovedToCart,addQuantity,removeQuantity,
    itemsSorting,searchItem,filterItem};

