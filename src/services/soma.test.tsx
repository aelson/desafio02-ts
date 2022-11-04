import { soma, multiplica } from "./soma"

describe('soma', () => {
    it('deve somar um ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar um numero por 2', () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar um numero por 3', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it('deve informar um erro, caso o multiplicador seja diferente de 2 ou 3', () => {
        let error
        try {
            multiplica(2, 4)
        } catch (err) {
            error = err
        } finally {
            if (!(error instanceof Error)) {
                throw error
            }
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('O multiplicador deve ser 2 ou 3')
        }
    })
})