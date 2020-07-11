
import Hashids from 'hashids'

const CodeCharacters = [ '2', '3', '4', '5', '6', '7', '8', '9', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'T', 'V', 'W', 'X', 'Y' ];
const HashCharsStr = CodeCharacters.join('')

const hashids = new Hashids('',0,)


const stringsToInts = (str)=>{
    return str.split('').map(c=> c.charCodeAt(i))
}
const intsToString =  (ints) =>{
    return ints.map(i => String.fromCharCode(i)).join('')
}

const stringToHashID = (str) =>{
    return hashids.encode(charsToInts(str))
}
const hashIDToString = (hash) =>{
    return intsToString(hashids.decode(hash))
}


export default {
    stringToHashID,
    hashIDToString,
    stringsToInts,
    intsToString
}