export interface Role {
    id: number;
    name: 'Admin' | 'Sudo' | 'Student'| 'Instructor'| 'Guest'; // Spécification des rôles possibles
}

export interface User {
    role: Role; // Utilisation de l'interface Role
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    image: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    role: string;
    identity: string;
};

declare module 'path' { // Module name.
    export function normalize(p: string): string; // API exposed by the module.
    export function join(...paths: any[]): string;
}
