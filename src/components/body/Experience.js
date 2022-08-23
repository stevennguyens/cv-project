import React, {Component} from 'react';
import List from '../List';
import uniqid from "uniqid";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            skill: {
                name: '',
                id: uniqid(),
            },
            skills: [],
        }
    }

    render() {
        let { skill, skills } = this.state;
        return (
            <div className='experience'>
                <h3>Experience</h3>
                <div className='job'>
                    <h5>Internship</h5>
                    <p className='company'>Disney - 2023</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dignissimos numquam harum enim repellat deleniti unde corporis veritatis est omnis, voluptates, illo velit neque? Laudantium eos exercitationem a optio provident.</p>
                    <List skill={skill} skills={skills}/>
                </div>
            </div>
        );
    }
} 

export default Experience