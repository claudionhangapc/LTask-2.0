const randString = ()=> {
  // considering a 8 length string
  const len = 8
  let randStr = ''
  for(let i=0; i<len; i++){
    //ch = a number between 1 to 10
    const ch = Math.floor((Math.random()*10)+1)
    randStr += ch
  }

  return randStr
}


module.exports = {
  randString
}