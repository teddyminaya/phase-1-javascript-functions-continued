function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(move="go to the office") {
    return `This Monday, I will ${move}.`
  }
function wrapAdjective(flare="*"){
  return function message(adj="special"){
    return "You are "+flare+adj+flare+"!"
  }
}