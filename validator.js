var validator = {}

validator.validContact = function(contactNo){
    if(new String(contactNo).length != 10) {
        return true;
    }
    else{
        return false;
    }
}

validator.validTheme = function(theme){
    themeArray=['robotics','waste management', 'wastemanagement', 'smart vehicle', 'smartvehicle'];
    if (themeArray.includes(theme.toLowerCase())){
        return false;
    }
    else{
        return true;
    }
}

validator.validTeamSize = function(teamSize){
    if(teamSize < 3){
        return true;
    }
    else{
        return false;
    }
}

module.exports=validator;
