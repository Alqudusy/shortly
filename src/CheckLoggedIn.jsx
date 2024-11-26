import Cookies from "js-cookie";
const CheckLoggedIn = () => {
    if(Cookies.get('loggedIn')) {
        return true;
    } else {
        return false;
    }
}