var barChart = [{
        day: "mon",
        amount: 17.45
    },
    {
        day: "tue",
        amount: 34.91
    },
    {
        day: "wed",
        amount: 52.36
    },
    {
        day: "thu",
        amount: 31.07
    },
    {
        day: "fri",
        amount: 23.39
    },
    {
        day: "sat",
        amount: 43.28
    },
    {
        day: "sun",
        amount: 25.48
    }
];

const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const d = new Date();
let day = weekday[d.getDay()];

for (i = 0; i < barChart.length; i++) {
    document.getElementById('bar' + i).style.height = barChart[i].amount * 2 + "px";
    document.getElementById('day' + i).innerHTML = barChart[i].day
    document.getElementById('tooltip' + i).innerHTML = "$" + barChart[i].amount
    if (barChart[i].day == day) {
        document.getElementById('bar' + i).style.backgroundColor = "hsl(186, 34%, 60%)";
    }
}