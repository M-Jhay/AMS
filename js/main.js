var library = [
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "Shade Adu",
        Author: "shade",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "Jecinta Baby",
        Author: "shade",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "",
        Author: "Shade",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    },
    {
        Name: "I don't read books",
        Author: "aa",
        ISDN: "",
        PublishDate: "2018-12-19",
        RelatedBooks: [],
        Price: 0,
        DiscountValue: 0,
        ActualPrice: 0,
        Market: []
    }
];

// Create a BookHelper class that has a function to search for a book by its Author - 50%
// Call the function on main.js

var bookHelper = new BookHelper();

var authorName ="aa";
bookHelper.printOutBookNamesByAuthor(authorName, library);

// Create a new function to return book instead of names like above

authorName = "Shade";
bookHelper.printOutBooksByAuthorName(authorName, library);

// Get published dated for each book - 85%

var publishedDates = "";
bookHelper.printOutPublishedDates(library);

// Get data for each book in this format `ISDN - Publisher Name` - 80

var isdnAndAuthor = "";
bookHelper.printOutIsdnAndAuthor(library);