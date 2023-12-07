import React, {FC} from "react";
import s from './App.module.css'

export interface TodoPropsType {

}

let words = ['яблоко', 'груша', 'реакт', 'скрипт', 'язык']
let word = words[Math.floor(Math.random() * words.length)]
let answerArray: string[] = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '-'
}

var remainingLetters = word.length
while (remainingLetters > 0) {
    alert(answerArray.join())
    let vvod: any = prompt("Введите буквц")
    if (vvod === null) {
        break
    } else if (vvod.length !== 1) {
        alert('введите 1 букву')

    } else {
        for (let j = 0; j < word.length; j++) {
            if (vvod === word[j]) {
                answerArray[j] = vvod
                remainingLetters--
            }
        }
        }
}
alert(answerArray.join())
alert("Отлично! Было загадано слово " + word)
let handlerbutton = () => {
    alert(test)
}
const DisplayGallows: FC<TodoPropsType> = (props) => {
    return (
        <div>
            <button onClick={handlerbutton}>start</button>
        </div>
    )
}
export default DisplayGallows