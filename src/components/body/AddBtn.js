import React from 'react';
import uniqid from "uniqid";

const AddBtn = (props) => {
    const {edit, onClick} = props;

    return (
        <button onClick={onClick} className={edit ? 'add-btn' : 'inactive'}>add</button>
    );
}

export default AddBtn