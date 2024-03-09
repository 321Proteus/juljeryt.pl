  alert("Hey, I just wanted to say that this site is not a virus, I do not have access to the ip history of this site (only api), the data about your country and city in the intro are taken from your IP address and may not be correct");

  var animatedTitle = [
    "j",
    "ju",
    "jul",
    "julj",
    "julje",
    "juljer",
    "juljery",
    "juljeryt",
    "juljeryt.",
    "juljeryt.p",
    "juljeryt.pl",
    "juljeryt.p",
    "juljeryt.",
    "juljeryt",
    "juljery",
    "juljer",
    "julje",
    "julj",
    "jul",
    "ju",
    "j",
    
  ];

  function animateTitle() {
    var index = 0;
    setInterval(function() {
      document.title = animatedTitle[index];
      index = (index + 1) % animatedTitle.length;
    }, 300); 
  }


  window.onload = animateTitle;