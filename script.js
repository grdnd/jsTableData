// import data
const data = [
  { region: "US", model: "A", sales: 150 },
  { region: "US", model: "B", sales: 120 },
  { region: "US", model: "C", sales: 350 },
  { region: "EU", model: "A", sales: 200 },
  { region: "EU", model: "B", sales: 100 },
  { region: "EU", model: "C", sales: 250 },
  { region: "CA", model: "A", sales: 200 },
  { region: "CA", model: "B", sales: 100 },
  { region: "CA", model: "C", sales: 230 },
  { region: "CA", model: "D", sales: 400 },
];

// initialize function to build table data
function init() {
  // setup empty total
  let salesTotal = {};

  data.forEach((item) => {
    // destructure data
    regions = item.region;
    sales = item.sales;
    // console.log(regions);
    // console.log(sales);

    // check if each region has their sales totaled up
    // If not, add up
    // else, get sales totals
    salesTotal[regions]
      ? (salesTotal[regions] += sales)
      : (salesTotal[regions] = sales);
  });

  // setup empty table
  let dataTable = {};

  // generate new rows for data
  data.forEach((item) => {
    let row = document.createElement("tr");
    Object.entries(item).forEach(([key, value]) => {
      let tableData = document.createElement("td");

      tableData.innerHTML = value;
      row.appendChild(tableData);
      // console.log(tableData);
    });
    // check if each region has a sales total row
    dataTable[item.region]
      ? dataTable[item.region].push(row)
      : (dataTable[item.region] = [row]);

    // console.log(dataTable);
  });

  // create new row to display sales totals per region with static cell
  Object.entries(dataTable).forEach(([key, value]) => {
    let table = document.getElementById("table");
    let totalRow = document.createElement("tr");

    totalRow.innerHTML = `<td>
      ${key}
    </td>
    <td>
      sum
    </td>
    <td>
      ${salesTotal[key]}
    </td>`;

    table.appendChild(totalRow);

    dataTable[key].forEach((sums) => {
      table.appendChild(sums);
    });
  });
}

// init
init();
