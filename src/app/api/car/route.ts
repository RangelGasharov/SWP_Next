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
        const [rows] = await db.query('SELECT * FROM car');
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Fehler beim Abrufen der Daten', error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, color, engine_fk, car_type_fk } = body;

        if (!name || !color || !engine_fk || !car_type_fk) {
            return NextResponse.json({ message: 'Alle Felder sind erforderlich!' }, { status: 400 });
        }

        const [result] = await db.query('INSERT INTO car (name, color, engine_fk, car_type_fk) VALUES (?, ?, ?, ?)', [name, color, engine_fk, car_type_fk]);

        return NextResponse.json({ message: 'Daten erfolgreich hinzugefügt', insertId: result.insertId }, { status: 201 });
    } catch (error) {
        console.error('Error while saving data:', error);
        return NextResponse.json({ message: 'Fehler beim Speichern der Daten', error: error.message }, { status: 500 });
    }
}