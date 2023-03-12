

const Input = ({ placeholder, type, label, Id, error }) => {
    const getValue = (e) => {
        const value = e.target.value;
        return value;
    };

    return (
    <div>
        <label>{label}</label>
        <input>
        onChange={getValue}
        placeholder={placeholder}
        type={type}
        label={label}
        id={Id}
        error={error}
        </input>
    </div>
    );
}

export default Input;