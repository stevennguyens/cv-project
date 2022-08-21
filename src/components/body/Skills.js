import React, {Component} from 'react';
import List from '../List'
class Skills extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='skills'>
                <h3>Skills</h3>
                <div className='professional'>
                    <h5>Professional</h5>
                    <List />
                </div>
                <div className='technical'>
                     <h5>Technical</h5>
                     <List />
                </div>
            </div>
        );
    }
}

export default Skills