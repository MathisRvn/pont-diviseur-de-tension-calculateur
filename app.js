let compute1 = () => {
    
    let vin = +(document.getElementsByName('1vin')[0].value)
    let r1 = +(document.getElementsByName('1r1')[0].value)
    let r2 = +(document.getElementsByName('1r2')[0].value)

    let vout = vin * r2 / (r1+r2)

    document.getElementById('compute1out').innerHTML = vout

}


let compute2 = () => {
    
    let vin = +(document.getElementsByName('2vin')[0].value)
    let vout = +(document.getElementsByName('2vout')[0].value)

    let coef = ((vin / vout) - 1)

    document.getElementById('compute2out1').innerHTML = (1/coef).toFixed(2)

}