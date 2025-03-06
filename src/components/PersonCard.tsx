import { Person } from '@/services/Person'
import React from 'react'

type Props = {
    person: Person;
}

export default function PersonCard({ person }: Props) {
    return (
        <div>
            <div>{person.firstname}</div>
            <div>{person.lastname}</div>
        </div>
    )
}