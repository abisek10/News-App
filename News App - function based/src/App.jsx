import './App.css'
import Navbar from './components/navbar'
import News from './news'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

function App() {

  const [progress, setProgress] = useState(10)
  const [mode, setMode] = useState('light')

  const toogleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      document.getElementById('root').style.color = 'white'
      document.body.style.backgroundColor = 'black'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.getElementById('root').style.color = 'black'
    }
}

  return (
    <>
    <Router>
      <Navbar mode={mode} toogleMode={toogleMode}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route path='/' element={<News setProgress={setProgress} mode={mode} category='General'/>}></Route>
        <Route path='/Business' element={<News setProgress={setProgress} mode={mode} category='Business'/>}></Route>
        <Route path='/Entertainment' element={<News setProgress={setProgress} mode={mode} category='Entertainment'/>}></Route>
        <Route path='/Health' element={<News setProgress={setProgress} mode={mode} category='Health'/>}></Route>
        <Route path='/Science' element={<News setProgress={setProgress} mode={mode} category='Science'/>}></Route>
        <Route path='/Sports' element={<News setProgress={setProgress} mode={mode} category='Sports'/>}></Route>
        <Route path='/Technology' element={<News setProgress={setProgress} mode={mode} category='Technology'/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
