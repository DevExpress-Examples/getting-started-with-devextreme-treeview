const books = [{
    id: "1",
    text: "Books",
    expanded: true,
    items: [{
        id: "1_1",
        text: "Classic",
        expanded: true,
        items: [{
            id: "1_1_1",
            text: "Fyodor Dostoevsky",
            items: [{
                id: "1_1_1_1",
                text: "Crime and Punishment",
                year: "1866"
            }, {
                id: "1_1_1_2",
                text: "The Brothers Karamazov",
                year: "1880"
            }]
        }, {
            id: "1_1_2",
            text: "Mark Twain",
            expanded: true,
            items: [{
                id: "1_1_2_1",
                text: "The Adventures of Tom Sawyer",
                year: "1876"
            }, {
                id: "1_1_2_2",
                text: "Adventures of Huckleberry Finn",
                year: "1884"
            }]
        }, {
            id: "1_1_3",
            text: "Leo Tolstoy",
            expanded: true,
            items: [{
                id: "1_1_3_1",
                text: "War and Peace",
                year: "1867"
            }, {
                id: "1_1_3_2",
                text: "Anna Karenina",
                year: "1877"
            }]
        }, {
            id: "1_1_4",
            text: "George Orwell",
            items: [{
                id: "1_1_4_1",
                text: "1984",
                year: "1949"
            }, {
                id: "1_1_4_2",
                text: "Animal Farm",
                year: "1945"
            }]
        }]

    }, {
        id: "1_2",
        text: "Programming",
        items: [{
            id: "1_2_1",
            text: "Robert Martin",
            items: [{
                id: "1_2_1_1",
                text: "Clean Code",
                year: "2008"
            }]
        }, {
            id: "1_2_2",
            text: "Steve McConnell",
            items: [{
                id: "1_2_2_1",
                text: "Code Complete",
                year: "1993"
            }]
        }, {
            id: "1_2_3",
            text: "Donald Knuth",
            items: [{
                id: "1_2_3_1",
                text: "The Art of Computer Programming",
                year: "1968"
            }]
        }, {
            id: "1_2_4",
            text: "Frederick Brooks",
            items: [{
                id: "1_2_4_1",
                text: "The Mythical Man-month",
                year: "1975"
            }]
        }]
    }, {
        id: "1_3",
        text: "Philosophy",
        items: [{
            id: "1_3_1",
            text: "Plato",
            items: [{
                id: "1_3_1_1",
                text: "Republic",
                year: "375 BC"
            }, {
                id: "1_3_1_2",
                text: "Symposium",
                year: "385–370 BC"
            }]
        }, {
            id: "1_3_2",
            text: "Ludwig Wittgenstein",
            items: [{
                id: "1_3_2_1",
                text: "Tractatus Logico-Philosophicus",
                year: "1921"
            }, {
                id: "1_3_2_2",
                text: "Philosophical Investigations",
                year: "1953"
            }]
        }, {
            id: "1_3_3",
            text: "Immanuel Kant",
            items: [{
                id: "1_3_3_1",
                text: "Critique of Pure Reason",
                year: "1781"                
            }, {
                id: "1_3_3_2",
                text: "Critique of Practical Reason",
                year: "1788"                
            }]
        }, {
            id: "1_3_4",
            text: "René Descartes",
            items: [{
                id: "1_3_4_1",
                text: "Meditations on First Philosophy",
                year: "1641"                
            }, {
                id: "1_3_4_2",
                text: "Principles of Philosophy",
                year: "1644"                
            }]
        }]
    }]
}];