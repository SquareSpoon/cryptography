const alpha = ['0', 'a', 'c', 'e', 'g', 'i', 'b', 'j', 'k', 'd', 'f', 'h', 'l', 'm', 'o', 'q', 'n', 'p', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z', '2', '0','3', '1', '10', '4', '5', '7', '12', '6', '11', '8', '13', '14', '15', '16', '9', '18', '20', '19', '17', ' ', 'C', 'D', 'E', 'A', 'F', 'G', 'B','I', 'J', 'H', 'L','K', 'M', 'O', 'P', 'Q', 'S', 'R', 'T', 'W', 'Z', 'X', 'N', 'Y', 'U', 'V', '?', '@', '#', '$', 'ç', ',', '/', '}', ']', '{', '(', ')', ':', '=', '+', '_', '-']
function encrypt(pass){
    function generateHash(word){
        let value
        for(let i = 0; i < alpha.length; i++){
            if(alpha[i] === word){
                value = i - 1 
                break
            }    
        }
        word = alpha[value]
        return word
    }
 
    const en = pass.map(word => {
        word = generateHash(word)
        return word
    })
    return en
}
function decrypt(pass){
    pass.map(word => {
        let check
        for(let i = 0; i < alpha.length; i++){
            if(alpha[i] === word){
               check = alpha[i + 1]
               break
            }
        }
        word = check
        return word
    })
    return pass
}

const pass1 = 'SquareSpoon'
function array(str){
     return str.split('') 
}
let newPass = array(pass1)
function order(arr){
    return arr.join('')
}
const encrypted = encrypt(newPass)
const encrypted2 = decrypt(newPass) 
console.log(order(encrypted))
console.log(order(encrypted2))