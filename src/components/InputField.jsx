const InputField = ({ type, placeholder, value, onChange }) => {
    return (
      <div className="form-group">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  };
  
  export default InputField;
  