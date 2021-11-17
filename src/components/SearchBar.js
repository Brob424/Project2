import React, { useState} from "react";
const SearchBar = () => {
    const [query, setQuery] = useState(' ');
    const [info, setInfo] = useState({})
    const getMedication = () => {


    
    fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=UxVYQb0whi7tcefIKHwPhINOixfCFPc492vBFzYY&search=products.brand_name:${query}&limit=1`)
      .then(res =>res.json())
      .then(data =>  {
          console.log(data)
          setInfo(data.results[0].openfda);

    });

      };

      

      const onChange = (e) => {
            setQuery(e.target.value);
      };

      const onSubmit = (e) => {
          e.preventDefault();
            getMedication();
      
    };


      

    return(
        <>
        <form className="searchBox" onSubmit={onSubmit}>
            <input type="text" placeholder="Search Drug" autoComplete='on' onChange={onChange}/>
            <button>Search</button>
        </form>
        {info.brand_name ? <p>{info.brand_name[0]}</p> : ' '}
       </>

    )
}

export default SearchBar;