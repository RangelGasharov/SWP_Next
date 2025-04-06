import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.NEXT_DB_HOST,
    port: Number(process.env.NEXT_DB_PORT),
    user: process.env.NEXT_DB_USER,
    password: process.env.NEXT_DB_PASSWORD,
    database: process.env.NEXT_DB_SQLINJECTION_NAME,
});

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        const query = `SELECT * FROM users WHERE user_name = '${username}' AND user_password = '${password}'`;
        console.log(query);

        const [rows] = await db.query(query, [username, password]);

        if (rows.length > 0) {
            return NextResponse.json({ success: true, message: 'Login erfolgreich!' });
        } else {
            return NextResponse.json({ success: false, message: 'Falsche Anmeldedaten!' }, { status: 401 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Datenbankfehler', error: error.message || 'Unbekannter Fehler' }, { status: 500 });
    }
}