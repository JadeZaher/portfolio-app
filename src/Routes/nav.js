import { Outlet, Link } from "react-router-dom";
import { Container } from "../Components/Container.styled";

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
                <Link to='/blog'> Blog </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
        </div>
        

    </>
    )
}

export default Nav;