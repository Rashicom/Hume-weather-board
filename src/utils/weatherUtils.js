// Weather condition options
const weatherConditions = [
  { condition: "Sunny", icon: "☀️" },
  { condition: "Partly Cloudy", icon: "⛅" },
  { condition: "Rainy", icon: "🌧️" },
  { condition: "Cloudy", icon: "☁️" },
  { condition: "Thunderstorms", icon: "⛈️" }
];

export const getNext7Days = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    
    return {
      date: date.toLocaleDateString(undefined, {
        weekday: 'short',
        month: "short",
        day: "numeric",
      }),
      temp: Math.floor(25 + Math.random() * 6), // Random temp 25–30
      condition: randomCondition.condition,
      icon: randomCondition.icon,
      humidity: Math.floor(40 + Math.random() * 40), // 40–80%
    };
  });
}; 