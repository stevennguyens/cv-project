import React from 'react';

const Degree = React.forwardRef((props, ref) => {
    return(
        <div className='degree'>
            <textarea ref={ref} data-height='17px' data-length={24} maxLength={37} onChange={e => {props.handleChange(e); props.textAreaResize(e)}} readOnly={!props.edit} className='lrg-text' id='degree' placeholder='Degree' value={props.state.degree}></textarea>
            <textarea ref={ref} data-height='15px' data-length={30} maxLength={37} onChange={e => {props.handleChange(e); props.textAreaResize(e)}} readOnly={!props.edit} className='med-text' id='university' placeholder='University' value={props.state.university}></textarea>
            <input onChange={props.handleChange} maxLength={11} readOnly={!props.edit} className='reg-text' type='text' id='year' placeholder='Start Year - End Year' value={props.state.year}></input>
        </div>
    );
});

export default Degree