// exercícios parte 1

const operacao1 = 5 > 20 && 5 < 2
console.log("5 é maior que 20 e também é menor que 2", operacao1) //false

const operacao2 = 5 === 5 || 5 === "5"
console.log("5 é igual a 5 ou é igual a “5”", operacao2) //true

const operacao3 = !(20 > 50)
console.log("negação de (vinte é maior que cinquenta)", operacao3) //true

const operacao4 = !(20 > 50 || 50 > 60)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", operacao4) //true

//exercícios parte 2
const salario = 2000.00
const auxilioCreche = 45.50
const porcentagemComissao = 0.1
const vendasJaneiro = 5784.50
const vendasfevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00
const inss = 0.05
const numeroFilhos = 2

const salarioAuxilio = (salario + (auxilioCreche * numeroFilhos))
console.log("O salário fixo mais o auxílio creche:", salarioAuxilio) //2091

const comissaoJaneiro = (porcentagemComissao * vendasJaneiro)
console.log("Quanto Fulano de Silva receberá de comissão em janeiro:", comissaoJaneiro) //578,45

const comissaoFevereiro = (porcentagemComissao * vendasfevereiro)
console.log("Quanto Fulano de Silva receberá de comissão em jfevereiro:", comissaoFevereiro)

const comissaoMarco = (porcentagemComissao * vendasMarco)
console.log("Quanto Fulano de Silva receberá de comissão em março:", comissaoMarco)

const comissaoAbril = (porcentagemComissao * vendasAbril)
console.log("Quanto Fulano de Silva receberá de comissão em abril:", comissaoAbril)

const comissaoMaio = (porcentagemComissao * vendasMaio)
console.log("Quanto Fulano de Silva receberá de comissão em maio:", comissaoMaio)

const comissaoJunho = (porcentagemComissao * vendasJunho)
console.log("Quanto Fulano de Silva receberá de comissão em junho:", comissaoJunho)

const comissaoTotal = (comissaoJaneiro+comissaoFevereiro+comissaoMarco+comissaoAbril+comissaoMaio+comissaoJunho)
console.log(comissaoTotal)

const salarioJaneiro = ((salario + comissaoJaneiro)*inss)
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioJaneiro)

const salarioFevereiro = ((salario + comissaoFevereiro)*inss)
console.log("Quanto Fulano de Silva será descontado em fevereiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioFevereiro)

const salarioMarco = ((salario + comissaoMarco)*inss)
console.log("Quanto Fulano de Silva será descontado em Março pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioMarco)

const salarioAbril = ((salario + comissaoAbril)*inss)
console.log("Quanto Fulano de Silva será descontado em Abril pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioAbril)

const salarioMaio = ((salario + comissaoMaio)*inss)
console.log("Quanto Fulano de Silva será descontado em maio pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioMaio)

const salarioJunho = ((salario + comissaoJunho)*inss)
console.log("Quanto Fulano de Silva será descontado em junho pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas:", salarioJunho)

//Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
const salarioComissaoSemestre = (((salarioAuxilio*6) + comissaoTotal))
console.log("salario mais comissão", salarioComissaoSemestre)

const totalLiquido = (salarioComissaoSemestre*inss)
//console.log("total do semestre com desconto", totalLiquido)

const totalLiquido2 = salarioComissaoSemestre - totalLiquido 
console.log("total do semestre com desconto", totalLiquido2)

// A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
console.log("media", totalLiquido2/6)

