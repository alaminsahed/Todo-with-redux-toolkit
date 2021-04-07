import "./App.css";
import Input from "./Component/Input/Input";
import Work from "./Component/WorkList/Work";

function App() {
  return (
    <div className="main">
      <Input />
      <div>
        <Work />
      </div>
    </div>
  );
}

export default App;
