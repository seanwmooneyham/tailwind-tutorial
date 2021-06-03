import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {

const returnComments = () => {
  var arr = [];
  for(var i = 0; i < 50; i++) {
    arr.push(<a className="block border-b">
        <div className={`border-l-2 ${i === 2 ? 'border-blue-500 bg-blue-100' : 'border-transparent hover:bg-gray-100'}  p-3 space-y-4`}>
          <div className="flex flex-row items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <strong className="flex-grow text-sm">Nikila Tesla</strong>
            <span className="text-sm texst-gray-600">5hr</span>
          </div>
          <div className="flex flex-row items-center space-x-1">
          <svg class="flex-none w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
          <div className="flex-grow truncate text-xs">some message content some message content some message content some message content some message content some message content some message content some message content some message content</div>
          </div>
        </div>
      </a>);
  }
  return arr;
}

const returnCards = () => {
  var arr = [];
  for (var i = 1; i < 10; i++) {
    arr.push(<div className="flex flex-none h-64 bg-white border rounded p-8 justify-center items-center">Card content</div>);
  }
  return arr;
}

const returnComments2 = () => {
  var arr = [];
  for (var i = 1; i <=20; i++) {
    if(i === 10) {
      arr.push(<div className="flex flex-row justify-center text-sm text-gray-600">You assigned this conversation to yourself 5d ago</div>);
    }
    let fromAdmin = (i%3 == 0) ? true : false;
    arr.push(<div class={`flex flex-row space-x-2 ${fromAdmin ? 'flex-row-reverse space-x-reverse' : ''}`}>
    <svg class="flex-none w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div className="flex flex-col">
      <div className={`${fromAdmin ? 'bg-blue-100' : 'bg-gray-100'} rounded p-5`}>
      Some message text Some message text 
      </div>
      <div classname="text-sm text-gray-500">5hr ago</div>
    </div>
  </div>);
  }
  return arr;
}
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* left side menu */}
      <div className="flex flex-col justify-between items-center flex-none w-16 p-4 bg-gray-200">
        <div className="flex flex-col space-y-4 w-full">
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a className="relative w-full h-16 flex justify-center items-center">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
            <div className="absolute top-0 right-0 mt-3 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div>
          </a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
        <div className="flex flex-col space-y-4">
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
      </div>
      {/* inbox, sub content */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col flex-none space-y-4">
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="font-semibold text-2xl">Inbox</h1>
          {/* flex-none prevents the icon from shrinking if the h1 text wrapps in the container */}
          <svg class="flex-none w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div className="bg-red-200 h-64"></div>
        <div className="bg-red-200 h-64"></div>
      </div>
      {/* main content */}
      <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
        <div className="flex flex-col w-1/5">
          <div className="flex-none h-24 bg-red-200">top</div>
          <div className="overflow-y-auto">
            {returnComments()}
          </div>
        </div>

        <div className="w-3/5 border-l border-r border-gray-400 flex flex-col">
          <div class="flex-none h-16 flex flex-row justify-between items-center p-5 border-b">
            <div className="flex flex-col space-y-1">
              <strong>Nikola Tesla</strong>
              <input type="text" value="Add conversation title" className="text-sm border-b border-dashed text-black placeholder-gray-600" />
            </div>
            <div className="flex flex-row items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
          </div>

          <div class="flex-auto overflow-y-auto p-5 space-y-4" 
          style={{backgroundImage: `url(https://static.intercomassets.com/ember/assets/images/messenger-backgrounds/background-1-99a36524645be823aabcd0e673cb47f8.png)`}} >
            {returnComments2()}
          </div>
          <div class="flex-none h-40 p-4 pt-0">
            <textarea className="w-full h-full outline-none border focus:border-blue-600 rounded p-4 shadow-lg">How-dee</textarea>
          </div>
        </div>

        <div className="w-1/5 bg-gray-200 overflow-y-auto flex flex-col">
          <div className="h-64 flex-none border-b border-gray-400 flex flex-col">
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {returnCards()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
