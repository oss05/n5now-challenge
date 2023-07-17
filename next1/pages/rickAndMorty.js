import React from 'react'
import dynamic from 'next/dynamic'

const ExternalPage = dynamic(() => import('next2/pages/index'),{
    ssr: false,
    suspense: true,
})

export default function RickAndMortyPage() {
    return <ExternalPage/>
}