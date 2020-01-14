var teamsdb = require("../Database/teamsdb");
var validator = require('./validator');

var teams ={};

teams.registerTeam=(teamdetails) => {
    console.log(teamdetails);
    let contactNo = teamdetails.contactNo;
    console.log(contactNo);
    return teamsdb.checkteam(contactNo).then((data)=>{
        if(data){
            throw new Error("Already registered");
            //return true;
        }
        else{
            if(validator.validContact(teamdetails.contactNo)){
                throw new Error("Invalid Contact Number");
            }
            else if(validator.validTheme(teamdetails.theme)){
                throw new Error("Invalid Theme");
            }
            else if(validator.validTeamSize(teamdetails.teamSize)){
                throw new Error("Minimum Team Size has to be 3");
            }
            else{
                console.log(teamdetails);
                return teamsdb.generateId(teamdetails).then(isid => {
                    if(isid){
                        return teamsdb.registerteam(teamdetails).then(result => {
                            console.log(teamdetails);
                            if(result){
                                return result                                
                            }
                            else{
                                throw new Error("Error Occured during registration");
                            }
                        });
                    }
                    else{
                        return false;
                    }
                })
            }
        }
    })
    
}

// teams.featchTeam=()=>{}

module.exports = teams;
