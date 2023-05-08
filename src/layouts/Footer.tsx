import Nav from "react-bootstrap/Nav";
import "./Footer.css";
export default function Footer() {
  return (
    <div className='footer-basic'>
      <footer>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <a href='./'>Home</a>
          </li>
          <li className='list-inline-item'>
            <a href='./about'>About</a>
          </li>
          <li className='list-inline-item'>
            <a href='./termsofuse'>Terms</a>
          </li>
          <li className='list-inline-item'>
            <a href='./privacypolicy'>Privacy</a>
          </li>
          <li className='list-inline-item'>
            <a href='./feedback'>Feedback</a>
          </li>
        </ul>
        <p className='copyright'>Career Plan Today © 2023</p>
      </footer>
    </div>
  );
}
