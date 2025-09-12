import 'bootstrap/dist/css/bootstrap.min.css';
import './desiging/Slash.css';
import { NavLink } from 'react-router';

function Slash() {



  return (
    <>
      {/* Header */}
      <header className="header bg-light shadow-sm">
        <div className="header-div text-center">
          <h1 className="fw-bold text-primary">MIND MATE</h1>
        </div>
      </header>

      {/* Main */}
      <main className="main d-flex flex-column align-items-center justify-content-center flex-grow-1 py-5">
        {/* Heading */}
        <div className="main-div text-center mt-5 mb-5" id="heading">
          <h2>Choose Who You Are</h2>
        </div>

        {/* User & Mentor */}
        <div className="main-div d-flex justify-content-center gap-5 mt-4"> 
          {/* ✅ added gap-5 for more spacing */}
          <NavLink to={'/User'} style={{textDecoration:"none", color:"inherit"}}>
            <div className="choice-card">User</div>
          </NavLink>
          <NavLink to={'/Mentor'} style={{textDecoration:"none", color:"inherit"}}>
            <div className="choice-card">Mentor</div>
          </NavLink>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer shadow-sm">
        <div className="footer-div text-center">
          <small>We’ll see</small>
        </div>
      </footer>
    </>
  );
}

export default Slash;
