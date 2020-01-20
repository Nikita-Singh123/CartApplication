import React, {useState} from 'react';
import InputRange from 'react-input-range';
// actions
import { filterItem } from '../Actions/index';
import { connect } from 'react-redux';

function Filter(props) {
  const [value, setValue] = useState({ min: 10, max: 1000 });

    return (
        <div className="text-center">            
            <div className="m-4">
            <InputRange 
            maxValue={1000}
            minValue={10}
            value={value}
            onChange={value => setValue(value)} />
            </div>            
            <button className="btn btn-primary rounded-pill" onClick={()=>props.filterItem(value)}>Apply</button>
        </div>
    )
}

const mapDispatchToProps = {
  filterItem 
};

const mapStateToProps = (state)=>{
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

