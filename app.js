let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
let stockPriceElement = document.getElementById("stock-price");
let stockPriceElementEth = document.getElementById("eth-Price");
let arrow = document.getElementById("arrow");
let arrowDown = document.getElementById("arrowDown");
let arrowEth = document.getElementById("arrowEth");
let arrowDownEth = document.getElementById("arrowDownEth");
let lastPrice = null;

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceBTC = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = priceBTC;
  stockPriceElement.style.color =
    !lastPrice || lastPrice === priceBTC
      ? "white"
      : priceBTC > lastPrice
      ? "green"
      : "red";

  lastPrice = priceBTC;

  if (stockPriceElement.style.color == "green") {
    document.getElementById("arrow").style.color = "green";
    document.getElementById("arrow").style.display = "block";
    document.getElementById("arrowDown").style.display = "none";
  } else {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("arrowDown").style.display = "block";
    document.getElementById("arrowDown").style.color = "red";
  }

  if (stockPriceElement.style.color == "white") {
    document.getElementById("arrowDown").style.display = "none";
    document.getElementById("arrow").style.display = "none";
  }

  eth.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let priceETH = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementEth.innerText = priceETH;
    stockPriceElementEth.style.color =
      !lastPrice || lastPrice === priceETH
        ? "white"
        : priceETH > lastPrice
        ? "green"
        : "red";

    lastPrice = priceETH;

    if (stockPriceElementEth.style.color == "green") {
      document.getElementById("arrowEth").style.color = "green";
      document.getElementById("arrowEth").style.display = "block";
      document.getElementById("arrowDownEth").style.display = "none";
    } else {
      document.getElementById("arrowEth").style.display = "none";
      document.getElementById("arrowDownEth").style.display = "block";
      document.getElementById("arrowDownEth").style.color = "red";
    }

    if (stockPriceElementEth.style.color == "white") {
      document.getElementById("arrowDownEth").style.display = "none";
      document.getElementById("arrowEth").style.display = "none";
    }
  };
};
