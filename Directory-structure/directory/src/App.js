import "./App.css";
import { structure } from "./utils/data";

const PrintLevel = ({ type, name }) => {
  let icon=""
  if (type == "folder")
    icon="📁"
  else
    icon="📝"

   return (
   <div className="container">
      {icon}
      {name}
   </div>
   );
};
const HandleLevel = ({ level }) => {

  const { type, name } = level;
  return (
    <div>
      <PrintLevel type={type} name={name} />

      {
      (type=="folder" && level.nest!=="undefined" && level.nest.length>0) && (
        <div className="nested">
            {
              level.nest.map((eachLevel)=>{
                  return <HandleLevel level={eachLevel}/>

              })
            }
        </div>
      )
    
    }
    </div>

  
  )
};
function App() {

  return (
    <div className="App">
      {structure.map((level) => {
        return <HandleLevel level={level} />;
      })}
    </div>
  );
}

export default App;
