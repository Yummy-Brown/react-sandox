 import './App.css'
import MultipleInput from './components/MultipleInput';
import OtherForms from './components/OtherForms';
import SimpleRef from './components/SimpleRef';
import Simpleform from './components/Simpleform';
import Test from './components/Test';
// import ComplexEffect from './components/ComplexEffect';
// import SimpleEffect from './components/SimpleEffect';
// import Dynamic from './components/Dynamic';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Employee from './components/Employee';
//import List from './components/List';
// import SimpleState from './components/SimpleState';
// import ComplexState from './components/ComplexState';
// import Testimonial from './components/Testimonial';
// import Section1 from './components/Section1';
// import Conditional from './components/Conditional';
// import Activist from './components/Activist';
//import { useContext } from 'react';
//import { AppContext } from './Context';
import HomePage from './assets/pages/HomePage';
import AboutPage from './assets/pages/AboutPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Head from './components/Head';
import Error404 from './assets/pages/Error404';
import Login from './assets/pages/Login';
import Dashboard from './assets/pages/Dashboard';
import Tweet from './assets/pages/Tweet';
import SingleTweet from './assets/pages/SingleTweet';
function App() {
  return (
    <div className='container'>
     <Router>
      <Head />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about-us' element={<Navigate to='/about' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tweet' element={<Tweet />} />
        <Route path='/single/:tweetId' element={<SingleTweet />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      {/* <h2 className='text-primary'>Footer</h2> */}
     </Router>
    </div>
  );
};

//function App() {
  // const employees = [
  //   { name: "Quam", role: "Product Manager", salary: "$12k", content: "he is a skilled product manager" },
  //   { name: "Ezinne", role: "Frontend engineer", salary: "$42k" },
  //   { name: "Uche", role: "Backend engineer", salary: "$12k" },
  //   { name: "Yummy", role: "UI?UX engineer", salary: "$17k" },
  // ];

 
    
//     <>
               
//     {/* <h1>React Tutorial</h1>
//     {employees.map((employee, index) => {
//       return (
//         <Employee
//         key = {index}
//         {...employee} // spread operator
//         // name = {employee.name}
//         // role = {employee.role}
//         // salary= {employee.salary}
//         />
//       );
//     })};
       
//     <Employee name = "Samuel" role = "CEO" salary = "$34k">
//       <p>He has 8 years experience in Fullstack engineering</p> 
//     </Employee>
//     <Employee name = "Quam" role = "Frontend engineer" salary = "$12k" />
//     <Employee name = "Ezinne" role = "Backend engineer" salary = "$14k" />
//     <Employee name = "Yummy" role = "Fullstack engineer" salary = "$20k" />  */}

//     </>
//   );
// }; 

 export default App;
