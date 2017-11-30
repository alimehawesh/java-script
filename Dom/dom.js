let bookId = [
    "Harry_potter",
    "The_Lightning",
    "Twilight",
    "The_Giver",
    "City_Bones",
    "Hunger_Games",
    "Fault_in_our_stars",
    "Divergent",
    "The_Hobbit",
    "Holes"
];
let bookInfo = {
    Harry_potter: {
        title: 'Harry potter',
        language: ['English','Arabic'],
        author: 'J K Rowling',
        id: 'Harry_potter'
    },
    The_Lightning: {
        title: 'The Lightning',
        language: ['English', 'Arabic'],
        author: 'Rick Riordan',
        id: 'The_Lightning'
    },
    Twilight: {
        title: 'Twilight',
        language: ['English', 'Arabic'],
        author: 'Stephenie Meyer',
        id: 'Twilight'
    },
    The_Giver: {
        title: 'The Giver',
        language: ['English', 'Arabic'],
        author: 'Lois Lowry',
        id: 'The_Giver'
    },
    City_Bones: {
        title: 'City Bones',
        language: ['English', 'Arabic'],
        author: 'Cassandra Clare',
        id: '"City_Bones",'
    },
    Hunger_Games: {
        title: 'Hunger Games',
        language: ['English', 'Arabic'],
        author: ' Suzanne Collins',
        id: 'Hunger_Games'
    },
    Fault_in_our_stars: {
        title: 'ault in our stars',
        language: ['English', 'Arabic'],
        author: 'John Green',
        id: 'Fault-in_our-stars'
    },
    Divergent: {
        title: 'Divergent',
        language: ['English', 'Arabic'],
        author: 'Veronica Roth',
        id: 'Divergent'
    },
    The_Hobbit: {
        title: 'The Hobbit',
        language: ['English', 'Arabic'],
        author: 'SJ. R. R. Tolkien',
        id: 'The_Hobbit'
    },
    Holes: {
        title: 'Holes',
        language: ['English', 'Arabic'],
        author: 'Louis Sacha',
        id: 'Holes'
    }
};


let bookImg = {
    Harry_potter: '9780751565355.jpg',
    The_Lightning: '51F+75rOVjL.jpg',
    Twilight: '41K99+cInvL._SX326_BO1,204,203,200_.jpg',
    The_Giver: '910ZSJIsnCL.jpg',
    City_Bones: '256683.jpg',
    Hunger_Games: '41fOvOon9LL.jpg',
    Fault_in_our_stars: '51UZk+G86kL._SY344_BO1,204,203,200_.jpg',
    Divergent: '91cgQbStjxL.jpg',
    The_Hobbit: '51JRmquoBWL._SX311_BO1,204,203,200_.jpg',
    Holes: 'Holesposter03.jpg'
};


function bookfun() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', "listOfBook");

    for (let i = 0; i < bookId.length; i++) {
        const id = bookId[i];
        const title = bookInfo[id].title;
        const language = bookInfo[id].language;
        const author = bookInfo[id].author;
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        let img = document.createElement('img');
        const p = document.createElement('p');
        const span = document.createElement('span');
        h1.innerHTML = title;
        p.innerHTML = 'language: ' + language;
        span.innerHTML = "by :" + author;
        li.setAttribute('id', id);
        li.setAttribute('class', 'bookItem');
        li.appendChild(h1);
        for (let key of Object.keys(bookImg)) {
            let valueOfKeys = bookImg[key];
            if (id == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }
        }
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);
    }
    console.log(ul);
    document.body.appendChild(ul);

}
bookfun();