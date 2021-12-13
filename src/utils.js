const userNames = {};
const getDefaultName = function(){
    var cnt = 0;
    for (user in userNames) {
        cnt+=1;
    }
    return 'User' + String(cnt);
};

module.exports = {
    getDefaultName: getDefaultName,
    userNames: userNames,
};