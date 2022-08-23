import React, {Component} from 'react';
import uniqid from "uniqid";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skill: {
                name: '',
                id: uniqid(),
            },
            skills: ['Hello', 'Bye'],
        }
    }

    changeSkill = (e) => {
        const skill = 
        this.setState({
            skills: this.state.skills
        })
    }

    render() {  
        const { handleChange, edit } = this.props;  
        const { skill, skills } = this.state;
        return(
            <ul>
                {skills.map((s) => {
                    return (
                        <li className='skill' key={skill.id}><input id={skill.id} onChange={handleChange} maxLength={11} readOnly={!edit} type='text' placeholder='Skill' value={s}></input></li>
                    ) 
                    })
                }
            </ul>)}
}

export default List