
const TextArea = ({ placeholder, label, Id, error, onChange }) => {
    const getValue = (e) => {
        const value = e.target.value;
        onChange(value);
    }

    return (
    <div>
        <label>{label}</label>
      <textarea
        onChange={getValue}
        name={label}
        id={Id}
        placeholder={placeholder}
        error={error}
      ></textarea>
    </div>)
}

export default TextArea;