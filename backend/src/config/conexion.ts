

import mysql from 'mysql2/promise';

var conexion = mysql.createPool({
    host:'localhost',
    port:3306,
    user: 'root',
    password:'yduz2uro',
    database:'proyecto_final'
});

export default conexion;
   
