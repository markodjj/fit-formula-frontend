

const CalculatorInput = ({name, inputData, handleChange}) =>{

    return (
        <li className="input-group">
            <label>{inputData.label}</label>
            {inputData.type === 'number' ? (
                <input name={name} value={inputData[name]} type="number" onChange={handleChange} />
            ): inputData.type === 'selection' && (
                <select name={name} value={inputData[name]} onChange={handleChange}>
                    {inputData.options.map((item, index)=>(
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            )}
        </li>
    )
}

export default CalculatorInput;