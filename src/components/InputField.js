import React from 'react';

const InputField = (props) => {
   
    const {handleChange,label,name,type,value} = props;
    return (
        <div className='mb-5'>
            <label className='text-gray-500 text-sm' htmlFor={name}>{label}</label>
            <input className='border-b-2 outline-none text-gray-700 w-full bg-gray-200 h-10 px-2' 
            type={type} name={name} onChange={handleChange} value={value} required/>
        </div>
    );
};

export default InputField;