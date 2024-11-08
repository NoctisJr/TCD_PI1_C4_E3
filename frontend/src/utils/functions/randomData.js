const randomData = (data) => {
  const random = data.sort(() => 0.5 - Math.random())
  return random
};

export default randomData;
