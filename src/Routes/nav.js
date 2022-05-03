import { Outlet, Link } from "react-router-dom";

const Nav = () => { 
    return(
    <>
        <Outlet/>   
        <div className="center-wrap">
        <div className='nav-wrap'>
            <div className='nav'>
                <Link to='/home'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
        </div>
        

    </>
    )
}

export default Nav;