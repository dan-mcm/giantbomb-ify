var chromeExtensionId = "iaimgpoecjggdpdlmlhhidciphppgfcf"

var images = document.getElementsByTagName('img');

var gb_images = [
  "https://static.giantbomb.com/uploads/scale_medium/18/187968/2743737-yplezwp.jpg", //drew headset
  "https://pbs.twimg.com/media/BpxlFaHCYAIQvvY.jpg", //brad mohawk
  "https://static.giantbomb.com/uploads/original/7/72053/2671808-rorie.png", //rorie glasses
  "http://static.giantbomb.com/uploads/original/13/139155/2536312-2379004-jeff_headshake.gif", //jeff disapproval
  "http://static.giantbomb.com/uploads/original/17/179932/2783337-4310291077-prUNU.png", // dan creep
  "https://static.giantbomb.com/uploads/original/2/23893/2455096-1935536898-10875.jpg", // vinny alpha protocol
  "http://www.deepfreeze.it/img/j_headshots/alex_navarro.jpg", // alex smile
  "https://magnettheater.com/oldImages/headshots/large_abbyrussell_2017.jpg", // abby face
  "https://static.giantbomb.com/uploads/original/23/233047/2986879-2776158-0471975364-o4gps.gif", // jason approval
  "https://78.media.tumblr.com/e0b2ba4e1fd8b1323b4e9c88477db345/tumblr_oshzt0nUPs1u7bbkho1_400.gif", // ben disapproval
  `chrome-extension://${chromeExtensionId}/images/ryan.jpg` // local file example - ryan
]

for (var i = 0, l = images.length; i < l; i++) {
  var index = Math.floor(Math.random() * Math.floor(i%gb_images.length+1))

  // GB implementation (default)
  images[i].src = gb_images[index];

  // Nicholas Cage implementation
  // images[i].src = "https://www.placecage.com/" + images[i].width + "/" + images[i].height

  // Bill Murray Implementation
  // images[i].src = "https://fillmurray.com/" + images[i].width + "/" + images[i].height

  var prev = i
}
