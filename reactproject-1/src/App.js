import React, {useState} from "react";
import "./index";

const Profile = () => {

  let intialProfile = [{
    id: 1,
    firstName: "Krishna",
    lastName: "Prasad",
    age: 27,
  },
  {
    id: 2,
    firstName: "Mallesh",
    lastName: "Reddy",
    age: 23,
  },
  {
    id: 3,
    firstName: "Ashok",
    lastName: "Reddy",
    age: 26,
  },
    
];

const [data, setData] = useState(intialProfile);

function clickMe (comingId) {
 let filterData = data.filter((eachItem) =>{
  return eachItem.id !== comingId;
 })
 setData(filterData);
}


return (
  <section>
    <ul>
      {data.map((eachItem, index) =>{
        const {firstName, lastName, age, id} = eachItem;
        return (
        <li key={index}>
          <div>
            <h3>My First Name Is {firstName}</h3>
          </div>
          <div>
            <h3>My Last Name Is {lastName} </h3>
          </div>
          <div>
            <h3>My Age Is {age}</h3>
          </div>
          <button onClick={() =>clickMe (id)}>Delete Profile</button>
        </li>
        )
      })}
    </ul>
  </section>
)

}

export default Profile;