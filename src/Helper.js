export const moneyFormat = amount => {
    return amount.toLocaleString('en-PE',{
        style:'currency',
        currency:'PEN'
    })
}