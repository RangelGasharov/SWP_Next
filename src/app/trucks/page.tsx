import Link from 'next/link'
import React from 'react'

type Props = {}

export default function TrucksPage({ }: Props) {
    return (
        <div>
            <div>Trucks</div>
            <Link href="/">Home</Link>
        </div>
    )
}