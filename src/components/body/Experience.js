import React, {useEffect, useState} from 'react';
import List from '../List';
import uniqid from "uniqid";
import AddBtn from './AddBtn';

const Experience = ({edit}) => {
    const max = 3;
    const maxItems  = 3;

    const [experiences, setExperiences] = useState([{
        'exp-title': 'Internship',
        'exp-company': 'Disney - 2023',
        'exp-description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dignissimos numquam harum enim repellat deleniti unde corporis veritatis est omnis, voluptates, illove liss sdf wef eras nqewrwjkeqw kj',
        id: uniqid()
    }])

    const [isMax, setMax] = useState(false)

    const handleChange = (e) => {
        const name = getClassName(e);

        setExperiences(experiences.map(exp => {
            if (exp.id === e.target.id) {
                exp[name] = e.target.value;
            }
            return exp;
        }))
    }

    const getClassName = (e) => {
        const arr = e.target.className.split(' ');
        return arr.find(e => e.includes('exp'));
    }
    
    const textAreaResize = (id) => {
        const parent = document.getElementById(id);
        const textarea = parent.getElementsByTagName('textarea')[0];
        let height = textarea.dataset.height;
        console.log(height);
        let row = Math.ceil(textarea.value.length / 70);
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * row) + 'px';
        } else {
            textarea.style.height = height;
        };
    }

    const onClick = (e) => {
        if (experiences.length < max) {
            setExperiences(experiences.concat({
                'exp-title': '',
                'exp-company': '',
                'exp-description': '',
                id: uniqid(),
            }))
            setMax(false)
        }

        if (experiences.length === max - 1) {
            setMax(true)
        }
    }

    useEffect = (() => {
        const lastItem = experiences[experiences.length - 1]
        const id = lastItem.id;
        console.log('useEffect')
        textAreaResize(id);
    }, [experiences]);

    return (
        <div className='experience'>
            <h3>Experience</h3>
            {experiences.map(exp => {
                return (
                    <div id={exp.id} key={exp.id} className='job'>
                        <input onChange={handleChange} maxLength={50} readOnly={!edit} className='lrg-text exp-title' type='text' id={exp.id} placeholder='Experience Title' value={exp['exp-title']}></input>
                        <input onChange={handleChange} maxLength={40} readOnly={!edit} className='med-text exp-company' type='text' id={exp.id} placeholder='Company - Year' value={exp['exp-company']}></input>
                        <textarea data-height='20px' data-length={50} maxLength={200} onChange={e => {handleChange(e); textAreaResize(e.target.id)}} readOnly={!edit} className='reg-text exp-description' id={exp.id} placeholder='Internship Description' value={exp['exp-description']}></textarea>
                        <List maxItems={maxItems} edit={edit}/>
                    </div>
                )
            })}
            <AddBtn onClick={onClick} edit={edit} list={experiences} isMax={isMax}/>
        </div>
    );
} 

export default Experience