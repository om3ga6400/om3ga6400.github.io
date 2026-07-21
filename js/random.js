const links = [
  "https://www.youtube.com/@jacktom67",
  "https://www.youtube.com/@minbitt",
  "https://www.youtube.com/@offsrambledegg",
  "https://www.youtube.com/@unknownspy",
  "https://www.youtube.com/@crispytyph",
  "https://www.youtube.com/@npesta",
  "https://www.youtube.com/@wabie",
  "https://www.youtube.com/@dougdougdoug",
  "https://www.youtube.com/@Vsauce",
  "https://www.youtube.com/@ibitgsm",
  "https://www.youtube.com/@veritasium",
  "https://www.youtube.com/@nilered",
  "https://www.youtube.com/@diemarchive",
  "https://youtu.be/pvuN_WvF1to?si=FiiBERGL06Um1tiM&t=90",
  "https://github.com/thedjchi/Shizuku",
  "https://github.com/TestcordDev/TestCord",
];
const goToRandomLink = () => (location.href = links[Math.floor(Math.random() * links.length)]);
