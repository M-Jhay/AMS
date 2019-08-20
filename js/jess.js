var objValue = {
    firstName: "Segun",
    lastName: "Michael",
    Address1: "Ogunjobo Street",
    Address2: "Fola Agoro",
    City: "Yaba",
    State: "Lagos",
    Country: "Nigeria",
    Subjects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

// var newResponseHandler = new responseHandler();
// console.log("Full name is " + newResponseHandler.getFullname(objValue));
// console.log("Address is " + newResponseHandler.getAddress(objValue));
// console.log("Result is " + newResponseHandler.getResult(objValue));

//var service = new Service();
//console.log("Subtraction: " + service.subtraction(service.multiplication(10, 5), service.addition(10, 5)));
//
//var arrValues = [12, 24, 5, 10];
//var arrayLen = arrValues.length;
//service.printOutValues(arrValues); 



// assignment find out why we are getting undefined in line 5

/**var objFusion = {
    combustionRate: 5.3,
    engineType: "1.6 litre Engine",S
    combustible: true,
    firstName: "Segun",
    lastName: "Michael",
    Address1: "Ogunjobo Street",
    Address2: "Fola Agoro",
    City: "Yaba",
    State: "Lagos",
    Country: "Nigeria",
    Subjects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    getExhaustionRatio: function() {
        return service.multiplication(this.combustionRate,  5)
    }
;


objFusion.combustionRate = 20;
console.log(objFusion.getExhaustionRatio());
*/



 /**responseHandler{
    get fullname // firstname lastname
    get full address // Address1 Address2 City State Country
    get result // Adding total of all subjects
} */

function RemoveTrailingComma(strValue) {
    return strValue.substr(0, (strValue.length - 1));
}

var stringWithComma = "Hi, my name is Jess. I am a developer.   ,";
stringWithComma = RemoveTrailingComma(stringWithComma);

console.log("stringWithComma: " + stringWithComma);