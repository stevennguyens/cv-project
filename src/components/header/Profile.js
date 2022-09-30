import React, {useState} from 'react';

const Profile = ({edit}) => {
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt aperiam sint molestias consequatur tempora minima, assumenda ' +
    'veritatis dignissimos iure ex! Illo provident cum impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt ' +
    'aperiam sint molestias consequatur tempora minima, assumenda veritatis dignissimos iure ex! Illo provident cum impedit!');

    const textAreaResize = (id) => {
        const textarea = document.getElementById(id);
        let height = textarea.dataset.height;
        let row = Math.ceil(textarea.value.length / 110);
        console.log(textarea.style.height)
        if (textarea.textContent.length > textarea.dataset.length) {
            textarea.style.height = (height.substring(0, height.length - 2) * (row ? row : 1)) + 'px';
        } else {
            textarea.style.height = height;
        }
    }

    return (
        <div className='profile'>
            <h3>Profile</h3>
            <textarea data-height='20px' data-length={50} onChange={(e) => {setDescription(e.target.value); textAreaResize(e.target.id)}} maxLength={550} readOnly={!edit} id='description' placeholder='Profile Description' value={description}></textarea>
        </div>
    );
}

export default Profile