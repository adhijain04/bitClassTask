import React, { useState, useEffect } from 'react'

// declaring variables
let api = "https://reqres.in/api/users"
let dataCopy = null;

export default function Home() {

  const [ data, setData ] = useState(null);
  const [ searchBy, setSearchBy ] = useState("first_name");
  const [ searchedName, setSearchedName ] = useState("");

  useEffect(() => {
    fetch(api).then(res => {
      return res.json();
    }).then(data => {
      dataCopy = data;
      setData(data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const filterFreelancers = (e) => {
    let searchByObj = {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email"
    }
    let value = e.target.value.toLowerCase();
    let searchFreelancerBy = searchBy;
    let fetchedData = data.data;
    let newData = {
      data: []
    };
    let showAlert = true;

    setSearchedName(value);

    if (value !== "") {
      for (let i = 0; i < fetchedData.length; i++) {
        if (fetchedData[i][searchFreelancerBy].toLowerCase().includes(value)) {
          showAlert = false;
          newData.data.push(fetchedData[i]);
          dataCopy = newData;
        }
      }
      if (showAlert) {
        setSearchedName("");
        return window.alert(`Freelacer not found with the ${searchByObj[searchFreelancerBy]} of ${e.target.value}`)
      }
    } else {
      dataCopy = data;
    }
  }

  const header = () => {
    return (
      <div className="header-container">
        <button className="back-button" onClick={() => window.location.pathname = '/'}>
          <i className="fas fa-arrow-left" />
        </button>

        <div className='serach-input-container'>
          <label htmlFor="search-dropdown">search by :</label>
          <select name="search-dropdown" id="search-dropdown" onChange={(e) => setSearchBy(e.target.value)}>
            <option value="first_name">first name</option>
            <option value="last_name">last name</option>
            <option value="email">email</option>
          </select>
          <input onChange={(e) => filterFreelancers(e)} value={searchedName}/>
        </div>

      </div>
    );
  }

  const listRenderer = () => {
    return (
      <div className='list-container'>
        {dataCopy
          ? dataCopy.data.length
            ? dataCopy.data.map(( item, key ) => {
                return (
                  <div key={key} className='list-item'>
                    <img src={item.avatar} alt={item.first_name} />
                    <h2>{item.first_name} {item.last_name}</h2>
                    <h5>{item.email}</h5>
                  </div>
                );
              })
            : null
          : "no data"
        }
      </div>
    )
  }

  return (
    <div className='home-container'>
      {header()}
      {listRenderer()}
    </div>
  )
}
