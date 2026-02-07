import type { ReactNode } from 'react';

export default function H1Text({ children }: { children: ReactNode }) {
    return (
        <h1 className="font-bold text-4xl pt-5">{children}</h1>
    );
}

