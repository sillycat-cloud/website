import type { ReactNode } from 'react';

export default function H1Text({ children }: { children: ReactNode }) {
    return (
        <h1 className="py-1 -my-2.5 font-bold text-2xl pt-0">{children}</h1>
    );
}

