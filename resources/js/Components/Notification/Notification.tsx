import React, { useEffect, useState } from 'react';

interface NotificationProps {
    type: 'success' | 'error' | 'info' | 'warning'; // Ajout de types supplémentaires
    message: string;
    onClose: () => void;
    duration?: number; // Durée personnalisable
}

export default function Notification({ type, message, onClose, duration = 5000 }: NotificationProps) {
    const [visible, setVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    // Fermeture automatique après la durée spécifiée
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    // Gestion de la fermeture avec animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setVisible(false);
            onClose();
        }, 300); // Temps pour l'animation de sortie
    };

    if (!visible) return null;

    // Couleurs et icônes en fonction du type
    const notificationStyles = {
        success: {
            bg: 'bg-green-100',
            border: 'border-green-400',
            text: 'text-green-700',
            icon: '✅',
        },
        error: {
            bg: 'bg-red-100',
            border: 'border-red-400',
            text: 'text-red-700',
            icon: '❌',
        },
        info: {
            bg: 'bg-blue-100',
            border: 'border-blue-400',
            text: 'text-blue-700',
            icon: 'ℹ️',
        },
        warning: {
            bg: 'bg-yellow-100',
            border: 'border-yellow-400',
            text: 'text-yellow-700',
            icon: '⚠️',
        },
    };

    const { bg, border, text, icon } = notificationStyles[type];

    return (
        <div
            role="alert"
            className={`fixed top-4 right-4 border ${bg} ${border} ${text} px-4 py-3 rounded-lg shadow-lg flex items-center justify-between transform transition-all duration-300 ${
                isClosing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
        >
            <div className="flex items-center">
                <span className="mr-2">{icon}</span>
                <span>{message}</span>
            </div>
            <button
                onClick={handleClose}
                className="ml-4 text-lg font-bold focus:outline-none"
                aria-label="Fermer la notification"
            >
                &times;
            </button>
        </div>
    );
}
