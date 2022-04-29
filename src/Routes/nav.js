import { Outlet, Link } from "react-router-dom";

const Nav = () => { 
    return(
    <>
        <div className='nav-wrap'>
            <div className='nav'>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/blog'> Blog </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
        <div className='button-nav-right'>
                <button> {'>'} </button>
        </div>
    <Outlet/>
    </>
    )
}

export default Nav;