class responseHandler {

    getFullname(objValue){
        return objValue.firstName + " " + objValue.lastName;
    }

    getAddress(objValue){
        return objValue.Address1 + ", " + objValue.Address2 + ", " + objValue.City + ", " + objValue.State + ", " + objValue.Country;
    }

    getResult(objValue){
        var subjects = objValue.Subjects;
        var sumOfArray = 0;
        for(var i= 0; i < subjects.length; i++) {
            //if(!subjects[i]) {
                //return "Element with index " + i + " does not exist in subjects";
            //}
            sumOfArray = sumOfArray + subjects[i];
        }
        return sumOfArray;

    }
}