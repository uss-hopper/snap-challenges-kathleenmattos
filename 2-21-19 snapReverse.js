var alertString = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody."

function reverse(alertString) {
  return alertString.split(" ").reduce((rev, char) => char +" "+ rev, '');
}
console.log(reverse(alertString))
