const message = require("./service")

describe("Kontrollera serviceMetod", () => {

  it("Meddelande 'Hejsan från server!'", () => {

    //Anropar funktion och får respons
    const res = message

    //Utför ett test
    expect(res).toBe("Hejsan från server!")

  })

})