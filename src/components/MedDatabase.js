import './MedDatabase.css'
import SearchBar from './SearchBar'


function MedDatabase () {
    
   
    return (
        <div>
            <div className="medDexTitle">
                <h1>Medication  <span>Database</span></h1>
                <br /> 
            </div>
            <div>
               <SearchBar /> 
            </div>
        </div>
    )
}

export default MedDatabase
