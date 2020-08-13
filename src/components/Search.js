const React = require("react");
const axios = require("axios");

const Search = () => {
    const [term, setTerm] = React.useState("");
    const [results, setResults] = React.useState([]);
    //Second argument of useEffect determines the action that cause callback to happen

    // [] = Run at initial render
    // nothing = Run at initial render and run after every rerender
    // [data, data ...] = Run at initial render & run after every rerender if data has changed since last rerender
    React.useEffect(() => {
        const searchTerms = async () => {
            const response = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                }
            );
            setResults(response.data.query.search);
        };

        //Check to see if its the first time that the component loaded
        if(term && !results.length){
            searchTerms();
        }else{
            const timeoutId = setTimeout(() => {
                //Check if term state is defined
                if (term) {
                    searchTerms();
                }
            }, 100);
    
            //Runs FIRST on the next time useEffect runs.
            return () => {
                clearTimeout(timeoutId);   
            }
        }
        
        
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="title">
                        <h1>{result.title}</h1>
                    </div>
                    <div className="snippet">
                        <span
                            dangerouslySetInnerHTML={{ __html: result.snippet }}
                        ></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(event) => {
                            setTerm(event.target.value);
                        }}
                    ></input>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

module.exports = Search;
