let images = [
    "https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg",
    "https://i.pinimg.com/550x/52/10/e4/5210e4858e732f40ef13e5010d52b1f4.jpg",
    "https://i.pinimg.com/736x/44/08/9e/44089e56f4c65b00fffb914361f10cf4.jpg"
  ];
  let slide = document.getElementById("slider");
  const slider = () => {
    let i = 0;
    setInterval(function () {
      i = i < images.length - 1 ? ++i : 0;
      slide.src = images[i];
    }, 2000);
  };
  slide.addEventListener("load", slider());