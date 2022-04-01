import React from "react";

export default function DateTime(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = props.dateInfo;
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `The time is ${hours}:${minutes} on ${days[day]}`;
}
