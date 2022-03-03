
const Messages = (props) => {
    const {handleChange,label, name, value } = props;

    return (
        <div className="mb-5">
            <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
            <textarea onChange={handleChange} value={value} rows="4" name={name} className="w-full border-b-2 outline-none p-2 bg-gray-200"></textarea>
        </div>
    );
};

export default Messages;