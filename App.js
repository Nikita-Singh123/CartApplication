import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
// import Filter from './Component/Filter';
// import Sort from './Component/Sort';
import Search from './Component/Search';
import CartIcon from './Component/CartIcon';
import ItemList from './Component/ItemList';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';



// actions
import { itemAddedToCart } from './Actions/index';
import { connect } from 'react-redux';



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  componentDidMount() {
    console.log("Mount in app",this.props)
  }
  
  render(){
    return (
    <div className="App">
    <div className="container-fluid">       
    <Router>
        <Header />
         
        <>
            <Route exact path='/' component={ItemList} />
            <Route path='/Search' component={Search} />
            <Route path='/CartIcon' component={CartIcon} />
        </>
      </Router>
    </div>
   
    
 </div>
  );
  }
  
}


const mapDispatchToProps = {
  itemAddedToCart 
};

const mapStateToProps = (state)=>{
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
