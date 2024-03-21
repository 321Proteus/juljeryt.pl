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