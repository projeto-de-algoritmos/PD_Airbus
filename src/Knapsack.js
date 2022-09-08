export default function knapsack({valores, volumes, maxVol, setResult}){
    var W = maxVol; 
    var qtd_itens = valores.length;

    var w = 0; 

    var memoization = [[]]; //matriz de memorização [PROGRAMAÇÃO DINÂMICA]
    
    for (w = 0; w <= W; w++){
        memoization[w] = [0];
        for (var item = 1; item <= qtd_itens; item++){
            if (w >= volumes[item]){
                memoization[w][item] = Math.max(memoization[w][item-1], memoization[w - volumes[item]][item-1] + valores[item]);
            } else {
                memoization[w][item] = Math.max(memoization[w][item-1], 0);
            }
        }
    }
    setResult(memoization[W][qtd_itens]);
}