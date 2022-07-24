function firstFadeout(onClick, fadeOut, home, footer) {

  $(onClick).click(function(){
    $(fadeOut).fadeOut();
    $(home).css("display", "block");
    $(footer).css("display", "block");
  })
};
