import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Java foundation shell', () => {
  it('presents the Java identity and purpose', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Java' })).toBeInTheDocument();
    expect(screen.getByText('Learn Java by writing, tracing, and reasoning about real programs.')).toBeInTheDocument();
  });

  it('provides primary navigation', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Roadmap' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contribute' })).toBeInTheDocument();
  });

  it('renders an intentional not-found page', () => {
    window.location.hash = '#/missing';
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return home' })).toBeInTheDocument();
  });
});
