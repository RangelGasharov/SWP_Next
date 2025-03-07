import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.NEXT_DB_HOST,
    port: Number(process.env.NEXT_DB_PORT),
    user: process.env.NEXT_DB_USER,
    password: process.env.NEXT_DB_PASSWORD,
    database: process.env.NEXT_DB_NAME,
});

export async function GET() {
    try {
        const [rows] = await db.query(`SELECT * FROM car WHERE car_type_fk = (SELECT id FROM car_type WHERE type_name = 'Truck')`);
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Fehler beim Abrufen der Daten', error }, { status: 500 });
    }
}