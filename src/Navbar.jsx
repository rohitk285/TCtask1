import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-black text-2xl font-semibold">Freelancopia</Link>
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 rounded-full text-gray-800 bg-gray-200"
          />
        </div>
        <div className="space-x-8">
          <Link to="/" className="nav-text">Home</Link>
          <Link to="/about" className="nav-text">About</Link>
          <Link to="#" className="nav-text">Services</Link>
          <Link to="#" className="nav-text">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
