const React = require('react');
const Link = require('./Link')

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/list" className="item">
                List
            </Link>
        </div>
    );
}

module.exports = Header;