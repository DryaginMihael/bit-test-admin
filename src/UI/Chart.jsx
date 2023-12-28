import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
  Area,
} from 'recharts';

const COLORS = {
  tick: '#4b5570',
  grid: '#1d263b',
  line: '#1b5bda',
  fill: '#13203a',
};

function CustomAxisTick({ x, y, payload, textAnchor }) {
  return (
    <Text
      x={x}
      y={y}
      stroke={COLORS.tick}
      fontSize={10}
      textAnchor={textAnchor}
    >
      {payload.value}
    </Text>
  );
}

function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid stroke={COLORS.grid} />
        <XAxis
          dataKey="name"
          tick={<CustomAxisTick textAnchor="end" />}
          stroke={COLORS.grid}
        />
        <YAxis
          orientation="right"
          tick={<CustomAxisTick />}
          stroke={COLORS.grid}
        />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          stroke={COLORS.line}
          activeDot={{ r: 8 }}
          fill={COLORS.fill}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
