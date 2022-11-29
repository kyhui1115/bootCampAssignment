import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to ="/"><h1>The CodeStates Blog💜</h1></Link>
            <div className="links">
                <Link to="/create" style={{ 
                    color: 'white', 
                    backgroundColor: '#295CED',
                    borderRadius: '8px' 
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
  
export default Navbar; 