import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState(""); 

    const onChangeF = (e) => {
        setTextValue(e.target.value)
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChangeF} />
            <br />
            <p>{txtValue}</p>
        </div>

    )
}

export default Input;
