const React = require('react');

const Link = (props) => {
    const onClick = (event) => {

        //Prevent full page refresh
        event.preventDefault();

        //Change url without refreshing the page
        window.history.pushState({}, '', props.href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
    <a onClick={(onClick)}className={props.className} href={props.href}>{props.children}</a>
    );
}

module.exports = Link;