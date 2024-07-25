import React, {useState, useEffect} from "react";
import './style.css';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Drink =() => {

    const [drinksData, setDrinksData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({status:false,msg: ''})

    const fetchDrink = async (apiURL) => {
        setLoading(true);
        setIsError({status:false,msg:''})
         try {
            const response = await fetch(apiURL);
         const {drinks} = await response.json();
         setDrinksData(drinks);
         setLoading(false)
         setIsError({status:false,msg:''})
         if (!drinks){
            throw new Error("Data Not Found...")
         }
         } catch (error) {
            setLoading(false);
            setIsError({status:true,msg: error.message || 'something went wrong...'})
         }
    }

    useEffect (() => {
        const correctUrl = `${URL}${searchTerm}`
        fetchDrink(correctUrl);
    }, [searchTerm])

    return (
        <div className="drink-container">
           <form>
            <input 
            className="input-style"
            type="text" 
            id="search" 
            name="search" 
            placeholder="search something..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            
           </form>

           <hr />
           {loading && !isError?.status && <h3 className="heading">Loading...</h3>}
           {isError?.status && <h3 className="error-style">{isError.msg}</h3>}
           {
            ! loading && !isError?.status && (<ul className="cocktail-data">
            {drinksData.map((eachDrink)=>{
                const {idDrink, strDrink, strDrinkThumb} = eachDrink;
                return (
                <li key={idDrink}>
                    <div>
                    <img src={strDrinkThumb} alt={strDrink} />
                    </div>
                    <div>
                        <h3 className="title">{strDrink}</h3>
                    </div>
                </li>
                );
            })}

           </ul>
            )
           }
        </div>
    )
};

export default Drink;