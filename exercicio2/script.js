// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let num1 = Number(prompt("Digite um número qualquer."))
let num2 = Number(prompt("Digite outro número qualquer."))

// ```
// O primeiro numero é maior que segundo? true

console.log(`O número ${num1} é maior que o número ${num2}?`, num1>=num2)

// O primeiro numero é igual ao segundo? false

console.log(`O número ${num1} é igual ao número ${num2}?`, num1==num2)

// O primeiro numero é divisível pelo segundo? true

console.log(`O número ${num1} é divisível pelo número ${num2}?`, num1%num2===0)

// O segundo numero é divisível pelo primeiro? true

console.log(`O número ${num2} é divisível pelo número ${num1}?`, num2%num1===0)

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```