"use client";

import { useEffect, useState } from 'react'
import moment from 'moment';

const targetTime = moment("2023-10-22");

const CountDownTimer = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex -sm:mt-8 gap-2 md:gap-8">
      <DateWrapper time={"days"} val={targetTime.diff(currentTime, "days")} />
      <DateWrapper time={"hours"} val={timeBetween.hours()} />
      <DateWrapper time={"mins"} val={timeBetween.minutes()} />
      <DateWrapper time={"secs"} val={timeBetween.seconds()} />
    </div>
  )
}

const DateWrapper = ({time, val}: {time: string, val: number}) => {
  return (
    <div className="border rounded-lg text-center py-2 md:py-4 px-2 md:px-6 w-24">
      <h1 className="font-medium text-xl md:text-3xl font-halyard">{val}</h1>
      <p className="text-xs font-thin">{time}</p>
    </div>
  )
}

export default CountDownTimer
