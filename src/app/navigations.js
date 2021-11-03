import React from "react"

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        label: 'Tools',
        type: 'label',
    },
    {
        name: 'Email',
        icon: 'email',
        children: [
            {
                name: 'Email Finder',
                iconText: 'EF',
                path: '/tools/email-finder',
            },
            {
                name: 'Email Verifier',
                iconText: 'EV',
                path: '/tools/email-verifier',
            }
        ],
    },
    {
        name: 'Domain',
        icon : 'dns',
        children: [
            {
                name: 'Domain Finder',
                iconText: 'DF',
                path: '/tools/domain-finder'
            },
            {
                name: 'Domain Verifier',
                iconText: 'DV',
                path: '/tools/domain-verifier'
            },
        ]
    },
    {
        name: 'Pricing',
        path: '/pricing/versions',
        icon: 'trending_up',
    },
    {
        name: 'Parent',
        icon: 'launch',
        type: 'extLink',
        path: 'https://zumpitech.com/',
    },
]
