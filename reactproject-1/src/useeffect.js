import React, {useState, useEffect} from "react";

let URL = "https://jsonplaceholder.typicode.com/users";


const App = () => {
   const [usersData, setUsersData] = useState([]);
   const [loading, setLoading] = useState(false);

   const fetchUsersData = async (apiUrl) => {
     setLoading(true)
    try {
        const response = await fetch(apiUrl);
       const data = await response.json();
       setUsersData(data);
       setLoading(false)
    } catch (error) {
        setLoading(false)
    }
       
   };

   useEffect (() => {
    fetchUsersData(URL)
   }, []);

   if (loading) {
    return <h3>
        Loading ....
    </h3>
   }

    return (
        <div>
         <ul>
            {usersData.map((eachUser)=>{
                const {name, email, id} = eachUser;
                return (
                    <li key={id}>
                        <h3>{name}</h3>
                        <h3>{email}</h3>
                    </li>
                );
            })}
         </ul>
        </div>
    )
};

export default App;