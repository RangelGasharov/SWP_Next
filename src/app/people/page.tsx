import PeopleContainer from '@/components/PeopleContainer'
import React from 'react'

type Props = {}

export default function PeoplePage({ }: Props) {
    return (
        <div>
            <h2>People</h2>
            <PeopleContainer />
        </div>
    )
}