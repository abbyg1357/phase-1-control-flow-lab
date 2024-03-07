function scuberGreetingForFeet(someValue) {
  let result;
  if(someValue <= 400) {
    result = 'This one is on me!';
  }
  else if(someValue <= 2000) {
    result = 'That will be twenty bucks.';
  }
  else if(someValue <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if(someValue > 2500) {
    result = 'No can do.';
  }
   return result;
}

function ternaryCheckCity(city) {
  return city === 'NYC'?'Ok, sounds good.' : `No go.`;
}

function switchOnCharmFromTip(generous) {
 
 switch (generous) {
  case 'generous':
    return ('Thank you so much.');
    break;
  case 'not as generous':
    return ('Thank you.');
    break;
  default:
    return 'Bye.'
    break;
 
  }
}