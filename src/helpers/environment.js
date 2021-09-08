let APIURL = ""

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;
    case 'pb-rl-cs-rc-dm-app.herokuapp.com':
        APIURL = 'https://pb-rl-cs-rc-dm-app.herokuapp.com'
    
}
// did not push case two changes yet

export default APIURL

