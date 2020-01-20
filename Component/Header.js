import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// actions
import { searchItem} from '../Actions/index';
import { connect } from 'react-redux';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Header(props) {  
  useEffect(() => {
   console.log("Header",props.itemInCart.length);
  },[props.itemInCart]);

  const searchData = () =>{
    var x =  document.getElementById("searchField").value; 
    props.searchItem(x);
  }
  
 
    return (
      <div className="row">
    
        <nav className="custom-navbar">
            <div><FontAwesomeIcon icon={faStar} style={{fontSize:"30px",color:"#ffc107"}} /></div>
            <div>
              <ul className="navbar-right" style={{listStyle:"none"}}>
                <li className="main">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here" id="searchField"/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button" onClick={()=>searchData()}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="">
                    <Link to={ '/CartIcon'} className="nav-link linkcolor" style={{color: "white"}}>
                    <FontAwesomeIcon icon={faCartPlus} style={{fontSize:"20px"}}/>
                    <span>{props.itemInCart.length}</span>
                    </Link>
                </li>
              </ul>
            </div>
        </nav>
    
</div>
    );
}


const mapDispatchToProps = {
  searchItem 
};

const mapStateToProps = (state)=>{
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default ItemList