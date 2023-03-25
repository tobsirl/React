import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ReactTable from './components/ReactTable';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactTable />
    </QueryClientProvider>
  );
}

export default App;
