'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Month: 'Jan 20',
    Sales: 2890,
    Profit: 2400,
    Price: 5000
  },
  {
    Month: 'Jan 21',
    Sales: 4000,
    Profit: 1000,
    Price: 0
  },
  {
    Month: 'Jan 22',
    Sales: 3000,
    Profit: 4000,
    Price: 6000
  }
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Sales', 'Profit', 'Price']}
        index="Month"
        colors={['indigo', 'fuchsia', 'red']}
        valueFormatter={(number: number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
