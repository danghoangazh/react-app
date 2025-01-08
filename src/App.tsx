import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="h-auto w-full">
        <div className="max-w-7xl mx-auto bg-slate-500">
          <div className="flex gap-2 p-3">
            <p className="text-white font-medium">Home</p>
            <p className="text-white font-medium">Tin hay <FontAwesomeIcon icon={faSearch} /></p>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default App;
