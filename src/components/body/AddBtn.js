import React from 'react';
import uniqid from "uniqid";

const AddBtn = (props) => {
    const {edit, onClick, list, isMax} = props;
    
    return (
        <button onClick={() => {onClick()}} className={edit && !isMax ? 'add-btn' : 'inactive'}>add</button>
    );
}

export default AddBtn