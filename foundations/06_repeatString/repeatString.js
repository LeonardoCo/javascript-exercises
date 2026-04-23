const repeatString = function(string, num) {
    if (num < 0){
            return "Error";
        } else{
            let joinedStrings="";
            for (let i=0; i<num; i++){
                joinedStrings += string;
            }
            return joinedStrings;
        }
};

// Do not edit below this line
module.exports = repeatString;
