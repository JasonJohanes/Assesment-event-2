const sqlite3 = require('sqlite3').verbose(); 

let db = new sqlite3.Database ('Artist_list.db');

//sorting system//
let sql = `SELECT * FROM Artist
           JOIN Song ON Artist.Artist_ID = Song.Artist_ID
           ORDER BY Streams DESC`;

db.all(sql, (err, rows)=> {
    console.log(err)
    console.log(rows)
});
//sorting system//


//delete//
db.each ('DELETE FROM Song WHERE Song.artist_id NOT IN ( SELECT Song.artist_ID FROM Song INNER JOIN Artist ON Song.Artist_id = Artist.artist_id);', (err, row) => {
    console.log(row);
    })

db.close((err) => {
if (err){
    return console.error(err.message);
}
console.log('closing nodelogin database.');
});
//delete//


//Insert//
let masuk = `INSERT INTO Artist (Artist_ID, Artist_Name)
             VALUES ('A23' , 'MARSHMELLO')`;
//Insert//
db.close();