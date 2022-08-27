import React, {Component} from 'react';
import List from '../List';
import uniqid from "uniqid";
import AddBtn from './AddBtn';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.max = 3;
        this.maxItems = 3;

        this.ref = React.createRef();
        
        this.state = {
            experience: {
                'exp-title': '',
                'exp-company': '',
                'exp-description': '',
                id: uniqid(),
            },

            experiences: [{
                'exp-title': 'Internship',
                'exp-company': 'Disney - 2023',
                'exp-description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dignissimos numquam harum enim repellat deleniti unde corporis veritatis est omnis, voluptates, illo velit neque? Laudantium eos exercitationem a optio provident.',
                id: uniqid(),
            }],

            isMax: false,
        }
    }

    handleChange = (e) => {
        const name = this.getClassName(e);

        this.setState({
            experiences: this.state.experiences.map(exp => {
                if (exp.id === e.target.id) {
                    exp[name] = e.target.value;
                }
                return exp;
            })
        })
    }

    getClassName = (e) => {
        const arr = e.target.className.split(' ');
        return arr.find(e => e.includes('exp'));
    }
    
    textAreaResize = (id) => {
        const parent = document.getElementById(id);
        const textarea = parent.getElementsByTagName('textarea')[0];
        let height = textarea.dataset.height;
        let row = Math.ceil(textarea.value.length / 70);
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * row) + 'px';
        } else {
            textarea.style.height = height;
        };
    }

    onClick = (e) => {
        if (this.state.experiences.length < this.max) {
            this.setState({
                experiences: this.state.experiences.concat({
                    'exp-title': '',
                    'exp-company': '',
                    'exp-description': '',
                    id: uniqid(),
                }),
                isMax: false
            }, () => {
                const lastItem = this.state.experiences[this.state.experiences.length - 1]
                const id = lastItem.id;
                this.textAreaResize(id);
            })
        }

        if (this.state.experiences.length === this.max - 1) {
            this.setState({
                isMax: true
            })
        }
    }

    render() {
        let { experiences, isMax } = this.state;
        let { edit } = this.props;
        return (
            <div className='experience'>
                <h3>Experience</h3>
                {experiences.map(exp => {
                    return (
                        <div id={exp.id} key={exp.id} className='job'>
                            <input onChange={this.handleChange} maxLength={50} readOnly={!edit} className='lrg-text exp-title' type='text' id={exp.id} placeholder='Experience Title' value={exp['exp-title']}></input>
                            <input onChange={this.handleChange} maxLength={40} readOnly={!edit} className='med-text exp-company' type='text' id={exp.id} placeholder='Company - Year' value={exp['exp-company']}></input>
                            <textarea ref={this.ref} data-height='20px' data-length={50} maxLength={200} onChange={e => {this.handleChange(e); this.textAreaResize(e.target.id)}} readOnly={!edit} className='reg-text exp-description' id={exp.id} placeholder='Internship Description' value={exp['exp-description']}></textarea>
                            <List maxItems={this.maxItems} edit={edit}/>
                        </div>
                    )
                })}
                <AddBtn onClick={this.onClick} edit={edit} list={experiences} isMax={isMax}/>
            </div>
        );
    }
} 

export default Experience