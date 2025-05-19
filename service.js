function message() {
  return "Hejsan från server!"
}

function greetings(name) {
  return `Hejsan ${name}`
}

module.exports = { message, greetings }