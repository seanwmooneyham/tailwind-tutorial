import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col justify-between items-center w-16 p-4 bg-gray-200">
        <div className="flex flex-col space-y-4">
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a>
            <div className="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
        </div>
      </div>
      <div className="w-64">submenu</div>
      <div className="flex-auto bg-blue-200">main content</div>
    </div>
  );
}

export default App;
