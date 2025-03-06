"use client"
import { Person } from '@/services/Person';
import React, { useEffect, useState } from 'react'
import PersonCard from './PersonCard';

type Props = {}

export default function PeopleContainer({ }: Props) {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPeople = async () => {
            const res = await fetch('http://localhost:3000/api/person');
            if (!res.ok) throw new Error('Fehler beim Laden der Daten');
            const people = await res.json();
            setPeople(people);
        }
        getPeople();
        setIsLoading(false);
    }, [])

    return (
        <div>
            {isLoading && <div>Loading ...</div>}
            {people.map((person: Person) => {
                return (
                    <PersonCard key={person.id} person={person} />
                )
            })}
        </div>
    )
}