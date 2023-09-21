import './App.css'

interface Props {
  changeColor: (e: any) => void
  hex: string
  isBright: boolean
  r: number
  g: number
  b: number
}

function App({ isBright, hex, changeColor, r, g, b }: Props) {

  const baseSliderStyle = {
    width: '100%',
    margin: '20px 0px',	
    display: 'block',
    height: '15px',
    borderRadius: '5px',
    outline: 'none',
    opacity: '0.7',
    transition: 'opacity .15s ease-in-out',
    cursor: 'pointer'
  }

  const containerStyle = {
    fontFamily: 'cursive',
    background: isBright ? 'rgba(0,15,28,0.8)' : 'rgba(241,246,252,0.8)', 
    maxWidth: "60%", 
    minWidth: "300px",
    padding: "20px", 
    borderRadius: "10px",
    margin: "20px auto",
    color: isBright ? 'white' : 'black',
    transition: ' .3s ease-in-out',
  }

  const buttonStyle = {
    background: isBright ? 'rgba(241,246,252,0.8)' : 'rgba(0,15,28,0.8)', 
    color: isBright ? 'black' : 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    transition: ' .3s ease-in-out',
    ":hover": {
      background: isBright ? 'rgb(0,15,28)' : 'rgb(241,246,252)', 
      color: isBright ? 'white' : 'black',
    }
  }

  return (
    <div style={containerStyle}>
      <input type="range" name="r" min="0" max="255" defaultValue={r} onChange={changeColor} style={{ ...baseSliderStyle, accentColor: `red`  }}></input>
      <input type="range" name="g" min="0" max="255" defaultValue={g} onChange={changeColor} style={{ ...baseSliderStyle, accentColor: `green` }}></input>
      <input type="range" name="b" min="0" max="255" defaultValue={b} onChange={changeColor} style={{ ...baseSliderStyle, accentColor: `blue` }}></input>
      <h2>{hex}</h2>
      <button style={buttonStyle} onClick={() => {navigator.clipboard.writeText(hex)}}>Copy</button>
      <h2>{`rgb(${r}, ${g}, ${b})`}</h2>
      <button style={buttonStyle} onClick={() => {navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`)}}>Copy</button>
      <h2>{`This color is ${(isBright ? "bright" : "dark")}`}</h2>
    </div>
  )
}

export default App
