/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import runChat from "../config/geminiai.config";

export const GeminiCotext = createContext();

const GeminiContextProvider = ({ children }) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPera = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }
    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        const response = await runChat(input)
        let responseArray = response.split("**")
        let newResponse;
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 == 1) newResponse += responseArray[i];
            else newResponse += "<b>" + responseArray[i] + "</b>"
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        // let newResponseArray= newResponse2.split(" ");
        setResultData(newResponse2)
        setRecentPrompt(input)
        setLoading(false)
        setInput("")
    }
    const contextValue = {
        onSent,
        setInput,
        previousPrompt,
        setPreviousPrompt,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        loading, setLoading
    }
    return (
        <GeminiCotext.Provider value={contextValue}>
            {children}
        </GeminiCotext.Provider>
    )
}
export default GeminiContextProvider