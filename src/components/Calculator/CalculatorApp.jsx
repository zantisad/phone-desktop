
    import { useState } from "react";
import Button from "./Button";
    import { Record } from "./Record";
import { Result } from "postcss";

    export const CalculatorApp = (uptadeRecord) => {
    const buttons = [
        ["C", "del", "%", "="],
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        [".", "0", "+/-", "+"],
    ];

    const [screen, setScreen] = useState("0");
    const [lastOperation, setLastOperation] = useState("");

    // Función para manejar clics de botones
    const handleClick = (value) => {
        if (
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            ".",
            "/",
            "*",
            "+",
            "-",
            "=",
            "C",

        ].includes(value)
        ) {
            if (screen === "0") {
                if (value === "C") {
                    return
                }
            }
        if (screen === "0" || screen === "Error") {
            setScreen(value);
            return;
        } else if (value === "=") {
            try {
                const result = eval(screen);
                const shortResult = result.toString().slice(0, 6);
                setScreen(shortResult);  
                setLastOperation(screen);          
            } catch (error) {
            setScreen("Error");
            }
        } else if (value === "C") {
            setScreen("0");
        } else if (screen.length < 9) {
            const result = screen + value;
            setScreen(result)
        } else if (value === "%") {
        
        } else {

        }
        }
    };

    return (
        <div className="calculator p-6 flex justify-center gap-6 text-center flex-col h-full w-full rounded-[2rem]">
        <div className="screen overflow-hidden flex-col flex justify-end text-white rounded-[1rem]">
            <div className="record">
            <Record lastOperation={lastOperation}/>
            </div>
            <div className="result text-8xl flex justify-end pe-4">
                {screen}
            </div>
        </div>

        <div className="buttons flex flex-col gap-3">
            {buttons.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row flex justify-between gap-3">
                {row.map((btn, btnIndex) => (
                <Button key={btnIndex} onClick={handleClick} value={btn}>
                    {btn}
                </Button>
                ))}
            </div>
            ))}
        </div>
        </div>
    );
    };
