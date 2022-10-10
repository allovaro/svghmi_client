import { NavLink as Link } from "react-router-dom";
import MessageTemplate from "../messageTemplate/messageTemplate";

import './forgotPassword.css';

function ForgotPassword() {
    return (
        <MessageTemplate>
            <form>
                <input checked="<%= true %>" id="signin" name="action" type="radio" value="signin"></input>
                <label for="signin">Sign in</label>
                <input id="signup" name="action" type="radio" value="signup"></input>
                <label for="signup">Sign up</label>
                <input id="reset" name="action" type="radio" value="reset"></input>
                <label for="reset">Reset</label>
                <div id="wrapper">
                    <div id="arrow"></div>
                    <input id="email" placeholder="Email" type="text"></input>
                    <input id="pass" placeholder="Password" type="password"></input>
                    <input id="repass" placeholder="Repeat password" type="password"></input>
                </div>
                <button type="submit">
                    <span>
                        Reset password
                        <br />
                        Sign in
                        <br />
                        Sign up
                    </span>
                </button>
            </form>
            <div id="hint">Click on the tabs</div>

        </MessageTemplate>
    )
}


export default ForgotPassword;
