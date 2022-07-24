// ******************** root variable ************************

var info_target_left = 0;
var info_target_right = 0;
var info_section = 0;

// ******************** cancel function ********************

function cancel(section, target_left, target_right) {

    info_section = section.getAttribute('id');

    switch (info_section) {
      case "section_one":
          animation_one(target_left, target_right, -1000, 1000);
        break;

        case "section_two":
            animation_two(target_left, target_right, -250, 200, '3turn');
          break;

          case "section_three":
            animation_three(section, "hidden", 0)
          break;

          case "section_four":
            animation_three(section, "hidden", 0)
          break;

      default:
      alert("Oops une erreur c'est produite");

    }

    $(section).fadeOut();

        info_section = 0;
        info_target_left = 0;
        info_target_right = 0;

}


// ************************** move animation ***********************************


function move(section, target_left, target_right) {

  if(info_section == 0){

    info_section = section.getAttribute('id');
    document.getElementById(info_section).style.display = "grid";

    switch (info_section) {
      case 'section_one':
        animation_one(target_left, target_right, 1000, -1000);
        break;

      case "section_two":
        animation_two(target_left, target_right, 250, -200, '1turn');
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
  console.log("remise a zero");
    cancel(section, target_left, target_right);
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
