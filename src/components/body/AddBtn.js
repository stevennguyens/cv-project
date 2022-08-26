import React from 'react';
import uniqid from "uniqid";

const AddBtn = (props) => {
    const {edit, onClick, list} = props;
    const lastIndex = list[list.length - 1];
    return (
        <button onClick={() => onClick(lastIndex)} className={edit ? 'add-btn' : 'inactive'}>add</button>
    );
}

export default AddBtn