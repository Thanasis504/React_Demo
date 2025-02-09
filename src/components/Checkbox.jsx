const Checkbox = ({ id, label }) => {
    return (
      <div className="custom-control custom-checkbox my-4">
        <input type="checkbox" className="custom-control-input" id={id} required />
        <label className="custom-control-label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  };
  
  export default Checkbox;
  