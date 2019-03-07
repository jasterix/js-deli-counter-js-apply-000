var katzDeliLine = [];

function takeANumber(katzDeliLine, newComer) {
  for (let i=0; i>0; i++) {
    return i;
  }
  
  return `Welcome, ${newComer}. Your ticket number is ${katzDeliLine.length}.`;
}

function nowServing(katzDeliLine) {
  var next = katzDeliLine.shift();
  var i=0;
  if (i<katzDeliLine.length) {
  return "Currently serving " + next + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line=[];
  if (katzDeliLine>[]) {
    for (let i=0; i<katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:"+ line;
    } else {
      return "The line is currently empty."
    }
}
