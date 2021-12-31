//~~~~~~~~~~//
//~~~AVA~~~//
//~~~~~~~~//
// let imageList = [
//     "https://biographymask.com/wp-content/uploads/2020/10/Ava-Rose.jpg",
//     "https://pbs.twimg.com/profile_images/1281995898227249154/fkkWz0xs_400x400.jpg",
//     "https://starsgab.com/wp-content/uploads/2020/10/75272067_451201595820583_5676222549784950576_n.jpg",
//     "https://socialstarswiki.com/wp-content/uploads/2019/11/Ava-Rose.jpg",
//     "https://bookingagentinfo.com/wp-content/uploads/2020/01/Ava-Rose-Contact-Information.jpg",
//     "https://celebslifereel.com/wp-content/uploads/2020/02/Ava-Rose.jpg",
//     "https://www.mixedarticle.com/wp-content/uploads/2019/11/Ava-Rose-Photo-819x1024.jpg",
//     "https://i.scdn.co/image/ab67706c0000bebb8c6ce88323db5ecb98fd7cc4",
//     "https://www.readingbio.com/wp-content/uploads/2020/02/Ava-Rose.jpeg",
//     "https://dailyinet.com/wp-content/uploads/2020/10/AvaLogo_1200x1200-1024x1024.png",
//     "https://preview.redd.it/sz41xnf29kl61.jpg?width=640&crop=smart&auto=webp&s=2d59ad93963c0606417bef27c61cb86546eb1058",
//     "https://i.pinimg.com/236x/2f/40/ab/2f40ab6c3b19f36ee914a659da4207b2.jpg",
//   ];
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

  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = imageList[Math.floor(Math.random() * imageList.length)];
  }

  const headers = document.getElementsByTagName("h2");
  for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "I love The Simpsons";
  }