import {useHistory, Link} from 'react-router-dom';

const Navbar = ({searchText, setSearchText}) => {
  const history = useHistory()
  const updateSearchText=(e) =>{
    history.push('/SearchView')
    console.log(e.target.value)
    setSearchText(e.target.value)
  }
    return (


<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    
        Movie Den</Link>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="gosomewherenavbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="SignIn">
            Sign In
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/Languages"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Languages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="gosomewhere">English</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Spanish</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">French</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">German</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Italian</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Chinese</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Japanese</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Korean</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Hindi</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Arabic</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Russian</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Portuguese</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Bengali</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Urdu</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Turkish</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Vietnamese</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Thai</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Dutch</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Swedish</Link></li>
            <li><Link className="dropdown-item" to="gosomewhere">Polish</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SignUp">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search movies here.."
          aria-label="Search"
          value={searchText}
          onChange={updateSearchText}

          
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

)
}

export default Navbar;

