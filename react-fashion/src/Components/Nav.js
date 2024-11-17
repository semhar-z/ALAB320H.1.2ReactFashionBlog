import './nav.css';
export default function Nav({ className }) {
    return (
    <>
        <nav aria-label="main nav Navigation" className={className}>
          <ul className="main-nav">
              <li> <a href="...">Women's</a></li> 
              <li> <a href="...">Men's</a></li> 
              <li> <a href="...">On the Street</a></li> 
              <li> <a href="...">The Catwalk</a></li> 
              <li> <a href="...">AdWatch</a></li> 
              <li> <a href="...">About</a> </li>
          </ul>
        </nav>     
    </>
  );
}
