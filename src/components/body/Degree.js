import React, {useState} from 'react';

const Degree = ({degreeDefault, universityDefault, yearDefault, edit}) => {
    const [degree, setDegree] = useState(degreeDefault);
    const [university, setUniversity] = useState(universityDefault);
    const [year, setYear] = useState(yearDefault);

    const textAreaResize = (e) => {
        const textarea = document.getElementById(e.target.id);
        let height = textarea.dataset.height;
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * 2) + 'px';
        } else {
            textarea.style.height = height;
        };
    }

    return(
        <div className='degree'>
            <textarea data-height='17px' data-length={24} maxLength={37} onChange={e => {setDegree(e.target.value); textAreaResize(e)}} readOnly={!edit} className='lrg-text' id='degree' placeholder='Degree' value={degree}></textarea>
            <textarea data-height='15px' data-length={30} maxLength={37} onChange={e => {setUniversity(e.target.value); textAreaResize(e)}} readOnly={!edit} className='med-text' id='university' placeholder='University' value={university}></textarea>
            <input onChange={(e) => setYear(e.target.value)} maxLength={11} readOnly={!edit} className='reg-text' type='text' id='year' placeholder='Start Year - End Year' value={year}></input>
        </div>
    );
}

export default Degree