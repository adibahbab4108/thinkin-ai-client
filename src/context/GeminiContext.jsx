/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import runChat from "../config/geminiai.config";

export const GeminiCotext = createContext();

const GeminiContextProvider = ({ children }) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] =useState("");
    const [previousPrompt, setPreviousPrompt] =useState([])
    const [showResult, setShowResult]=useState(false)
    const [loading, setLoading] =useState(false)
    const [resultData, setResultData] =useState("")

    const onSent = async (prompt) => {
        await runChat(prompt)
    }
    const contextValue = {
        onSent,
        input,
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