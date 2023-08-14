import cardapio from "./assets/mock"

class CaixaDaLanchonete {

    calcularValorDaCompra(itens, metodoDePagamento) {

        let finalPrice = 0

        itens.map((item) => {
            const split = item.split(",")
            const code = split[0]
            const number = split[1]

            const itemPrice = cardapio.find((item) => item.codigo === code).valor
            const justNumber = parseFloat(itemPrice.replace("R$", "").replace(",","."))

            finalPrice += (justNumber * number)
        })

        console.log(finalPrice);

        if(metodoDePagamento === "dinheiro") {
            finalPrice = finalPrice * 0.95
        }

        if(metodoDePagamento === "credito") {
            finalPrice = finalPrice * 1.05
        }
        
        
        return finalPrice.toFixed(2).replace(".",",");
    }
}

export { CaixaDaLanchonete };
