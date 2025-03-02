import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.NEXT_DB_HOST,
    port: Number(process.env.NEXT_DB_PORT),
    user: process.env.NEXT_DB_USER,
    password: process.env.NEXT_DB_PASSWORD,
    database: process.env.NEXT_DB_NAME,
});

export async function GET() {
    try {
        const [result] = await db.query('SELECT 1 + 1 AS test');

        return NextResponse.json({
            message: 'Datenbankverbindung erfolgreich!',
            result
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Fehler beim Verbinden mit der Datenbank',
            error
        }, { status: 500 });
    }
}
