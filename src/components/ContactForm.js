import InputField from "./InputField";
import { useEffect, useState } from "react";
import SelectField from "./SelecField";
import Messages from "./Messages"; 
import {ChevronRightIcon} from "@heroicons/react/solid";
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const [ values, setValues ] = useState({
        fullname: '',
        email: '',
        role: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_g3o9js7', 'template_ierioe9', values, 'GhV3SxY_PNAeU9Yeg')
        .then( _response => { 
            console.log('SUCCESS!!', _response);
            setValues({
                fullname:'',
                email:'',
                role:'',
                message:''
            });
            setStatus('SUCCESS');
        }, _error => {
            console.log('Failed...!!',_error);
        });
    }

    useEffect(() =>{
        if (status=='SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    },[status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
            {status && renderAlert()}
            <form onSubmit={handleSubmit}>
                <h3 className="text-gray-700 mb-7 text-xl font-semibold">Send us message</h3>
                <InputField value={values.fullname} handleChange={handleChange} label="Full Name" name="fullname" type="text" placeholder="edward elric..."/> 
                <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="******@example.com"/>
                <SelectField handleChange={handleChange} label="Role" name="role"/>
                <Messages value={values.message} handleChange={handleChange} label="Your message here..." name="message"/>
                <button type="submit" className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700
                px-4 py-2 focus:outline-none">
                    Send <ChevronRightIcon className="w-6 ml-2 float-right" /> 
                </button>
            </form>
        </div>
    );
};

const renderAlert = () =>(
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>Your message submitted succefully...</p>
    </div>
)

export default ContactForm;