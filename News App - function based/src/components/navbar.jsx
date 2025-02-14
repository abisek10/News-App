import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toogleMode, mode}) {
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${mode==='light'?'dark':'light'}`} to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" to="/Technology">Technology</Link>
        </li>
      </ul>
      <div className='form-check form-switch'>
  <input className="form-check-input" onClick={toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{mode==='light'?'Light mode':'Dark mode'}</label>
</div>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar