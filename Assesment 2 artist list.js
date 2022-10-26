const sqlite3 = require('sqlite3').verbose(); 

let db = new sqlite3.Database ('Artist_list.db');

let sql = `SELECT *
           FROM Artist
           JOIN Song ON Artist.Artist_ID = Song.Artist_ID
           ORDER BY Name`;


db.all(sql, (err, rows)=> {
    console.log(err)
    console.log(rows);
});


let del = `DELETE FROM Artist WHERE Artist_ID = A21`;

db.run(del, (err, rows)=> {
    console.log(err)
    console.log(rows);
});

db.close();