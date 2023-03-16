import { NavLink as Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../store/actions/auth";

import './navBar.css'

const Navbar = () => {
    const { name } = useSelector(state => state.auth);
    const { isLoggedIn } = useSelector(state => state.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignUp  = () => (
        <nav className="nav_btn">
            <Link className="nav_btn_link" to="/signup">Sign Up</Link>
        </nav>
    );
    const LogOut = () => (
        <button className="nav_btn nav_btn_link" type="button"
            onClick={()=> {
                dispatch(logoutAction());
                navigate('/');
            }}>
                Log Out
        </button>
    );
    return (
        <>
           <nav className="nav_block">
            <Link className="nav_logo" to="/">
                SVGHMI
            </Link>
            <div className="nav_menu">
                <Link className="nav_link"
                  to={ isLoggedIn ? '/profile': '/login' }
                  activestyle={{ color: 'black' }}
                >
                    {isLoggedIn ? name : 'Log In'}
                </Link>
                {isLoggedIn ? <LogOut /> : <SignUp />}
            </div>
           </nav> 
        </>
    );
};
export default Navbar;