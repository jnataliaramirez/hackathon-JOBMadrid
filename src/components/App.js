// styles
import '../styles/reset.css';
import '../styles/App.css';
import { Layout } from './screen/Layout';
import { AppRouter } from '../router/AppRouter';

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}
export default App;