class BookHelper {
    
    printOutBookNamesByAuthor(authorName, library) {
        for(var i = 0; i < library.length; i++) {
            if(library[i].Author == authorName) {
                console.log(`Author Name is: ${library[i].Name}`);
            }
        }

    }

    printOutBooksByAuthorName(authorName, library) {
        for(var i = 0; i < library.length; i++) {
            if(library[i].Author == authorName) {
                console.log(`${library[i]}`);
            }
        }

    }

    printOutPublishedDates(library) {
        for(let i = 0; i < library.length; i++) {
            publishedDates += library[i].PublishDate;

            if(i != library.length - 1) {
                publishedDates += ", ";
            }
        }
        console.log(publishedDates);
    }

    printOutIsdnAndAuthor(library) {
        for(var i = 0; i < library.length; i++){
            isdnAndAuthor += `${library[i].ISDN} - ${library[i].Author}`
        }
        console.log(isdnAndAuthor);
    }
    
}