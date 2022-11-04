export const soma = (num: number): number => {
    return num + 1
}

export const multiplica = (num: number, mult: number): number => {
    if (mult === 2 || mult === 3) {
        return num * mult
    }
    throw new Error('O multiplicador deve ser 2 ou 3')
}