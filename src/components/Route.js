const React = require('react');

const Route = (props) => {

    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    React.useEffect(() => {

        window.addEventListener('popstate', () => {
            setCurrentPath(window.location.pathname)
        })
        
        return () => {
            window.removeEventListener('popstate')
        }

    }, []);

    if(currentPath=== props.path){
        return props.children
    }else{

        //Returning null causes React not to render anything
        return null;
    }


}

module.exports = Route;