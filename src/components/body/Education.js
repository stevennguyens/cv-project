import React, {Component} from 'react';
import Degree from './Degree';

class Education extends Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.state = {
            degree: 'Computer Science B.S.',
            university: 'Long Beach State University',
            year: '2019 - 2023'
        }
    }

    handleChange = (e) => {
        const id = e.target.id;
        if (this.props.edit){
            this.setState({
                [id]: e.target.value,
            });
        }
    }

    textAreaResize = (e) => {
        const textarea = document.getElementById(e.target.id);
        let height = textarea.dataset.height;
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * 2) + 'px';
        } else {
            textarea.style.height = height;
        };
    }

    render() {
        return (
            <div className='edu-info'>
                <h3>Education</h3>
                <Degree ref={this.ref} state={this.state} handleChange={this.handleChange} textAreaResize={this.textAreaResize} edit={this.props.edit}/>
            </div>
        );
    }
}

export default Education