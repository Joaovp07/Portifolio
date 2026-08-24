import React from 'react';

export const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-16 text-center md:text-left">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                <span className="text-primary font-mono text-2xl">#</span>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 max-w-2xl text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
