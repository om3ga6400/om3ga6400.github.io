const links = [
  "https://www.youtube.com/@jacktom67",
  "https://www.youtube.com/@minbitt",
  "https://www.youtube.com/@offsrambledegg",
  "https://www.youtube.com/@unknownspy",
  "https://www.youtube.com/@minbitt",
  "https://www.youtube.com/@crispytyph",
  "https://www.youtube.com/@npesta",
  "https://www.youtube.com/@dougdougdoug",
  "https://youtu.be/pvuN_WvF1to?si=FiiBERGL06Um1tiM&t=90",
  "https://github.com/thedjchi/Shizuku",
  "https://github.com/TestcordDev/TestCord",
];
const goToRandomLink = () => (location.href = links[Math.floor(Math.random() * links.length)]);
