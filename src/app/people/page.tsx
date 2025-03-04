import { Person } from '@/services/Person';
import React from 'react'

type Props = {}

const getPeople = async () => {
    const res = await fetch('http://localhost:3000/api/person');
    if (!res.ok) throw new Error('Fehler beim Laden der Daten');
    return res.json();
}

export default async function PeoplePage({ }: Props) {
    const people: Person[] = await getPeople();
    return (
        <div>
            <h2>People</h2>
            {people?.map((person) => {
                return (
                    <div key={person.id}>
                        <div>{person.firstname}</div>
                        <div>{person.lastname}</div>
                    </div>
                )
            })}
        </div>
    )
}