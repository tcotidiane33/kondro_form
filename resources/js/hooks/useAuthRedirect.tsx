import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const useAuthRedirect = () => {
    const { auth } = usePage().props;
    const user = auth.user;

    useEffect(() => {
        if (user) {
            console.log(`User role: ${user.role}`);
            if (user.role === 'Admin') {
                Inertia.visit('/admin/dashboard');
            } else if (user.role === 'Instructor') {
                Inertia.visit('/instructor/dashboard');
            } else {
                Inertia.visit('/students/dashboard');
            }
        }
    }, [user]);
};

export default useAuthRedirect;
