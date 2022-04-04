export default function ForecastDayFormat(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = props.timestamp;
  let day = date.getDay();
  return `${days[day]}`;
}
