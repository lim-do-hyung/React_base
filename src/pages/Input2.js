import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name : "",
        email: "",
        tel: ""
    }); 

    const  onChangeF = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value
        })

    }
    

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={inputs.name} onChange={onChangeF} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={inputs.email} onChange={onChangeF} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" id="tel" value={inputs.tel} onChange={onChangeF} />
            </div>
            <br />
            <p>{inputs.name}</p>
            <p>{inputs.email}</p>
            <p>{inputs.tel}</p>
        </div>
    )
}

export default Input2;
