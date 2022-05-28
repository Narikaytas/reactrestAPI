import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
 
import Header from "./component/Header"
import Home from './component/Home'

 
const App = () =>(
  <>
    
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
    </BrowserRouter>
  </>
)
export default App