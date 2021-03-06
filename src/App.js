const React = require("react");
const Accordion = require("./components/Accordion");
const Search = require("./components/Search");
const Dropdown = require("./components/Dropdown");
const Translate = require('./components/Translate')
const Route = require('./components/Route')
const Header = require('./components/Header')

const items = [
    {
        title: "What is react?",
        content: "React is a front end framework",
    },
    {
        title: "This is the second one",
        content: "Content for second one",
    },
    {
        title: "How do you use react?",
        content: "This is the third one",
    },
];

const options = [
    {
        label: "The color red",
        value: "red",
    },
    {
        label: "A shade of blue",
        value: "blue",
    },
    {
        label: "Shade Black",
        value: "black",
    },
];

const App = () => {
    const [selected, setSelected] = React.useState(options[0]);

    const [showDropdown, setShowDropdown] = React.useState(true);

    return (
        <div>
            <Header></Header>
            <Route path="/translate">
                <Translate></Translate>
            </Route>
            <Route path="/list">
                <Search></Search>
            </Route>
            <Route path="/">
                <Accordion items={items}></Accordion>
            </Route>
        </div>
    );
};



module.exports = App;
