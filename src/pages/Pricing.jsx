// Pricing.jsx — Page component that assembles pricing cards with plan data.

import { useEffect, useState } from 'react';
import PricingCard from '../components/PricingCard/PricingCard';

function Pricing() {
    const getInitialTheme = () => {
        const saved = window.localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-sm text-text-secondary bg-card px-4 py-2 rounded-lg shadow-sm">
                <p>
                    <strong className="text-text-primary">React App</strong> — running with Vite + Tailwind Tokens
                </p>
                <button
                    type="button"
                    className="rounded-full bg-btn-secondary px-3 py-1 text-xs font-medium text-text-primary transition-colors duration-200 hover:bg-btn-secondary-hover"
                    onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                >
                    Theme: {theme === 'dark' ? 'Dark' : 'Light'}
                </button>
            </div>

            <div className="flex gap-6 justify-center items-start">
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
            </div>
        </>
    );
}

export default Pricing;
