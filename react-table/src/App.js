import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1 className="text-6xl font-bold underline">React Table</h1>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
