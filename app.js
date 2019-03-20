let friends = ['Niko','Emilie','Marj','Anna','Maria'];
let i = 0;
let howMany = 99;
let howManyLess = howMany - 1;
let song = [howMany + " lines of code in the file, " + howMany + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + howManyLess + " lines of code in the file"];


for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]); 
    console.log(song);
} for(let n = 99; n > 0; n--) {
    console.log(song[n]);
}