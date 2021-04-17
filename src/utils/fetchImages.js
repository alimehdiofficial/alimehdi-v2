const fetchImages = (id) => {
  if (id === "1") {
    return [
      "/tesla/tesla-1.png",
      "/tesla/tesla-2.png",
      "/tesla/tesla-3.png",
      "/tesla/tesla-4.png",
      "/tesla/tesla-5.png",
    ];
  } else if (id === "2") {
    return [
      "/starbucks/starbucks-1.png",
      "/starbucks/starbucks-2.png",
      "/starbucks/starbucks-3.png",
      "/starbucks/starbucks-4.png",
      "/starbucks/starbucks-5.png",
      "/starbucks/starbucks-6.png",
      "/starbucks/starbucks-7.png",
      "/starbucks/starbucks-8.png",
    ];
  } else if (id === "3") {
    return [
      "/google/google-1.png",
      "/google/google-2.png",
      "/google/google-3.png",
    ];
  }
};

export default fetchImages;
