/**
 * Weather passed dateTime is in future date or not
 * @param {Date} date
 * @returns Boolean
 */
const isFutureDate = (date) => {
  const timeInDate = date.getTime(),
    nowTime = new Date().getTime();
  return timeInDate > nowTime;
};

/**
 * Get the time difference from current time in seconds
 * @param {Date} date
 * @returns {Number} seconds
 */
const timeDifferenceFromNow = (date) => {
  const now = new Date().getTime(),
    futureTime = date.getTime();

  const differenceInMs = futureTime - now;
  const differenceInSeconds = Math.round(differenceInMs / 1000);

  return differenceInSeconds;
};

/**
 * convert seconds into a relative time difference string
 * @param {Number} seconds
 * @returns {String} relative time ex: 1 hour, 1 hour 30 minutes, 2 months
 */
const secondsToRelativeTime = (seconds) => {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
  const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
  const SECONDS_IN_WEEK = SECONDS_IN_DAY * 7;
  const SECONDS_IN_MONTH = SECONDS_IN_WEEK + SECONDS_IN_DAY * 2;

  if (seconds >= SECONDS_IN_MONTH)
    return `in ${Math.round(seconds / SECONDS_IN_MONTH)} months`;
  else if (seconds >= SECONDS_IN_WEEK)
    return `in ${Math.round(seconds / SECONDS_IN_WEEK)} weeks`;
  else if (seconds >= SECONDS_IN_DAY)
    return `in ${Math.round(seconds / SECONDS_IN_DAY)} days`;
  else if (seconds >= SECONDS_IN_HOUR)
    return `in ${Math.round(seconds / SECONDS_IN_HOUR)} hours`;
  else if (seconds >= SECONDS_IN_MINUTE)
    return `in ${Math.round(seconds / SECONDS_IN_MINUTE)} minutes`;
  else if (seconds >= 1) return `${seconds} seconds`;
  else return `times up!`;
};

/**
 * get relative time difference string for a date
 * @param {Date} date
 * @returns {String} 3 hour, 34 minutes, 3 weeks
 */
const getRelativeTimeDifferenceFromNow = (date) => {
  const timeDifferenceInSeconds = timeDifferenceFromNow(date);
  const relativeTimeString = secondsToRelativeTime(timeDifferenceInSeconds);
  return relativeTimeString;
};
export {
  getRelativeTimeDifferenceFromNow,
  isFutureDate,
  secondsToRelativeTime,
  timeDifferenceFromNow,
};
