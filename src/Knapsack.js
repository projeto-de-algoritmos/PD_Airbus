export default function knapsack({valores, pesos, maxVol, setResult}){
    var W = maxVol; // volume maximo 
    var qtd_itens = valores.length; // total de itens

    var w = 0; //capacidade gradual

    var memorization = [[]]; //matriz de memorização
    
    for (w = 0; w <= W; w++){
        memorization[w] = [0];
        for (var item = 1; item <= qtd_itens; item++){
            if (w >= pesos[item]){
                memorization[w][item] = Math.max(memorization[w][item-1], memorization[w - pesos[item]][item-1] + valores[item]);
            } else {
                memorization[w][item] = Math.max(memorization[w][item-1], 0);
            }
        }
    }
    setResult(memorization[W][qtd_itens]);
}