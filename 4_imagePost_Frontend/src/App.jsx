import { Route, Routes } from 'react-router-dom'
import Allpost from './Allpost'
import Uploadpost from './Uploadpost'
function App(){
  return(
    <Routes>
      <Route path='/allpost' element={<Allpost />}/>
      <Route path='/' element={<Uploadpost />}/>
    </Routes>
  )
}

export default App