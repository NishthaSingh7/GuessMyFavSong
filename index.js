var numOfButtons = document.querySelectorAll(".box").length;

//To apply a timer on a button click
document.getElementById("guessStart").addEventListener("click", function() {
  var timeleft = 30;

  var downloadTimer = setInterval(function function1() {
    document.getElementById("countdown").innerHTML = timeleft +
      " " + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
    }
  }, 1000);


  console.log(countdown);
});

for (var i = 0; i < numOfButtons; i++) {

  document.querySelectorAll(".box")[i].addEventListener("click", makeSound);

  document.querySelectorAll(".box")[i].addEventListener("click", songfunction);
  
}





function myFunction1() {
  var myWindow = window.open("", "", "width=500, height=300");
  myWindow.document.write("<h1 style='font-family: sans-serif;'><u>Game Rules</u></h1>");
  myWindow.document.write("<h2 style='font-family: sans-serif'>1) Begin the game by pressing the  <br> <em> 'Play button' </em></h2>");
  myWindow.document.write("<h2 style='font-family: sans-serif'>2) Click on any box to play the sound !</h2>");
  myWindow.document.write("<h2 style='font-family: sans-serif'>3) You will have 30 seconds to guess the song before the answer is displayed !</h2>");
  myWindow.document.write("<h3 style='color:red; font-family: sans-serif'>Refresh the site to play again !</h3>");
  myWindow.blur();
}
function makeSound() {

  
  //To add a new class
  this.querySelectorAll('.a').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song1.mp3')
    audio.play();
  });

  this.querySelectorAll('.b').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song2.mp3')
    audio.play();
  });

  this.querySelectorAll('.c').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song3.mp3')
    audio.play();
  });

  this.querySelectorAll('.d').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song4.mp3')
    audio.play();
  });

  this.querySelectorAll('.e').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song5.mp3')
    audio.play();
  });

  this.querySelectorAll('.f').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song6.mp3')
    audio.play();
  });

  this.querySelectorAll('.g').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song7.mp3')
    audio.play();
  });

  this.querySelectorAll('.h').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song8.mp3')
    audio.play();
  });

  this.querySelectorAll('.i').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song9.mp3')
    audio.play();
  });

  this.querySelectorAll('.j').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song10.mp3')
    audio.play();
  });

  this.querySelectorAll('.k').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song11.mp3')
    audio.play();
  });

  this.querySelectorAll('.l').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song12.mp3')
    audio.play();
  });

  this.querySelectorAll('.m').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song13.mp3')
    audio.play();
  });

  this.querySelectorAll('.n').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song14.mp3')
    audio.play();
  });

  this.querySelectorAll('.o').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song15.mp3')
    audio.play();
  });

  this.querySelectorAll('.p').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song16.mp3')
    audio.play();
  });

  this.querySelectorAll('.q').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song17.mp3')
    audio.play();
  });

  this.querySelectorAll('.r').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song18.mp3')
    audio.play();
  });

  this.querySelectorAll('.s').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song19.mp3')
    audio.play();
  });

  this.querySelectorAll('.t').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song20.mp3')
    audio.play();
  });

  this.querySelectorAll('.u').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song21.mp3')
    audio.play();
  });

  this.querySelectorAll('.v').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song22.mp3')
    audio.play();
  });

  this.querySelectorAll('.w').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song23.mp3')
    audio.play();
  });

  this.querySelectorAll('.x').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song24.mp3')
    audio.play();
  });

  this.querySelectorAll('.y').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song25.mp3')
    audio.play();
  });

  this.querySelectorAll('.z').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song26.mp3')
    audio.play();
  });

  this.querySelectorAll('.z1').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song27.mp3')
    audio.play();
  });

  this.querySelectorAll('.z2').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song28.mp3')
    audio.play();
  });

  this.querySelectorAll('.z3').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song29.mp3')
    audio.play();
  });

  this.querySelectorAll('.z4').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song30.mp3')
    audio.play();
  });
  
  this.querySelectorAll('.z5').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song31.mp3')
    audio.play();
  });

  this.querySelectorAll('.z6').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song32.mp3')
    audio.play();
  });

  this.querySelectorAll('.z7').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song33.mp3')
    audio.play();
  });

  this.querySelectorAll('.z8').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song34.mp3')
    audio.play();
  });

  this.querySelectorAll('.z9').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song35.mp3')
    audio.play();
  });

  this.querySelectorAll('.z10').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song36.mp3')
    audio.play();
  });
  this.querySelectorAll('.z11').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song37.mp3')
    audio.play();
  });
  this.querySelectorAll('.z12').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song38.mp3')
    audio.play();
  });
  this.querySelectorAll('.z13').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song39.mp3')
    audio.play();
  });
  this.querySelectorAll('.z14').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song40.mp3')
    audio.play();
  });
  this.querySelectorAll('.z15').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song41.mp3')
    audio.play();
  });
  this.querySelectorAll('.z16').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song42.mp3')
    audio.play();
  });
  this.querySelectorAll('.z17').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song43.mp3')
    audio.play();
  });
  this.querySelectorAll('.z18').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song44.mp3')
    audio.play();
  });
  this.querySelectorAll('.z19').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song45.mp3')
    audio.play();
  });
  this.querySelectorAll('.z20').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song46.mp3')
    audio.play();
  });
  this.querySelectorAll('.z21').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song47.mp3')
    audio.play();
  });
  this.querySelectorAll('.z22').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song48.mp3')
    audio.play();
  });
}

