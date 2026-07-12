// Card.tsx
import React from 'react';
import '../styles/card.css'; // Standard or utility-based styles
import type { CardProps } from '../types/Card.types';

export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    imageUrl,
    imageAlt = 'Card image',
    children,
    isHoverable = false,
    primaryActionLabel,
    onPrimaryAction,
}) => {
    // Dynamically attach modifier classes based on typed booleans
    const cardClassName = `ui-card ${isHoverable ? 'ui-card--hoverable' : ''}`;

    return (
        <article className={cardClassName}>
            {imageUrl && (
                <div className="ui-card__image-wrapper">
                    <img src={imageUrl} alt={imageAlt} className="ui-card__image" />
                </div>
            )}

            <div className="ui-card__content">
                <header className="ui-card__header">
                    <h2 className="ui-card__title">{title}</h2>
                    {subtitle && <p className="ui-card__subtitle">{subtitle}</p>}
                </header>

                {children && <div className="ui-card__body">{children}</div>}

                {primaryActionLabel && onPrimaryAction && (
                    <footer className="ui-card__footer">
                        <button
                            onClick={onPrimaryAction}
                            className="ui-card__button"
                            type="button"
                        >
                            {primaryActionLabel}
                        </button>
                    </footer>
                )}
            </div>
        </article>
    );
};
