import './App.css';
import React from "react"
function App() {

  const countries=[
    {
      name:"India",
      code:"IN",
      states:["Gujarat","Kerala","Karnataka","Tamil Nadu","Maharashtra"]
    },

    {
      name:"United States of America",
      code:"USA",
      states:["Texas","California","Florida","Oregon","Delaware"]
    },

    {
      name:"Japan",
      code:"JP",
      states:["Kanto","Shikoku","Hokkaidō","Kyoto","Osaka"]
    },
]
const [country,setCountry]=React.useState(countries[0])
  return (
    <div className="App">

      <select onChange={(e)=>{
        const object=countries.filter((country)=>{
          // console.log(e.target.value,country)

          return e.target.value===country.code
        })
        setCountry(object[0])

      }}>
      {
        countries.map((countryObject)=>{
          return (
            <option>{countryObject.code}</option>
          )
        })
      }
      </select>

      <select>
        {
          country.states.map((state)=>{
            return <option>{state}</option>
          })
        }
      </select>

    </div>
  );
}

export default App;
