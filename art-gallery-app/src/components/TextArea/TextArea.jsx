
const TextArea = ({ placeholder, label, Id, error }) => {
    const getValue = (e) => {
        const value = e.target.value;
        return value;
      };

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