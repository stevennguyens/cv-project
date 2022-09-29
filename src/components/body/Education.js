import React from 'react';
import Degree from './Degree';

const Education = ({edit}) => {
    return (
        <div className='edu-info'>
            <h3>Education</h3>
            <Degree edit={edit}/>
        </div>
    );

}

export default Education