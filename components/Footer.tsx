
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary border-t border-border-color p-4 text-center text-text-secondary text-sm">
            <p>&copy; {new Date().getFullYear()} 🧑‍💻Firdaush Programming Hub. All Rights Reserved.</p>
            <p className="mt-2">
                Developed by Firdaush | <a href="mailto:firdausanwer909@gmail.com" className="text-accent hover:underline">firdausanwer909@gmail.com</a>
            </p>
        </footer>
    );
};