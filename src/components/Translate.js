const React = require("react");
const Dropdown = require("./Dropdown");
const Convert = require('./Convert');


const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

const Translate = () => {
    const [language, setLanguage] = React.useState(options[0]);
    const [text, setText] = React.useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Insert Text</label>
                    <input
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    ></input>
                </div>
            </div>

            <Dropdown
                selected={language}
                setSelected={setLanguage}
                label="language"
                options={options}
            ></Dropdown>
            <h1>Output:</h1>
            <Convert language={language.label} text={text}></Convert>
        </div>
    );
};
module.exports = Translate;
