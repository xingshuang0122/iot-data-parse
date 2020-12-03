import HexParse from "../../src/core/hexParse"
// import HexUtils from "../../src/utils/hexUtils"

const right = "正确情况"
// const wrong = "错误情况"

//#region to方法

test(`${right}：toBoolean`, () => {
  const hexParse = new HexParse(new Uint8Array([0xFF, 0x81, 0x01, 0x7F]))
  expect(hexParse.toBoolean()).toEqual(true)
  expect(hexParse.toBoolean(1, 7)).toEqual(true)
  expect(hexParse.toBoolean(2, 1)).toEqual(false)
  expect(hexParse.toBoolean(3, 5)).toEqual(true)
})

test(`${right}：toInt8`, () => {
  const hexParse = new HexParse(new Uint8Array([0xFF, 0x81, 0x01, 0x7F]))
  expect(hexParse.toInt8()).toEqual(-1)
  expect(hexParse.toInt8(1)).toEqual(-127)
  expect(hexParse.toInt8(2)).toEqual(1)
  expect(hexParse.toInt8(3)).toEqual(127)
})

test(`${right}：toUint8`, () => {
  const hexParse = new HexParse(new Uint8Array([0x21, 0xFE, 0xD3, 0x79]))
  expect(hexParse.toUint8()).toEqual(33)
  expect(hexParse.toUint8(1)).toEqual(254)
  expect(hexParse.toUint8(2)).toEqual(211)
  expect(hexParse.toUint8(3)).toEqual(121)
})

test(`${right}：toInt16`, () => {
  const hexParse = new HexParse(new Uint8Array([0xFF, 0xFF, 0xFF, 0x81, 0x64, 0x59, 0x9B, 0xA7]))
  expect(hexParse.toInt16()).toEqual(-1)
  expect(hexParse.toInt16(2)).toEqual(-127)
  expect(hexParse.toInt16(4)).toEqual(25689)
  expect(hexParse.toInt16(6)).toEqual(-25689)
})

test(`${right}：toUint16`, () => {
  const hexParse = new HexParse(new Uint8Array([0x00, 0x21, 0x00, 0xFE, 0x21, 0xCE, 0x64, 0x59]))
  expect(hexParse.toUint16()).toEqual(33)
  expect(hexParse.toUint16(2)).toEqual(254)
  expect(hexParse.toUint16(4)).toEqual(8654)
  expect(hexParse.toUint16(6)).toEqual(25689)
})

test(`${right}：toInt32`, () => {
  const hexParse = new HexParse(new Uint8Array([0xFF, 0xFF, 0xFF, 0x81, 0x00, 0x00, 0x64, 0x59, 0xFF, 0xFF, 0x9B, 0xA7]))
  expect(hexParse.toInt32()).toEqual(-127)
  expect(hexParse.toInt32(4)).toEqual(25689)
  expect(hexParse.toInt32(8)).toEqual(-25689)
})

test(`${right}：toUint32`, () => {
  const hexParse = new HexParse(new Uint8Array([0x00, 0x00, 0x00, 0x21, 0x99, 0x1F, 0x2A, 0xA8, 0x00, 0x00, 0x64, 0x59]))
  expect(hexParse.toUint32()).toEqual(33)
  expect(hexParse.toUint32(4)).toEqual(2568956584)
  expect(hexParse.toUint32(8)).toEqual(25689)
})

test(`${right}：toFloat32`, () => {
  const hexParse = new HexParse(new Uint8Array([0x42, 0x04, 0xA3, 0xD7, 0xC1, 0x79, 0xEB, 0x85]))
  // 接收到的数据为 33.15999984741211 ~ 33.16
  // expect(hexParse.toFloat32()).toEqual(33.16)
  expect(Math.round(hexParse.toFloat32() * 100) / 100).toEqual(33.16)
  // 接收到的数据为 -15.619999885559082 ~ -15.62
  // expect(hexParse.toFloat32(4)).toEqual(-15.62)
  expect(Math.round(hexParse.toFloat32(4) * 100) / 100).toEqual(-15.62)
})

