import { useEffect, useState } from 'react'
import App from './App'

export function AppContext() {
  
  
  const [ r, setR ] = useState<number>(0)
  const [ g, setG ] = useState<number>(0)
  const [ b, setB ] = useState<number>(0)
  const [ hex, setHex ] = useState<string>(rgbToHex(r, g, b))
  const [ isBright, setIsBright ] = useState<boolean>(checkBright(r, g, b))

  useEffect(() => {
    document.body.style.backgroundColor = `${`rgb(${r}, ${g}, ${b})`}`
    setHex(rgbToHex(r, g, b))
    setIsBright(checkBright(r, g, b))
  }, [r, g, b]);

  function checkBright(r: number, g: number, b: number): boolean {
    return (+r + +g + +b) / 3 > 127
  }

  function numberToHex(num: number): string {
    const hexValues: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
                                 '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let hexString: string = ''
    let remainder: number = 0

    while (num > 0) {
      remainder = num % 16
      hexString = hexValues[remainder] + hexString
      num = Math.floor(num / 16)
    }

    if(hexString.length < 1)  {
      hexString = '00'
    }

    if(hexString.length < 2)  {
      hexString = '0' + hexString
    }

    return hexString
  }

  function rgbToHex(r: number, g: number, b: number): string {

    let hexR = numberToHex(r)
    let hexG = numberToHex(g)
    let hexB = numberToHex(b)

    return `#${hexR}${hexG}${hexB}`

  }

  function changeColor(e: any): void {
    
    switch (e.target.name) {
      case 'r':
        setR(e.target.value)
        break;
      case 'g':
        setG(e.target.value)
        break;
      case 'b':
        setB(e.target.value)
        break;
      default:
        break;
    }
  }

  return (<App changeColor={changeColor} isBright={isBright} hex={hex} r={r} g={g} b={b} />);
}