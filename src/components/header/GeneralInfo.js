import React, {Component} from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Steven Nguyen',
            title: 'Software Engineer',
            phone: '310-703-7777',
            email: 'stevennguyen@gmail.com',
            address: '123 Long Beach Blvd,\nLong Beach, CA',
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

    render() {
        return (
            <div className='gen-info'>
                <div className='left'>
                    <input onChange={this.handleChange} readOnly={!this.props.edit} type='text' id='name' placeholder='Name' value={this.state.name}></input>
                    <input onChange={this.handleChange} readOnly={!this.props.edit} type='text' id='title' placeholder='Job Title' value={this.state.title}></input>
                </div>
                <div className='right'>
                    <div className='phone'>
                        <input onChange={this.handleChange} readOnly={!this.props.edit} type='text' id='phone' placeholder='Phone' value={this.state.phone}></input>
                        <span className="material-symbols-outlined">
                            phone_iphone
                        </span>
                    </div>
                    <div className='email'>
                        <input onChange={this.handleChange} readOnly={!this.props.edit} type='text' id='email' placeholder='Email' value={this.state.email}></input>
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                    </div>
                    <div className='address'>
                    <textarea onChange={this.handleChange} readOnly={!this.props.edit} id='address' placeholder='Address' value={this.state.address}></textarea>
                        <span className="material-symbols-outlined">
                            home_pin
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInfo;