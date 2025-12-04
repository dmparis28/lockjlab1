// Filename: app/components/ThemeSelector.jsx
'use client';

import { useTheme } from '../context/ThemeContext';
import Icon from './Icon';

export default function ThemeSelector() {
  const { activeTheme, switchTheme, themes } = useTheme();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(themes).map((theme) => {
          const isActive = activeTheme === theme.id;
          
          return (
            <button
              key={theme.id}
              onClick={() => switchTheme(theme.id)}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                isActive 
                  ? 'border-[var(--accent)] ring-2 ring-[var(--accent)] ring-opacity-20' 
                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
              }`}
            >
              {/* Preview Colors */}
              <div className="flex gap-2 mb-3">
                <div 
                  className="w-12 h-12 rounded-lg shadow-inner"
                  style={{ backgroundColor: theme.preview.bg }}
                />
                <div 
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: theme.preview.accent }}
                />
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: theme.preview.bg, color: theme.preview.text }}
                >
                  Aa
                </div>
              </div>
              
              {/* Theme Info */}
              <h3 className="font-semibold text-[var(--text-primary)]">{theme.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{theme.description}</p>
              
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <Icon name="Check" className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Current Theme Info */}
      <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
        <div className="flex items-center gap-2 text-sm">
          <Icon name="Palette" className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[var(--text-secondary)]">Active theme:</span>
          <span className="font-medium text-[var(--text-primary)]">{themes[activeTheme]?.name}</span>
        </div>
      </div>
    </div>
  );
}
