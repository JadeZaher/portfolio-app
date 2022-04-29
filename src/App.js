import './App.css';
import Views from './Routes/views';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
       <Views/>
      </BrowserRouter>
  );
}

export default App;
