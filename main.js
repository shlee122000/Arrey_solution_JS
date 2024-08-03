let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

//모든 이름을 대문자로 바꾸어서 출력하시오.
let upperCaseName = names.map((item)=>item.toUpperCase())
console.log(upperCaseName)

//성을제외한 이름만 출력하시오. (예-["Steven","Bill","Mark","Elon"…])
let firstNames = names.map((item)=>item.split(' ')[0])
console.log(firstNames)


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
//빈 문자를 포함한 배열을 반환
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split


//이름의 이니셜만 출력하시오. (예-["SPU","BG","MEZ","EM"…])
let initialOnly = names.map((item) => {
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem) => (initial += nameItem[0]));
    return initial;
  })
console.log(initialOnly)


//전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(names.some((item)=>item.length>=20))


//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
console.log(names.some((item)=>{
    let splitName = item.split(' ')
    splitName.pop()
    return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
  }))


//모두의 전체 이름의 길이가 20자 이상인가?
console.log(names.every(item=>item.length>=20))

//모두의 이름에 a 가 포함되어 있는가?
console.log(names.every(item=>item.includes('a')))



//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
console.log(names.find(item=>item.length>=20))

//미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)
console.log(names.find(item=>item.split(' ').length>=3))

//전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오
console.log(names.findIndex(item=>item.length>=20))


//미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.split(' ').length>=3))