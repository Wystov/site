import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EventCard } from './event-card';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('EventCard', () => {
  const mockProps = {
    eventType: 'Meetup',
    title: 'Test Event',
    organizedBy: 'John Doe',
    organization: 'Tech Talks',
    date: 'Dec 25, 2023',
    time: '13:00',
    type: 'Offline',
    address: '123 Main St',
    city: 'Metropolis City',
    href: 'http://test.com',
  };

  it('should render correctly', () => {
    renderWithRouter(<EventCard {...mockProps} />);

    expect(screen.getByText(mockProps.eventType)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.organizedBy)).toBeInTheDocument();
    expect(screen.getByText(mockProps.organization)).toBeInTheDocument();

    // verifying date/time/type individually
    expect(screen.getByText(mockProps.date, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.time, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.type, { exact: false })).toBeInTheDocument();

    // verifying address/city individually
    expect(screen.getByText(mockProps.address, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.city, { exact: false })).toBeInTheDocument();

    const detailsLink = screen.getByRole('link', { name: /View details/i });

    expect(detailsLink).toHaveAttribute('href', mockProps.href);
  });
});
