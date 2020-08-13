const React = require("react");



const Accordion = (props) => {

    //Array destructuring
    //setActiveIndex is a function that we are going to call to update state. 
    //activeIndex is the state that we want to keep track 
    const [activeIndex, setActiveIndex] = React.useState(null);
    //HOW IT WORKS
    //1. Initial value of null is assigned to activeIndex
    //2. Use set active index to update the state of activeIndex
    //3. To update the state of activeIndex, do setActiveIndex('Change in here');


    const onTitleClick = (index) => {
        setActiveIndex(index)
    }


    const renderedItems = [];
    for (let i = 0; i < props.items.length; i++) {
        let active = '';
        if(i === activeIndex){
            active = 'active';
        }

        renderedItems.push(
            <React.Fragment key={props.items[i].title}>
                <div className={`title ${active}`} onClick={() => {onTitleClick(i)}}>
                    <i className="dropdown icon"></i>
                    {props.items[i].title}
                </div>
                <div className={`content ${active}`}>
                    <p>{props.items[i].content}</p>
                </div>
            </React.Fragment>
        );
    }

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

module.exports = Accordion;
