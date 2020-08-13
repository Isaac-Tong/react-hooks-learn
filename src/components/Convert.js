const React = require('react');
const axios = require('axios');

const Convert = (props) => {
    React.useEffect(() => {
    }, [props.language, props.text]);
    return (
        <div>
            {props.text}
        </div>
    );
}

module.exports = Convert;