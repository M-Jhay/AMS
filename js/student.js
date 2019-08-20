var students =  [
    {
        firstName: "Segun",
        lastName: "Michael",
        Address1: "Ogunjobo Street",
        Address2: "Fola Agoro",
        City: "Yaba",
        State: "Lagos",
        Country: "Ghana",
        Subjects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        age: 12
    },
    {
        firstName: "Balogun",
        lastName: "Michael",
        Address1: "Ogunjobo Street",
        Address2: "Fola Agoro",
        City: "Yaba",
        State: "Lagos",
        Country: "Nigeria",
        Subjects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        age: 41
    },
    {
        firstName: "Kingsley",
        lastName: "Michael",
        Address1: "Ogunjobo Street",
        Address2: "Fola Agoro",
        City: "Yaba",
        State: "Lagos",
        Country: "France",
        Subjects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        age: 28
    }
];
    
    //Assignment no 1
    console.log("The names of the students are " + students[0].firstName + " " + students[0].lastName + ", " + students[1].firstName + " " + students[1].lastName + " and " + students[2].firstName + " " + students[2].lastName);

    // result
    var sumOfResult = 0;
    for(var i = 0; i < students.length; i++){
        sumOfResult = sumOfResult + students[i].Subjects.reduce(sumOfElements);
    }

    function sumOfElements(total, num) {
        return total + num;
    }

    console.log("Total:: " + sumOfResult);

    //Assignment no 3
    console.log("Student name: " + students[0].firstName + " " + students[0].lastName + " " + "Country: " + students[0].Country);
    console.log("Student name: " + students[1].firstName + " " + students[1].lastName + " " + "Country: " + students[1].Country);
    console.log("Student name: " + students[2].firstName + " " + students[2].lastName + " " + "Country: " + students[2].Country);


   //Assignment no 4
    function listStudents(prods) {
        let students_firstName = [];
        let students_lastName = [];
            for (i=0; i<students.length; i++) {
                i += students_firstName + students_lastName;
            }
            return i ;
    }   
    console.log("The total number of students are " + listStudents(students));


    //Assignment no 5
    console.log("The 5th elements in the array subjects for all the students are " + students[0].Subjects[5] + " " + students[1].Subjects[5] + " " +students[2].Subjects[5]);

    
    //Assignment no 6
    students[1].firstName = "Felix";
    students[1].lastName = "Nwabueze";

    console.log("My name has been changed to " + students[1].firstName + " " + students[1].lastName);


    //Assignment no 7
    function getFullNames(students){
        
        var fullNames = "";
        for(var i=0; i < students.length; i++){
           
            fullNames += `${students[i].firstName} ${students[i].lastName}`;

        }
        return fullNames;
    }
    console.log("This function extracts the full name of the students: " + getFullNames(students));


    //Assignment no 8
    var myDetails = new Details();
    console.log("This class does the same thing as above: " + getFullNames(students));


    //Assignment no 9
    var myDetails = new Details();
    console.log("This displays full names and Country: " + myDetails.getFullNamesAndCountry(students));



    //Assignment no 10
    function printAgeAndSum(students){
        var results = "";
        var ages = 0;
        var age = "";
        for(var i = 0; i < students.length; i++){

             ages += students[i].age;

             age += students[i].age + ",";
            
        }
        
        results = `Sum of all ages:: ${ages} and csv of ages::${age}`;
        return results;
        
           
    }
        console.log(printAgeAndSum(students));

        students.forEach(function(item, index, array) {
            console.log(item);
        });
                

    


    // 1. Print out all the names of students in the array
    //2. Print out a sum of all the results for the 3 students
    //3. Print out a list of students and their corresponding country
    //4. Print out a list of total number of students
   //5. Print out the 5th elements in the array subject for all the students e.g `Fifth element is Subjects[5]`
   //6. Change the first and last name of the second student to 'Felix Nwabueze'
   //7. Create a function to extract the full names of all students
   //8. Create new class to extract the function as defined above in 7
   //9. Create another function in the class to extract fullname and country
   //10. Create a function to print out all the ages and the collective addition of age
