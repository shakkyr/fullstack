import react, {useState , useEffect} from "react";
import axios from "axios";


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results , setResults] = useState([]);

  
  
    useEffect(() => {
      const search = async () => {
        const {data} = await axios.ge('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          },
        });
        setResults(data.query.search);
      };
      if (term){
      search();
      }
    }, [term]);

    const renderedResults = results.map((result) =>{
        return (
        <div key={result.pageid} className='item'>
            <div className= 'right floated content'>
             <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>   
            </div>
            <div className='content'>
                <div className='header'>
                    <h3>{result.title}</h3>
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
            </div>
        </div>
        )
    });

    return (
    <div>
        <div className="ui form">
            <div className='field'>
                <label>Enter Search Term</label>
                <input 
                    className='input' 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                 />
            </div>
        </div>
        {renderedResults}
    </div>
    )
}

export default Search;