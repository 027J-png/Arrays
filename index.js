//LISTAS

// 1 Lista de Frutas
const frutas = ['Maracuja', 'Manga', 'Uva', 'Laranja', 'Limão']

console.log('Lista completa:', frutas)

console.log('Primeira fruta:', frutas.at(0))

console.log('Última fruta:', frutas.at(-1))

console.log('==========================================================')

// 2 Lista de Numeros
const numeros = [3, 6, 9, 10, 17, 18]
const somatoria = numeros.reduce((acumulador, numeros) => acumulador + numeros, 0)

console.log('Lista completa:', numeros)

console.log('Somatoria:', somatoria)

console.log('==========================================================')

// 3 Lista de Numeros 2º
const lista = [60, 70, 67, 40, 16, 17, 9, 10, 6, 3,]
const maior = Math.max(...lista)

console.log('O maior valor é:', maior)

console.log('==========================================================')

// TUPLAS

// 1 Criar uma tupla
const Nome = 'Amanda'
const idade = 16
const turma = '2º Ano'

console.log(Nome, idade, turma)

console.log('==========================================================')

// 2 Criar uma tupla 2º
const produto = ['gloss', 6.9, 4]

console.log(
    `O ${produto[0]} custa R$ ${produto[1]} e temos ${produto[2]} unidades no estoque.`)

console.log('==========================================================')

// 3 Lista de Tuplas

const filmes = [
    ['Deadpool & Wolverine', 2024, 'Ação e Comedia'],
    ['Lego Batman: O Filme', 2017, 'Familia e Comedia'],
    ['Whiplash', 2014, 'Drama']
]
for (let filme of filmes) {
    console.log(`Filme: ${filme[0]} | Ano: ${filme[1]} | Gênero: ${filme[2]}`)
}
