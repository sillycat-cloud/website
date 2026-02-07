import type { ReactNode } from 'react';

export default function H3Text({ children }: { children: ReactNode }) {
    return (
        <h3 className="py-1 -my-2.5 font-bold text-2xl pt-0">{children}</h3>
    );
}

