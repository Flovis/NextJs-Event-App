import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

const page = () => {
    return (
        <div>
            <Link href="/sign-in">
                <Button>Login</Button>
            </Link>
        </div>
    );
};

export default page;