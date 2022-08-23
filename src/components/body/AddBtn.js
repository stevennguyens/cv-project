import React from 'react';

const AddBtn = (props) => {
    const {edit} = props;

    const onClick = () => {
        
    }

    return(
        <button onClick={onClick} className={edit ? 'add-btn' : 'inactive'}>add</button>
    );
}

export default AddBtn