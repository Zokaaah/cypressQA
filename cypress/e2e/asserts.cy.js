describe('Testes de assertiva', () => {
    it('Passou', () => {
      const a = 1;

      try {
        expect(a).to.equal(1, 'Segunda Assertiva passou')
      } catch (e) {
        cy.log(e.message)
      }

      try {
        expect(a).to.equal(1, 'Primeira assertiva falhou')
      } catch (e) {
        cy.log(e.message)
      }

      try {
        expect(a).to.equal('aa', 'terceira assertiva falhou')
      } catch (e) {
        cy.log(e.message)
      }
    });

    it('Verdadeiro', ()=>{
        const b =true;
        try {
            expect(b).to.be.equal(true, 'deve ser verdadeiro')
            
        } catch (e) {
            cy.log(e.message)
        }
    })

    it('objectEquality',()=>{
        const obj ={
            a: 1,
            b: 2,
        }

        const obj2 ={
            a: 1,
            b: 2,
        }

        const obj3 ={
            a: 1,
            b: 3,
        }

        //validado, igual
        try {
            expect(obj).to.be.deep.equal(obj2,'Objeto validado')

            
        } catch (e) {
            cy.log(e.message, 'objeto nao validado')
            
        }

        //nao validado, nao igual
        try {
            expect(obj).not.to.be.deep.equal(obj3, 'nao validado')

            
        } catch (e) {
            cy.log(e.message, 'objeto nao validado')
            
        }

        //verifica propriedade com valor dentro de obj
        try {
            expect(obj).include({a:1, b:2})

            
        } catch (e) {
            cy.log(e.message)
        }

        //verifica propriedade dentro do obj
        expect(obj).to.have.property('a', 1)

        //verifica obj vazio
        expect(obj).to.not.be.empty

        try {
            expect(obj).to.be.empty

        } catch (e) {
            cy.log(e.message)
        }
    }),

   
    it('Arrays', ()=>{
        const arr = [1,2,3] 
        const arr2 = []

        expect(arr).to.have.members([1,2,3])

        //verifica membro especifico
        expect(arr).to.include.members([1,2])

        //nao vazio
        expect(arr).to.be.not.empty
        //arr vazio
        expect(arr2).to.be.empty

        expect([]).to.be.a('array')



    }),

    it('types', () =>{
        const num = 1
        const str = 'String'

        expect(num).to.be.a('number', 'é um numero')

        expect(str).to.be.a('string', 'É uma string')

        expect([]).to.be.a('array')
        expect({}).to.be.a('object')
    })

    it('strings', ()=>{
        const str = 'Str de teste'

        expect(str).to.be.equal('Str de teste')
        expect(str).to.have.length(12)
        expect(str).to.contains('Str')
        expect(str).to.match(/de/)

        //começa com..
        expect(str).to.match(/^Str/)


        //deve finalizar com..
        expect(str).to.match(/teste$/)

        //numero de caracteres
        expect(str).to.match(/.{12}/)
        
    })


    it('numbers', () =>{
        const number = 4

        const floatNumber =5.2123


        expect(number).to.be.equal(4)
        expect(number).to.be.above(3)
        expect(number).to.be.below(7)


        expect(floatNumber).to.be.equal(5.2123)
        //proximo a..
        expect(floatNumber).to.be.closeTo(5.2, 0.1)
    })


  });