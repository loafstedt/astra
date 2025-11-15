const scoreResume = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 21) + 80; // 80 - 100
      resolve(score);
    }, 800);
  });
};

export default scoreResume;
