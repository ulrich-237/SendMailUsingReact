
const SelectField = (props) => {
    const {label,handleChange,name} = props;
    return (
        <div className="mb-5">
            <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
            <select onChange={handleChange} defaultValue="role" name={name} className="w-full border-b-2 
            py-2 outline-none">
                <option value="role" disabled>Choose Role</option>
                <option value="ed" className="py-1">ulrich</option>
                <option value="victoria" className="py-1">victoria</option>
                <option value="fieras" className="py-1">fieras</option>
                <option value="alan" className="py-1">alan</option>
            </select>
        </div>
    );
};

export default SelectField;