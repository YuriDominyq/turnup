import { useEffect, useState } from 'react';
import { Text } from './ui/text';

export function AppVersion() {
    const [version, setVersion] = useState('');

    useEffect(() => {
        fetch('/version')
            .then(res => res.json())
            .then(data => setVersion(data.version))
            .catch(() => setVersion('1.0.0'));
    }, []);

    return (
        <Text size="xs" className="mt-2 flex items-center justify-center">
            v{version} TurnUp
        </Text>
    );
}
