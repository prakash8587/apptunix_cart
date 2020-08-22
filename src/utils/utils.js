export const formatAmount = amount => {
    const _amount = amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''
    return `₹ ${_amount}`
}