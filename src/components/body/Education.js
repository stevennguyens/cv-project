import React, {useState} from 'react';
import Degree from './Degree';
import uniqid from 'uniqid';
import AddBtn from './AddBtn';

const Education = ({edit}) => {
    const max = 2;
    const [educations, setEducations] = useState([{
        degree: 'Computer Science B.S.',
        university: 'Long Beach State University',
        year: '2019 - 2023',
        id: uniqid()
    }]);

    const [isMax, setMax] = useState(false)

    const onClick = () => {
        if (educations.length < max) {
            setEducations(educations.concat({
                degree: '',
                university: '',
                year: '',
                id: uniqid()
            }))
            setMax(false)
        }

        if (educations.length === max - 1) {
            setMax(true)
        }
    }

    return (
        <div className='edu-info'>
            <h3>Education</h3>
            {educations.map(edu => {
                return <Degree key={edu.id} id={edu.id} edit={edit} edu={edu} educations={educations} setEducations={setEducations}/>})}
            <AddBtn onClick={onClick} edit={edit} list={educations} isMax={isMax}/>
        </div>
    );

}

export default Education