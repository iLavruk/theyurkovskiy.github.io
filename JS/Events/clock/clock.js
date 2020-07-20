var clk = document.getElementById("clock");

function add0(value) {
    return (value.toString().length < 2) ? `0${value}` : value;
}

setInterval(function() {
    var d = new Date();
    clk.innerHTML = `<h1>${add0(d.getHours())}:${add0(d.getUTCMinutes())}:${add0(d.getSeconds())}</h1>`;
}, 1000);