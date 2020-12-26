
function calculateTax(amount, limits, percents){
    
    let tax = 0;
    let limit = limits.pop();
    let prelimit = 0
    
    while(limit!=undefined && amount > 0)
    {
        
        if( amount > 0 && amount > limit && limits.length == 0  )
        {
            let percent = percents.pop()
            tax = tax + ((amount)*percent)/100 
            amount = amount - (limit-prelimit);
            prelimit = limit
        }
        else if(amount > 0 && amount > limit )
        {
            let percent = percents.pop()
            tax = tax + ((limit-prelimit)*percent)/100 
            amount = amount - (limit-prelimit);  
            prelimit = limit 

        }
        else if( amount > 0 && amount <= limit )
        {
            let percent = percents.pop()
            tax = tax + ((amount)*percent)/100 
            amount = amount - (limit-prelimit);
            prelimit = limit
        }
        limit = limits.pop()
    }
    return tax;
}
let limits = [499,2999,3000].reverse()
let percents = [2.00,4.00,5.00].reverse()
            
console.log(calculateTax(100000,limits,percents))