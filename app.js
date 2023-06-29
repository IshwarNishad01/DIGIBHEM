//  customer info
const customerName = document.getElementById("Cname");
const checkInDate = document.getElementById("checkInDate");
const totalDays = document.getElementById("totalDays");
const totalPersons = document.getElementById("totalPersons");

// room types

const deluxRoom = document.getElementById("deluxRoom");
const suiteRoom = document.getElementById("suiteRoom");

// amentities
let AC = document.getElementById("AC");
let Locker = document.getElementById("Locker");

//  advance amount
const advanceAmount = document.getElementById("advanceAmount");

// ***************************************
//  total cost calculated :-

function printData() {
  let printData = document.getElementById("printData");
  printData.style.display = "block";

  let totalCost;
  let extraCost;
  let roomCost;
  let roomType;
  let amentitiesCost;
  let balanceAmount;
  let amentities;
  //  room cost
  if (deluxRoom.checked) {
    roomCost = 2500 * totalDays.value;
    roomType = "Delux Room";
  } else {
    roomCost = 4000 * totalDays.value;
    roomType = "Suite Room";
  }

  // calculate amentities cost
  if (AC.checked && Locker.checked) {
    amentitiesCost = 1300;
    amentities = "AC and Locker 1300/-";
  } else if (AC.checked) {
    amentitiesCost = 1000;
    amentities = "AC 1000/-";
  } else if (Locker.checked) {
    amentitiesCost = 300;
    amentities = "Locker 300/-";
  } else {
    amentitiesCost = 0;
    amentities = "no amentities";
  }
  //  calculate extra persons cost
  if (totalPersons.value > 2) {
    extraCost = (totalPersons.value - 2) * 1000;
  } else {
    extraCost = 0;
  }
  totalCost = extraCost + roomCost + amentitiesCost;
  console.log(totalCost);

  balanceAmount = totalCost - advanceAmount.value;
  document.getElementById("nameValue").innerText = customerName.value;

  document.getElementById("checkInDateValue").innerText = checkInDate.value;

  document.getElementById("totalDaysValue").innerText = totalDays.value;

  document.getElementById("totalPersonsValue").innerText = totalPersons.value;

  document.getElementById("advanceAmountValue").innerText = advanceAmount.value;

  document.getElementById("extraCost").innerText = extraCost;

  document.getElementById("roomType").innerText = roomType;

  document.getElementById("totalAmountValue").innerText = totalCost;

  document.getElementById("balanceAmountValue").innerText = balanceAmount;

  document.getElementById("amenti").innerText = amentities;
}
