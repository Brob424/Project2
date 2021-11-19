import React, { useState } from "react";
const SearchBar = () => {
    const [query, setQuery] = useState(' ');
    const [info, setInfo] = useState({})
    
    const getMedication = () => {

    fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=UxVYQb0whi7tcefIKHwPhINOixfCFPc492vBFzYY&search=products.brand_name:${query}&limit=1`)
      .then(res =>res.json())
      .then(data =>  {
          console.log(data)
          setInfo(data.results[0].openfda)

    }).catch(err => console.log(err)) 

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
        <div className="list-items">

       {info.brand_name ? <h2 className='title'><h3 className="tag">Drug Name:</h3>{info.brand_name}</h2> : ' ' }
       {info.generic_name ? <h2 className='title'><h3 className="tag">Generic Name:</h3>{info.generic_name}</h2> : ' ' }
       {info.pharm_class_epc ? <h2 className='title'><h3 className="tag">Drug Class:</h3>{info.pharm_class_epc}</h2> : ' ' }
       {info.pharm_class_pe ? <h2 className='title'><h3 className="tag">Use Case:</h3>{info.pharm_class_pe}</h2> : ' ' }
       {info.route ? <h2 className='title'><h3 className="tag">Route Type:</h3>{info.route}</h2> : ' ' }
     
        </div>
       </>

    )
}

export default SearchBar;