var Team = require('./dbschema');//schema class

var teamsdb = {}

teamsdb.registerteam=(teamdetails)=>{
    const team = new Team({
        teamId:teamdetails.teamId,
        name:teamdetails.name,
        theme:teamdetails.theme,
        contactNo:teamdetails.contactNo,
        teamSize:teamdetails.teamSize,
        edition:teamdetails.edition,

    })

    return team.save().then((data,err)=>{
        if(data){
            return "team has been registered";
        }
        else{
            return null;
        }
    })
}

teamsdb.checkteam=(contact)=>{
    return Team.find({ contactNo: contact }).then(result => {
        if(result.length > 0){
            console.log(result.length+"by{cn}")
            return true;
        } else{
            return false;
        }
    })
}

teamsdb.generateId = (members)=>{
    return Team.find().distinct('teamId').then((ids)=>{
        var bId = Math.max(...ids);

        if(bId > 0){
            members.teamId = bId + 1;

        }
        else{
            members.teamId = 1001;
        }
        return true;
    })
}

module.exports= teamsdb;
