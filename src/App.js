import React, {Component} from 'react';
import Education from './components/body/Education';
import GeneralInfo from './components/header/GeneralInfo';
import Profile from './components/header/Profile';
import Skills from './components/body/Skills';
import Experience from './components/body/Experience';
import "./styles/style.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            edit: false,
        }
    };

    edit = () => {
        this.setState({
            edit: (this.state.edit ? false : true),
        })
    };

    handleChange = (e) => {
        const id = e.target.id;
        console.log(e.target);
        if (this.props.edit){
            this.setState({
                [id]: e.target.value,
            });
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='cv'>
                    <div className='header'>
                        <GeneralInfo edit={this.state.edit}/>
                        <hr className='long-hr'></hr>
                        <Profile edit={this.state.edit}/>
                        <hr className='long-hr'></hr>
                    </div>
                    
                    <div className='body'>
                        <div className='body-left'>
                            <Education edit={this.state.edit}/>
                            <hr className='short-hr'></hr>
                            <div className='skills'>
                                <h3>Skills</h3>
                                <Skills handleChange={this.handleChange} name='professional' edit={this.state.edit}/>
                                <Skills handleChange={this.handleChange} name='technical' edit={this.state.edit}/>
                            </div>
                        </div>
                        <div className='body-right'>
                            <Experience handleChange={this.handleChange} edit={this.state.edit}/>
                        </div>
                    </div>
                </div>
                <span onClick={this.edit} className={"edit-btn material-symbols-outlined " + (this.state.edit ? "inactive" :  "")}>
                    edit_square
                </span>
                <span onClick={this.edit} className={"check-btn material-symbols-outlined " + (this.state.edit ? "" :  "inactive")}>
                    check_circle
                </span>
            </div>
        );
    }
}

export default App;