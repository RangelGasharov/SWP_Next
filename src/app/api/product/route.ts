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
        const { productname } = await req.json();

        const query = `SELECT * FROM products WHERE product_name LIKE '%${productname}%'`;
        console.log(query);

        const [rows] = await db.query(query);

        if (rows.length > 0) {
            return NextResponse.json({ success: true, message: `Ergebnisse zum "${productname}"`, data: rows });
        } else {
            return NextResponse.json({ success: false, message: 'Es konnten keine Ergebnis geunden werden!', data: [] }, { status: 401 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Datenbankfehler', error: error.message || 'Unbekannter Fehler' }, { status: 500 });
    }
}