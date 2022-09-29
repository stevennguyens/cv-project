import React from 'react';

const AddBtn = ({edit, onClick, isMax}) => {
    return (
        <button onClick={() => {onClick()}} className={edit && !isMax ? 'add-btn' : 'inactive'}>add</button>
    );
}

export default AddBtn