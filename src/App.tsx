import WebRoutes from './Routes/WebRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <WebRoutes/>
    </BrowserRouter>
  );
}

export default App;
