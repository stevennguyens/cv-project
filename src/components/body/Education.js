import React, {Component} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);

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
        console.log(textarea.style)
        let height = textarea.style.height;
        console.log(height);
        // if (textarea.textContent.length >= textarea.dataset.length) {
        //     // textarea.style.height = (height.substring(0, height.length - 2) * 2) + 'px';
        //     // console.log(((height.substring(0, height.length - 2))));
        // } else {
        //     textarea.style.height = height;
        // };
    }

    render() {
        return (
            <div className='edu-info'>
                <h3>Education</h3>
                <div className='degree'>
                    <textarea data-length={23} maxLength={40} onChange={e => {this.handleChange(e); this.textAreaResize(e)}} readOnly={!this.props.edit} className='lrg-text' id='degree' placeholder='Degree' value={this.state.degree}></textarea>
                    <textarea onChange={this.handleChange} readOnly={!this.props.edit} className='med-text' id='university' placeholder='University' value={this.state.university}></textarea>
                    <input onChange={this.handleChange} readOnly={!this.props.edit} className='reg-text' type='text' id='year' placeholder='Start Year - End Year' value={this.state.year}></input>
                </div>
            </div>
        );
    }
}

export default Education