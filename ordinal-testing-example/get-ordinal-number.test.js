function getOrdinalNumber(num)  { 
    const suffixes = ["th", "st", "nd", "rd"];
    const v = num % 100;

    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

test("works for any number ending in 1", () => { 
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(21)).toEqual("21st");
})

test("works for any number ending in 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(22)).toEqual("22nd");
})

test("works for any number ending in 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(23)).toEqual("23rd");
})

test("works for any number ending in 0, 4, 5, 6, 7, 8, 9",  () => {
  expect(getOrdinalNumber(10)).toBe("10th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(27)).toEqual("27th");
})