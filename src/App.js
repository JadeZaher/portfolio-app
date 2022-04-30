import './App.css';
import ViewControl from './Routes/ViewControl';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
       <ViewControl/>
      </BrowserRouter>
  );
}

export default App;
