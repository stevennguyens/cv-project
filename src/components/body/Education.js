import React, {Component} from 'react';

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
        const styles = getComputedStyle(this.ref.current);
        const textarea = document.getElementById(e.target.id);
        let height = textarea.dataset.height;
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * 2) + 'px';
        } else {
            textarea.style.height = height;
        };
        console.log(textarea.textContent.length);
    }

    render() {
        return (
            <div className='edu-info'>
                <h3>Education</h3>
                <div className='degree'>
                    <textarea ref={this.ref} data-height='17px' data-length={24} maxLength={37} onChange={e => {this.handleChange(e); this.textAreaResize(e)}} readOnly={!this.props.edit} className='lrg-text' id='degree' placeholder='Degree' value={this.state.degree}></textarea>
                    <textarea ref={this.ref} data-height='15px' data-length={30} maxLength={37} onChange={e => {this.handleChange(e); this.textAreaResize(e)}} readOnly={!this.props.edit} className='med-text' id='university' placeholder='University' value={this.state.university}></textarea>
                    <input onChange={this.handleChange} maxLength={11} readOnly={!this.props.edit} className='reg-text' type='text' id='year' placeholder='Start Year - End Year' value={this.state.year}></input>
                </div>
            </div>
        );
    }
}

export default Education