export const lightStyle = [
    // Base map
    { elementType: 'geometry', stylers: [{ color: '#f8fafc' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#374151' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#f8fafc', weight: 2 }] },

    // Points of Interest
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#e5e7eb' }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d1fae5' }] },

    // Roads
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
    { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#e5e7eb' }] },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#fcd34d' }] },
    { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#92400e', weight: 'bold' }] },
    { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#6b7280' }] },

    // Water
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#bfdbfe' }] },
    { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#1e40af' }] },
];

export const darkStyle = [
    // Base map
    { elementType: 'geometry', stylers: [{ color: '#121212' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#e5e7eb' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#121212', weight: 2 }] },

    // Points of Interest
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#1f1f1f' }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#064e3b' }] },

    // Roads
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
    { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#383838' }] },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dc2626' }] },
    { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#fca5a5', weight: 'bold' }] },
    { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }] },

    // Water
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
    { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#60a5fa' }] },
];
