let imageList = [
  "https://i.imgur.com/VV9RRt9.png",
  "https://i.imgur.com/6lbiaol.png",
  "https://i.imgur.com/5YoECcy.png",
  "https://i.imgur.com/SyKlsji.png",
  "https://i.imgur.com/z7rPs4s.png",
  "https://i.imgur.com/k3vF9Zn.png",
  "https://i.imgur.com/6UtQOwv.png",
  "https://i.imgur.com/IXjIw3Q.png",
  "https://i.imgur.com/VV9RRt9.png",
  "https://i.imgur.com/wFgIbqI.png",
  "https://i.imgur.com/aIKTyTj.png",
  "https://i.imgur.com/AgBHcsJ.png",
  "https://i.imgur.com/3uY4bCd.png"
];

  //
  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = imageList[Math.floor(Math.random() * imageList.length)];
  }

  const headers = document.getElementsByTagName("h2");
  for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "I love The Simpsons";
  }