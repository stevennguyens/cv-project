import React, { useState } from "react";
import Education from './components/body/Education';
import GeneralInfo from './components/header/GeneralInfo';
import Profile from './components/header/Profile';
import Skills from './components/body/Skills';
import Experience from './components/body/Experience';
import "./styles/style.css";

const App = () => {
    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        if (edit) {
            setEdit(false)
        } else {
            setEdit(true)
        }
    }

    return (
        <div className='container'>
            <div className='cv'>
                <div className='header'>
                    <GeneralInfo edit={edit}/>
                    <hr className='long-hr'></hr>
                    <Profile edit={edit}/>
                    <hr className='long-hr'></hr>
                </div>
                
                <div className='body'>
                    <div className='body-left'>
                        <Education edit={edit}/>
                        <hr className='short-hr'></hr>
                        <div className='skills'>
                            <h3>Skills</h3>
                            <Skills name='professional' edit={edit}/>
                            <Skills name='technical' edit={edit}/>
                        </div>
                    </div>
                    <div className='body-right'>
                        <Experience edit={edit}/>
                    </div>
                </div>
            </div>
            <span onClick={toggleEdit} className={"edit-btn material-symbols-outlined " + (edit ? "inactive" :  "")}>
                edit_square
            </span>
            <span onClick={toggleEdit} className={"check-btn material-symbols-outlined " + (edit ? "" :  "inactive")}>
                check_circle
            </span>
        </div>
    );
}

export default App;