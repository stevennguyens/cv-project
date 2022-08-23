import React, {Component} from 'react';
import List from '../List';

class Skills extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {handleChange, name, edit} = this.props;
        return (
                <div className={name}>
                    <h5>{name[0].toUpperCase()+name.substring(1)}</h5>
                    <List handleChange={handleChange} edit={edit}/>
                </div>
        );
    }
}

export default Skills