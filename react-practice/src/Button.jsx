import React from 'react'

export default function Button() {
  const handleclick = (e) => {
    console.log(e)

  return (
    <button onClick={(e) =>handleclick(e)}>
      Click Me
    </button>
  )
}















































































/*if(count <3){
  count++
  console.log(`${name} you clicked me ${count} time/s`)
}
else{
  console.log(`${name} stop clicking me!`);

}

}}
*
*/}