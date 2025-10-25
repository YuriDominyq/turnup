import { useCallback } from 'react';

export function useInitials() {
    return useCallback((firstName?: string | null, lastName?: string | null): string => {
        const firstInitial = firstName?.charAt(0).toUpperCase() || '';
        const lastInitial = lastName?.charAt(0).toUpperCase() || '';

        return `${firstInitial}${lastInitial}`;
    }, []);
}
