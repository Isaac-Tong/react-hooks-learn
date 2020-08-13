const React = require("react");
const { render } = require("@testing-library/react");

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const ref = React.useRef();

    //Setup manual event listener upon first time component is rendered
    React.useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setIsOpen(false);
        };
        document.body.addEventListener("click", onBodyClick);

        //Called when Dropdown is removed from the DOM
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = props.options.map((option) => {
        if (option.value === props.selected.value) {
            //Null in React means don't render anything
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    props.setSelected(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{`Select a ${props.label}`}</label>
                <div
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={`ui selection dropdown ${
                        isOpen ? `visible active` : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div
                        className={`menu ${isOpen ? "visible transition" : ""}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Dropdown;
