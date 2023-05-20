import Nav from "react-bootstrap/Nav";
import "../assets/styles/Footer.css";
export default function Footer() {
  return (
    <div className='footer-basic'>
      <footer>
        <ul className='list-inline'>
          <li className='list-inline-item'>Career Plan Today © 2023</li>
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
      </footer>
    </div>
  );
}