function songfunction() {
  
 
  $("#songresult").hide().delay(29000).fadeIn();
  this.querySelectorAll('.a').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tum Hi Ho' by Arjit Singh";
  });
  this.querySelectorAll('.b').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Raabta' by Arjit Singh";
  });
  this.querySelectorAll('.c').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tu Jo Hain'(From 'Mr. X') by Ankit Tiwari";
  });
  this.querySelectorAll('.d').forEach(function() {
      document.getElementById("songresult").innerHTML = "This song is 'Pal Pal Dil Ke Paas' by Parampara Thakur, Arijit Singh";
  });
  this.querySelectorAll('.e').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Kuchh Khaas'(From 'Fashion') by Neha Bhasin, Mohit Chauhan";
  });
  this.querySelectorAll('.f').forEach(function() {
     document.getElementById("songresult").innerHTML = "This song is 'Afeemi'(From 'Meri Pyaari Bindu') by Sanah Moidutty, Jigar Saraiya";
  });
  this.querySelectorAll('.g').forEach(function() {
      document.getElementById("songresult").innerHTML = "This song is 'Darkhaast' by Arijit Singh, Sunidhi Chauhan";
  });
  this.querySelectorAll('.h').forEach(function() {
        document.getElementById("songresult").innerHTML = "This song is 'Sab Tera'(From 'Baaghi') by Armaan Malik, Shraddha Kapoor";
  });
  this.querySelectorAll('.i').forEach(function() {
        document.getElementById("songresult").innerHTML = "This song is 'Kabhi Jo Badal Barse' by Arijit Singh";
  });
  this.querySelectorAll('.j').forEach(function() {
        document.getElementById("songresult").innerHTML = "This song is 'Kya Mujhe Pyaar Hai' by KK";
  });
  this.querySelectorAll('.k').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Beete Lamhein' by KK, Kshitij Tarey";

  });
  this.querySelectorAll('.l').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Shayad'(From 'Love Aaj Kal') by Pritam, Arijit Singh";

  });
  this.querySelectorAll('.m').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Pee Loon' by Pritam";

  });
  this.querySelectorAll('.n').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Chahun Mai Ya Naa' by Palak Muchhal, Arijit Singh";
  
  });
  this.querySelectorAll('.o').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tu Har Lamha' by Bobby-Imran, Arijit Singh";

  });
  this.querySelectorAll('.p').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Kaun Tujhe' by Armaan Malik";

  });
  this.querySelectorAll('.q').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Aankhon Mein Teri' by KK";

  });
  this.querySelectorAll('.r').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Dil ko Tumse Pyaar Hua' by Roop Kumar Rathod";

  });
  this.querySelectorAll('.s').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tum Se Hi' by Mohit Chauhan";

  });
  this.querySelectorAll('.t').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Toh Phir Aao' by Mustafa Zahid";

  });
  this.querySelectorAll('.u').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Mitwa' by Shankar Ehsaan Loy & Shankar Mahadevan";

  });
  this.querySelectorAll('.v').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tera Mera Rishta' by Mustafa Zahid";

  });
  this.querySelectorAll('.w').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Itna Tumhe' by Yaseer Desai,Shashaa Tirupati";

  });
  this.querySelectorAll('.x').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Hey ya !' by Clinton Cerejo, Shankar Mahadevan & Loy Mendonsa";

  });
  this.querySelectorAll('.y').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Kabira' by Pritam, Harshdeep & Arijit Singh";

  });
  this.querySelectorAll('.z').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tu hi Meri Shab Hai' by KK";

  });
  this.querySelectorAll('.z1').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Yeh Dooriyan' by Pritam & Mohit Chauhan";

  });
  this.querySelectorAll('.z2').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Khuda Jaane' by KK & Shilpa Rao";

  });
  this.querySelectorAll('.z3').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Kaho Na Kaho' by Amir Jamal";

  });
  this.querySelectorAll('.z4').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Hale Dil' by Emraan Hashmi";

  });
  this.querySelectorAll('.z5').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Akhiyaan Milavanga' by Arijit Singh & Sruthy Sasidharan";

  });
  this.querySelectorAll('.z6').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Sanam Teri Kasam' by Ankit Tiwari & Palak Muchhal";

  });
  this.querySelectorAll('.z7').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Teri Hogaiyaan 2' by Vishal Mishra";

  });
  this.querySelectorAll('.z8').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Saajna' by Falak Shabbir";

  });
  this.querySelectorAll('.z9').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Phisal Jaa Tu'(From 'Haseen Dilruba') by Abhijeet Srivastava";

  });
  this.querySelectorAll('.z10').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Pehla Nasha' by Udit Narayan & Sadhana Sargam";

  });
  this.querySelectorAll('.z11').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Tum Ho ' by Mohit Chauhan & Suzanne D'Mello";

  });
  this.querySelectorAll('.z12').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Pyaar Toh Tha'(From 'Bala') by Sachin-Jigar , Jubin Nautiyal & Asees Kaur";

  });
  this.querySelectorAll('.z13').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Ride It(Kya Yehi Pyar Hai)' by Jay Sean";

  });
  this.querySelectorAll('.z14').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Kinna Sona' by Sunil Kamath";

  });
  this.querySelectorAll('.z15').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Jaavedaan Hai' by KK & Suzanne D'Mello";

  });
  this.querySelectorAll('.z16').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Soniye Dil Nahi' by Ankit Tiwari & Shruti Pathak";

  });
  this.querySelectorAll('.z17').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Zindagi Se'(From 'Raaz 3') by Shafaqat Ali";

  });
  this.querySelectorAll('.z18').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Itna Pyaar Karo' by Shreya Ghoshal";

  });
  this.querySelectorAll('.z19').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Akhiyaan' by Neha Kakkar, Tony Kakkar & Bohemia";

  });
  this.querySelectorAll('.z20').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Manjha' by Vishal Mishra";

  });
  this.querySelectorAll('.z21').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Mehfooz' by Arko";

  });
  this.querySelectorAll('.z22').forEach(function() {
    document.getElementById("songresult").innerHTML = "This song is 'Excuses' by Intense Feat.AP Dhillon & Gurinder Gill";

  });
}


/*
  this.querySelectorAll('.z5').forEach(function(element) {
    element.className += " rotate";
    var audio = new Audio('sounds/song31.mp3')
    audio.play();
  });
*/


//To add sound to your website
//var audio=new Audio('sounds/01song.mp3')
//audio.play();
