import './App.css';
import { Demo } from './pages/Demo';
import { ToastProvider } from './libs/react-toast';

function App() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  );
}

export default App;