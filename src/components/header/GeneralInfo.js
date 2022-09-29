import React, {useState} from 'react';

const GeneralInfo = ({edit}) => {
    const [name, setName] = useState('Steven Nguyen');
    const [title, setTitle] = useState('Software Engineer');
    const [phone, setPhone] = useState('310-703-7777');
    const [email, setEmail] = useState('stevennguyen@gmail.com');
    const [address, setAddress] = useState('123 Long Beach Blvd,\nLong Beach, CA');

    return (
        <div className='gen-info'>
            <div className='left'>
                <input onChange={(e) => setName(e.target.value)} maxLength={21} readOnly={!edit} type='text' id='name' placeholder='Name' value={name}></input>
                <input onChange={(e) => setTitle(e.target.value)} maxLength={35} readOnly={!edit} type='text' id='title' placeholder='Job Title' value={title}></input>
            </div>
            <div className='right'>
                <div className='phone'>
                    <input onChange={(e) => setPhone(e.target.value)} maxLength={12} readOnly={!edit} type='text' id='phone' placeholder='Phone' value={phone}></input>
                    <span className="material-symbols-outlined">
                        phone_iphone
                    </span>
                </div>
                <div className='email'>
                    <input onChange={(e) => setEmail(e.target.value)} maxLength={27} readOnly={!edit} type='text' id='email' placeholder='Email' value={email}></input>
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                </div>
                <div className='address'>
                <textarea onChange={(e) => setAddress(e.target.value)} maxLength={47} readOnly={!edit} id='address' placeholder='Address' value={address}></textarea>
                    <span className="material-symbols-outlined">
                        home_pin
                    </span>
                </div>
            </div>
        </div>
    );
}

export default GeneralInfo;