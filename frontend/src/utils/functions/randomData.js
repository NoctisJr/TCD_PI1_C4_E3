const randomData = (data) => {
  const random = data.short(() => 0.5 - Math.random())
  return random
};

export default randomData;
