var Calculator = require('../my_modules/Calculator')
var calc = new Calculator()


//テストの書き方
//describe("テストブロックの説明", () => {テストケース})
//上記のテストケースはitかtestを使って書く
//itまたはtest("テストケースの説明", () => {テストコード})
//上記のテストコードはexpectとtoBeを使って
//expect(テストコード).toBe(期待値)

 describe('Calculator', () => {         //Calculatorクラスの　          （テストブロック）
    describe('sum()', () => {           //sumメソッドで　               （テストブロック）
        it('(sum(1, 2) = 3', () => {    //1, 2を渡したら3が返ってくるか  （テストケース）
            expect(calc.sum(1, 2)).toBe(3) 
        })
        it('(sum("99", "100") = 199', () => {           //文字の"99"と"100"を渡したら数字の199が返ってくるか
            expect(calc.sum("99", "100")).toBe(199)
        }) 
        it('(sum("5", 10) = 15', () => {           //文字の"5"と数字の10を渡したら数字の15が返ってくるか
            expect(calc.sum("5", 10)).toBe(15)
        }) 
    })               
 })