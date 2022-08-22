import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt aperiam sint molestias consequatur tempora minima, assumenda ' +
                        'veritatis dignissimos iure ex! Illo provident cum impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt ' +
                        'aperiam sint molestias consequatur tempora minima, assumenda veritatis dignissimos iure ex! Illo provident cum impedit!'
        }
    }

    handleChange = (e) => {
        const id = e.target.id;
        console.log(this.props.edit);
        if (this.props.edit){
            this.setState({
                [id]: e.target.value,
            });
        }
    }

    render() {
        return (
            <div className='profile'>
                <h3>Profile</h3>
                <textarea onChange={this.handleChange} maxLength={550} readOnly={!this.props.edit} id='description' placeholder='Profile Description' value={this.state.description}></textarea>
            </div>
        );
    }
}

export default Profile