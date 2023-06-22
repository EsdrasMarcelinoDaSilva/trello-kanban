import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './pages/formStep1'
import { Signup } from './pages/formStep2'
import { Cards } from './pages/formStep3'

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/step2" element={<Signup/>} />
            <Route path="/step3" element={<Cards/>} />
        </Routes>
        </BrowserRouter>
        
    )
}