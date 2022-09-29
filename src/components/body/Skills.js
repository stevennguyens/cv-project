import React from 'react';
import List from '../List';

const Skills = ({name, edit}) => {
    const maxItems = 5;
    
    return (
            <div className={name}>
                <h5>{name[0].toUpperCase()+name.substring(1)}</h5>
                <List maxItems={maxItems} edit={edit}/>
            </div>
    );
}

export default Skills