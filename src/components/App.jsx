
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import { Headline } from './Headline';
import Home from '../pages/Home';
import Teachers from '../pages/Teachers';
import Login from '../pages/Login';
import Notfound from '../pages/Notfound';



function App  () {
    return (
        <>
            <Headline />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/teachers' element={<Teachers />}/>
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
    </>
)
}
export default App;



