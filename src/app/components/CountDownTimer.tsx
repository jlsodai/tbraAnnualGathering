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
    <div className="flex -sm:mt-8 gap-8">
      <DateWrapper time={"days"} val={targetTime.diff(currentTime, "days")} />
      <DateWrapper time={"hours"} val={timeBetween.hours()} />
      <DateWrapper time={"minutes"} val={timeBetween.minutes()} />
      <DateWrapper time={"seconds"} val={timeBetween.seconds()} />
    </div>
  )
}

const DateWrapper = ({time, val}: {time: string, val: number}) => {
  return (
    <div className="border rounded-lg text-center py-4 px-6 w-24">
      <h1 className="font-medium text-3xl font-halyard">{val}</h1>
      <p className="text-xs font-thin">{time}</p>
    </div>
  )
}

export default CountDownTimer
