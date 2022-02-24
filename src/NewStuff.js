import { useState } from "react";


const NewStuff = () => {

    let data = "This is my data"
    let inputData;

    let [originalData, setData] = useState(data)
    let [originalInputData,setInputData] = useState()

    const buttonHandler =() => {
        setData("You have clicked the button")
    }

    function inputHandler(e) {
        console.log(e.target.value)
        inputData = e.target.value
    }

    function addInputHandler() {
        setInputData(inputData)
    }

    let [originalInputDataTwo,setInputDataTwo] = useState()

    function inputHandlerTwo(e) {
        setInputDataTwo(e.target.value)
    }
    return(
        <div>
            <div>
                {originalData}
            </div>
            <button onClick={buttonHandler}>Press Me!</button>
            <div></div>
            <input onInput={inputHandler}/>
            <button onClick={addInputHandler}>Add input to scene</button>
            <div>{originalInputData}</div>
            <div></div>
            <input onInput={inputHandlerTwo}/>
            <div>{originalInputDataTwo}</div>

        </div>
    )
}

export default NewStuff;