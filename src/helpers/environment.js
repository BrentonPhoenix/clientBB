let APIURL = ""

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;
    case 'git.heroku.com/pb-rl-cs-rc-dm-app.git':
        APIURL = 'https://git.heroku.com/pb-rl-cs-rc-dm-app.git'
}


export default APIURL

