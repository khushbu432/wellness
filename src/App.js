import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Medhome from './pages/Medical/Medhome'
import Medhistory from './pages/Medical/Medhistory'
import Medinventory from './pages/Medical/Mediventory'
import NotFound from './pages/Medical/NotFound'
import MedAddNew from './pages/Medical/MedAddNew'
import MedNewOrder from './pages/Medical/MedNewOrder'
import Medprofile from './pages/Medical/Medprofile'
import Medupdate from './pages/Medical/Medupdateprofile'
import Registrationmedical from "./pages/Medical/Registrationmedical";
import RegistrationLab from "./pages/Medical/Registrationmedical";
import Addmedicine from './pages/Medical/Addmedicine'
import { ReactSession } from 'react-client-session'
import Labhome from './pages/Lab/Labhome'
import Labinventory from './pages/Lab/Labinventory'
import Labhistory from './pages/Lab/Labhistory'
import Reports from './pages/Lab/Reports'
import Labprofile from './pages/Lab/Labprofile'
import Labupdateprofile from './pages/Lab/Labupdateprofile'
import AddTest from './pages/Lab/AddTest'
import UpdateTest from './pages/Lab/UpdateTest'
import Updatemedicine from './pages/Medical/Updatemedicine'


import "./index.css";
import Loginpage from './pages/Loginpage';
import Register from './pages/Register';
import Home from './pages/Doctor/Home';
import Profile from "./pages/Doctor/Profile";
import Registrationpatient from "./pages/Patients/Registrationpatient";
import Patprofile from './pages/Patients/Patprofile'
import Registrationdoctor from './pages/Doctor/Registrationdoctor'
import PatHome from "./pages/Patients/PatHome";
import Cart from './pages/Patients/Cart'
import PrevOrder from './pages/Patients/PrevOrder'
import Corder from "./pages/Patients/Corder";
import Pathistory from "./pages/Doctor/Pathistory";
import Addpat from "./pages/Doctor/Addpat";
import Bookappn from "./pages/Doctor/Bookappn";
import Attendpat from "./pages/Doctor/Attendpat"
import Viewstore from "./pages/Patients/Viewstore"


ReactSession.setStoreType("localstorage")
function App() {
   return (
     <>
      <login />
      <Router>
              <div className="App">
         <main className='bg-gray-200'>
           <Routes>
          <Route path="/registrationMed" element={<><Registrationmedical /></>} />
          <Route path="/registrationLab" element={<><RegistrationLab /></>} />
               <Route path='/Medical/Medhome' element={<Medhome />} />
             <Route path='/Medical/Medhistory' element={<Medhistory />} />
             <Route path='/Medical/Medinventory' element={<Medinventory />} />
             <Route path='/Medical/MedAddNew' element={<MedAddNew />} />
             <Route path='/Medical/MedNewOrder' element={<MedNewOrder />} />
             <Route path='/Medical/Medprofile' element={<Medprofile />} />
             <Route path='/Medical/Medupdateprofile' element={<Medupdate />} />
             <Route path='/Medical/Medinventory/Addmedicine' element={<Addmedicine />} />
             <Route path='/Medical/Medinventory/Updatemedicine' element={<Updatemedicine />} />

             <Route path='/Lab/Labhome' element={<Labhome />} />
             <Route path='/Lab/Labinventory' element={<Labinventory />} />
             <Route path='/Lab/Labhistory' element={<Labhistory />} />
             <Route path='/Lab/Labhome/reports' element={<Reports />} />
             <Route path='/Lab/Labprofile' element={<Labprofile />} />
             <Route path='/Lab/Labupdateprofile' element={<Labupdateprofile />} />
             <Route path='/Lab/Labinventory/AddTest' element={<AddTest />} />
             <Route path='/Lab/Labinventory/UpdateTest' element={<UpdateTest />} />
             <Route path='/*' element={<NotFound />} /> 

             <Route path="/" element={<><Loginpage /></>} />
          <Route path="/register" element={<><Register /></>} />
          <Route path="/registrationpat" element={<><Registrationpatient /></>} />
          <Route path="/registrationdoc" element={<><Registrationdoctor /></>} />
          <Route path="/DocHome" element={<><Home /></>} />
          <Route path="/DocHome/Profile" element={<><Profile /></>}/>
          <Route path="/PatientHome" element={<PatHome />}/>
          <Route path="/PatientHome/Profile" element={<><Patprofile /></>}/>
          <Route path="/PatientHome/cart" element={<><Cart /></>}/>
          <Route path="/PatientHome/prevorder" element={<><PrevOrder /></>}/>
          <Route path="/PatientHome/corder" element={<><Corder /></>}/>
          <Route path="/DocHome/Patienthistory" element={<><Pathistory /></>}/>
          <Route path="/DocHome/Addpatient" element={<><Addpat /></>}/>
          <Route path="/DocHome/BookAppointment" element={<><Bookappn /></>}/>
          <Route path="/PatientHome/Viewstore" element={<><Viewstore /></>}/>
          <Route path="/DocHome/attendpat" element={<Attendpat />}/>
          
           </Routes>
           </main> 
           <div>
           <Footer  />
           </div>
           </div>
        
          </Router>
    </>
  )
}
export default App