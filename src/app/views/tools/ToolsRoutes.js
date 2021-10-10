import React, { Component } from "react";
import EmailFinder from "./email/EmailFinder";
import EmailVerifier from "./email/EmailVerifier";
import DomainFinder from "./domain/DomainFinder";
import DomainVerifier from "./domain/DomainVerifier";

const toolsRoutes=  [
    {
        path:'/tools/email-finder',
        component: EmailFinder
    },
    {
        path: '/tools/email-verifier',
        component: EmailVerifier
    },
    {
        path: '/tools/domain-finder',
        component: DomainFinder
    },
    {
        path: '/tools/domain-verifier',
        component: DomainVerifier
    }
]

export default toolsRoutes;