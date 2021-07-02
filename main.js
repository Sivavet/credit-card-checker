// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const testmystery6 = [2, 5, 3, 1, 1, 4, 0, 0, 5, 8, 7, 1, 9, 4, 0, 8] // testMystery

// An array of all the arrays above 
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, testmystery6]


// Add your functions below:
const validateCred = arr => {
    // todo return true arr = digit valid, false = invalid ,don't mutate value original arr

    // *reversedArr เก็บ element เดียวกับ batch แต่สลับหน้าหลังแล้ว
    const reversedArr = arr.map(arrays => arrays.reverse())

    // *กำหนดให้ ทุกๆตำแหน่งคี่(นับเป็นคี่จาก 0)ของเอเลเม้นคูณ 2 ถ้าผลลัพท์มากกว่า 9 หลังจากคูณให้ทำการลบ 9 ออก
    const otherDigit = (array) =>{
        let sum = 0;
        for(let i = 0; i < array.length; i++){
            if(i%2 === 0){
                sum+=array[i]
            }else{
                if(array[i]*2 > 9){
                    sum += (array[i]*2)-9;
                } else {
                    sum += array[i]*2;
                }
            }
        }
        return sum
    }

    const sumArr = reversedArr.map(otherDigit)
    const result = sumArr.map(element => element%10 === 0)
    return result;
}

const findInvalidCards = array => {
    const answer = array.filter(element => element === false)
    return answer
}

const idInvalidCardCompanies = array =>{
    // todo return array companies เป็นชื่อบริษัท และไม่ซ้ำกัน ถ้ามีแล้วไม่ต้องพุชซ้ำ
    // todo ลูปไปที่ array จาก vilidateCred เอา i ที่ false มา 
    // todo ตัวอักษรตัวแรกของ i มาเช็ค
    let answer = []
    let index = []
    for(let i=0; i< array.length; i++){
        if(array[i] === false){
            index.push(i)
            let firstBatchIndex = batch[i][batch[i].length-1]
            switch (firstBatchIndex){
                case 3:
                    if(answer.includes('Amex (American Express)')){
                        break;
                    }else{
                        answer.push('Amex (American Express)')
                        break;
                    }
                case 4:
                    if(answer.includes('Visa')){
                        break;
                    }else{
                        answer.push('Visa')
                        break;
                    }
                case 5:
                    if(answer.includes('Mastercard')){
                        break;
                    }else{
                        answer.push('Mastercard')
                        break;
                    }
                case 6:
                    if(answer.includes('Discover')){
                        break;
                    }else{
                        answer.push('Discover')
                        break;
                    }
                default:
                    console.log('Company not found')
                    break;
                }
            }
    }
    // ทด 45365364
    
    console.log(answer)
    return answer;

}

// validateCred(batch);
// findInvalidCards(validateCred(batch))
idInvalidCardCompanies(validateCred(batch))








