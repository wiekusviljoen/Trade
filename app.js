let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockPriceElement = document.getElementById("stock-price");
let arrow = document.getElementById("arrow");
let arrowDown = document.getElementById("arrowDown");
let lastPrice = null;

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = price;
  stockPriceElement.style.color =
    !lastPrice || lastPrice === price
      ? "black"
      : price > lastPrice
      ? "green"
      : "red";

  lastPrice = price;

  if (stockPriceElement.style.color == "green") {
    document.getElementById("arrow").style.color = "green";
    document.getElementById("arrow").style.display = "block";
    document.getElementById("arrowDown").style.display = "none";
  } else {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("arrowDown").style.display = "block";
    document.getElementById("arrowDown").style.color = "red";
  }

  if (stockPriceElement.style.color == "black") {
    document.getElementById("arrowDown").style.display = "none";
    document.getElementById("arrow").style.display = "none";
  }
};
