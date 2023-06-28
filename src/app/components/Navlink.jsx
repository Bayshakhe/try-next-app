'use client'

import Link from 'next/link';
import React from 'react';
import {usePathname} from 'next/navigation'
import classNames from '@/utils/classNames';

const Navlink = ({children, exact = false, href, activeClassname, ...props}) => {
    const path = usePathname()
    const active = exact ? path === href : path.startsWith(href)
    const classes = classNames(props.className, active && activeClassname)

    if(classes){
        props.className = classes
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default Navlink;