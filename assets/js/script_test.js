// ******************** root variable ************************
var info_section = 0;
var oldSection = 0;
var targets = [];
var targetToUse = [];
// ******************** cancel function ********************

function cancel(oldSection, section, targets) {

  if (oldSection != 0) {

    info_section = oldSection;

    if (info_section.getAttribute("id") == "section_one" || info_section.getAttribute("id") == "section_two" ) {

      var oldTarget_left = document.getElementById(info_section.getAttribute("id")).childNodes[1].children.item(0);
      var oldTarget_right = document.getElementById(info_section.getAttribute("id")).childNodes[3].children.item(0);

      targetToUse.push(oldTarget_left, oldTarget_right);
      console.log(targetToUse.length);
    }
  }

    switch (info_section.getAttribute("id")) {
      case "section_one":
          animation_one(targetToUse[0], targetToUse[1], -1000, 1000);
        break;

        case "section_two":
            animation_two(targetToUse[0], targetToUse[1], -250, 200, '6turn');
          break;

          case "section_three":
            animation_three(info_section, "hidden", 0)
          break;

          case "section_four":
            animation_three(info_section, "hidden", 0)
          break;

      default:
      alert("Oops une erreur c'est produite");

    }

    $(info_section).fadeOut();
        targetToUse = [];
        oldSection = 0;
        info_section = 0;

        setTimeout(move(section, targets), 1000);

}


// ************************** move animation ***********************************

function move(section, targets) {

  if(info_section == 0){

    info_section = section;

    document.getElementById(info_section.getAttribute("id")).style.display = "grid";

    switch (info_section.getAttribute("id")) {
      case 'section_one':
        animation_one(targets[0], targets[1], 1000, -1000);
        break;

      case "section_two":
        animation_two(targets[0], targets[1], 250, -200, '3turn');
        break;

      case "section_three":
          animation_three(section, "visible", 1);
        break;

        case "section_four":
            animation_three(section, "visible", 1);
          break;

      default:
      alert("Oops une erreur c'est produite");

    }
}else{
    oldSection = info_section;

    if (oldSection.getAttribute("id") != section.getAttribute("id")) {
        cancel(oldSection, section, targets);
    }
  }
}

// ************************* animation a injecter dans le switch case ****************

function animation_one(target_left, target_right, translateXLeft, translateXRight) {

  anime({
    duration:4000,
    targets: target_left,
    translateX: translateXLeft
  });

  anime({
    duration:4000,
    targets: target_right,
    translateX: translateXRight
  });
}


function animation_two(target_left, target_right, translateXLeft, translateXRight, rotate){

  anime({
    duration:3000,
    targets: target_left,
    translateX: translateXLeft,
    scale: 1,
    rotate: rotate
  });

  anime({
    duration:3000,
    targets: target_right,
    translateX: translateXRight,
    scale: 1,
    rotate: rotate
  });
}

function animation_three(section, displayValue, opacity) {
  document.getElementById(section.getAttribute("id")).style.visibility = displayValue;
}
