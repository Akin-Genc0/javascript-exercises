const leapYears = function(Year) {
 
if(Year % 4 === 0 || Year % 100 === 0 
    || Year % 400 === 0
){
    return true
}     
        return false
};


leapYears();


// Do not edit below this line
module.exports = leapYears;
