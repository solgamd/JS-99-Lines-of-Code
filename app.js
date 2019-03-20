let friends = ['Niko','Emilie','Marj','Anna','Maria'];

let howMany = 99;
let howManyLess = howMany - 1;

/*let song = 
    [howMany + " lines of code in the file, "],
    [howMany + " lines of code," ],
    [friends[i] + " strikes one out, clears it all out, "],
    [howManyLess + " lines of code in the file, "]
];*/

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]); 
    let n = song.length;
    for (let song = [howMany + " lines of code in the file, " + howMany + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + howManyLess + " lines of code in the file"]; 
            n < song.length; howMany-- ) 
                console.log(song);
            }


