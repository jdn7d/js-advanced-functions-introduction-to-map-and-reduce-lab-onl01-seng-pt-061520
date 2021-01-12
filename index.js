// Your code here
function mapToNegativize(sourceArray){
   let newArray = []
   for (let i = 0; i < sourceArray.length; i++) {
     let newElement = (sourceArray[i] * -1)
     newArray.push(newElement) 
   }
   return newArray
}


function mapToNoChange(sourceArray) {
   return sourceArray
}


function mapToDouble(sourceArray) {
   let newArray = []
   for (let i = 0; i < sourceArray.length; i++) {
     let newElement = (sourceArray[i] * 2)
     newArray.push(newElement) 
   }
   return newArray
}

function mapToSquare(sourceArray) {
 let newArray = []
 for(let i=0; i < sourceArray.length; i++) {
    let newElement = (sourceArray[i] * sourceArray[i])
    newArray.push(newElement)
 }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
         total = total + sourceArray[i]
      }
  
  return total
}


function reduceToAllTrue(sourceArray) {
   for (let i = 0; i < sourceArray.length; i++ ) {
   if (!sourceArray[i]) {
      return false
   }
}
   return true
   
}

function reduceToAnyTrue(sourceArray) {
   for (let i = 0; i < sourceArray.length; i++ ) {
   if (sourceArray[i]) {
      return true
   }
}
   return false
   
}