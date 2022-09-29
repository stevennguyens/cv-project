import React, {useState} from 'react';

const Profile = ({edit}) => {
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt aperiam sint molestias consequatur tempora minima, assumenda ' +
    'veritatis dignissimos iure ex! Illo provident cum impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa placeat, modi magnam, perspiciatis deserunt ' +
    'aperiam sint molestias consequatur tempora minima, assumenda veritatis dignissimos iure ex! Illo provident cum impedit!');
    return (
        <div className='profile'>
            <h3>Profile</h3>
            <textarea onChange={(e) => setDescription(e.target.value)} maxLength={550} readOnly={!edit} id='description' placeholder='Profile Description' value={description}></textarea>
        </div>
    );
}

export default Profile