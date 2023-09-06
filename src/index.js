import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './App'



const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<>
   <React.StrictMode>
     <Navbar />
    
   </React.StrictMode>
 </>)




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const container = document.getElementById('root');
// const root  = ReactDOM.createRoot(container)
// root.render(<>
//    <p>Hello</p>
// </>)

// ReactDOM.createRoot(document.getElementById('root')).render(<>
//    <h1>Hello</h1>
// </>)