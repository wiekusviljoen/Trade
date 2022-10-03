let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade");
let eth = new WebSocket("wss://stream.binance.com:9443/ws/ethbusd@trade");
let tether = new WebSocket("wss://stream.binance.com:9443/ws/usdtbidr@trade");
let stockPriceElement = document.getElementById("stock-price");
let stockPriceElementEth = document.getElementById("eth-Price");
let stockPriceElementTeth = document.getElementById("teth-Price");
let arrow = document.getElementById("arrow");
let arrowDown = document.getElementById("arrowDown");
let arrowEth = document.getElementById("arrowEth");
let arrowDownEth = document.getElementById("arrowDownEth");
let arrowTeth = document.getElementById("arrowTeth");
let arrowDownTeth = document.getElementById("arrowDownTeth");
let lastPrice = null;

//bitcoin
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
};

//ethereum

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

//tether

tether.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceTeth = parseFloat(stockObject.p).toFixed(2);

  stockPriceElementTeth.innerText = priceTeth;
  stockPriceElementTeth.style.color =
    !lastPrice || lastPrice === priceTeth
      ? "white"
      : priceTeth > lastPrice
      ? "green"
      : "red";

  lastPrice = priceTeth;

  if (stockPriceElementTeth.style.color == "green") {
    document.getElementById("arrowTeth").style.color = "green";
    document.getElementById("arrowTeth").style.display = "block";
    document.getElementById("arrowDownTeth").style.display = "none";
  } else {
    document.getElementById("arrowTeth").style.display = "none";
    document.getElementById("arrowDownTeth").style.display = "block";
    document.getElementById("arrowDownTeth").style.color = "red";
  }

  if (stockPriceElementTeth.style.color == "white") {
    document.getElementById("arrowDownTeth").style.display = "none";
    document.getElementById("arrowTeth").style.display = "none";
  }
};
