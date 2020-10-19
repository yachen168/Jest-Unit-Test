function getRestTime(speedPerSecond_Turtle, speedPerSecond_Rabbit, distance) {
  const costTime_Turtle = distance / speedPerSecond_Turtle;
  const costTime_Rabbit = distance / speedPerSecond_Rabbit;
  return Math.floor(costTime_Turtle - costTime_Rabbit);
}

module.exports = getRestTime;
