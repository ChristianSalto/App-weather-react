import React from 'react';
import ForecastChart from './ForecastChart';
import { render, screen } from '@testing-library/react';

const data = [
  {
    dayHour: 'Jue 18',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Vie 28',
    min: 12,
    max: 24,
  },
  {
    dayHour: 'Sab 1',
    min: 15,
    max: 19,
  },
  {
    dayHour: 'Lun 9',
    min: 5,
    max: 11,
  },
  {
    dayHour: 'Dom 12',
    min: 20,
    max: 27,
  },
  {
    dayHour: 'Mie 26',
    min: 11,
    max: 18,
  },
];

test('ForecastChart render', async () => {
  const { getByText } = render(<ForecastChart data={data} />);
  screen.debug();

  const weekDay = await getByText('Sab 1', { level: 2 });
  console.log(weekDay);
  // expect(weekDay).toBeInTheDocument();
});
