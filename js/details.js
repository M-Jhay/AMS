class Details {
    getFullNames(students){
        
        var fullNames = "";
        for(var i=0; i < students.length; i++){
           
            fullNames += `${students[i].firstName} ${students[i].lastName}`;

        }
        return fullNames;
    }
    getFullNamesAndCountry(students){
        
        var fullNamesAndCountry = "";
        for(var i=0; i < students.length; i++){
           
            fullNamesAndCountry += `Firstname: ${students[i].firstName} ${students[i].lastName} ,Country: ${students[i].Country}`;

        }
        return fullNamesAndCountry;
    }
}