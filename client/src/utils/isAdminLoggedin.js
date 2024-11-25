import Cookies from 'js-cookie';

function isAdmin(){
    const token = Cookies.get('token');
    return token ? token : null;
}

export default isAdmin;