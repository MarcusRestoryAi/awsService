const {message, greetings} = require("./service.js")

describe("Kontrollera serviceMetod", () => {

  it("Meddelande 'Hejsan från server!'", () => {

    //Anropar funktion och får respons
    const res = message()

    //Utför ett test
    expect(res).toBe("Hejsan från server!")

  })

})

describe("Hälsningsmeddelande med namn", () => {

  it("Marcus", () => {

    //Anropar funktion och får respons
    const res = greetings("Marcus")

    //Utför ett test
    expect(res).toBe("Hejsan Marcus")

  })

  it("Eric", () => {

    //Anropar funktion och får respons
    const res = greetings("Eric")

    //Utför ett test
    expect(res).toBe("Hejsan Eric")

  })

  it("Enköping", () => {

    //Anropar funktion och får respons
    const res = greetings("Enköping")

    //Utför ett test
    expect(res).toBe("Hejsan Enköping")

  })

})