test(`${right}：toFloat64`, () => {
  const hexParse = new HexParse(new Uint8Array([0x41, 0x03, 0x1F, 0xCA, 0xD6, 0x21, 0x39, 0xB7, 0xC0, 0xEB, 0x98, 0x95, 0x55, 0x1D, 0x68, 0xC7]))
  // 接收到的数据为 33.15999984741211 ~ 33.16
  expect(hexParse.toFloat64()).toEqual(156665.35455556)
  // expect(Math.round(hexParse.toFloat64() * 100000000) / 100000000).toEqual(156665.35455556)
  // 接收到的数据为 -15.619999885559082 ~ -15.62
  expect(hexParse.toFloat64(8)).toEqual(-56516.66664)
  // expect(Math.round(hexParse.toFloat64(8) * 100000) / 100000).toEqual(-56516.66664)
})

test(`${right}：toString`, () => {
  // 123ABCabc天气好
  const hexParse = new HexParse(new Uint8Array([0x31, 0x32, 0x33, 0x41, 0x42, 0x43, 0x61, 0x62, 0x63, 0xE5, 0xA4, 0xA9, 0xE6, 0xB0, 0x94, 0xE5, 0xA5, 0xBD]))
  expect(hexParse.toString(0, 1)).toEqual("1")
  expect(hexParse.toString(2, 4)).toEqual("3ABC")
  expect(hexParse.toString(6, 3)).toEqual("abc")
  expect(hexParse.toString(9)).toEqual("天气好")
  expect(hexParse.toString(4)).toEqual("BCabc天气好")
})

//#endregion

//#region add方法 + get方法（包含在add中）

test(`${right}：addInt8`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addInt8(-1).addInt8(-127).addInt8(1).addInt8(127).getAddResult()
  expect(res).toEqual(new Uint8Array([0xFF, 0x81, 0x01, 0x7F]))
})

test(`${right}：addUint8`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addUint8(33).addUint8(254).addUint8(211).addUint8(121).getAddResult()
  expect(res).toEqual(new Uint8Array([0x21, 0xFE, 0xD3, 0x79]))
})

test(`${right}：addInt16`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addInt16(-1).addInt16(-127).addInt16(25689).addInt16(-25689).getAddResult()
  expect(res).toEqual(new Uint8Array([0xFF, 0xFF, 0xFF, 0x81, 0x64, 0x59, 0x9B, 0xA7]))
})

test(`${right}：addUint16`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addUint16(33).addUint16(254).addUint16(8654).addInt16(25689).getAddResult()
  expect(res).toEqual(new Uint8Array([0x00, 0x21, 0x00, 0xFE, 0x21, 0xCE, 0x64, 0x59]))
})

test(`${right}：addInt32`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addInt32(-127).addInt32(25689).addInt32(-25689).getAddResult()
  expect(res).toEqual(new Uint8Array([0xFF, 0xFF, 0xFF, 0x81, 0x00, 0x00, 0x64, 0x59, 0xFF, 0xFF, 0x9B, 0xA7]))
})

test(`${right}：addUint32`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addUint32(33).addUint32(2568956584).addInt32(25689).getAddResult()
  expect(res).toEqual(new Uint8Array([0x00, 0x00, 0x00, 0x21, 0x99, 0x1F, 0x2A, 0xA8, 0x00, 0x00, 0x64, 0x59]))
})

test(`${right}：addFloat32`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addFloat32(33.16).addFloat32(-15.62).getAddResult()
  expect(res).toEqual(new Uint8Array([0x42, 0x04, 0xA3, 0xD7, 0xC1, 0x79, 0xEB, 0x85]))
})

test(`${right}：addFloat64`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addFloat64(156665.35455556).addFloat64(-56516.66664).getAddResult()
  expect(res).toEqual(new Uint8Array([0x41, 0x03, 0x1F, 0xCA, 0xD6, 0x21, 0x39, 0xB7, 0xC0, 0xEB, 0x98, 0x95, 0x55, 0x1D, 0x68, 0xC7]))
})

test(`${right}：addString`, () => {
  const hexParse = new HexParse()
  const res = hexParse.addString("123ABCabc").addString("天气好").getAddResult()
  expect(res).toEqual(new Uint8Array([0x31, 0x32, 0x33, 0x41, 0x42, 0x43, 0x61, 0x62, 0x63, 0xE5, 0xA4, 0xA9, 0xE6, 0xB0, 0x94, 0xE5, 0xA5, 0xBD]))
})

//#endregion