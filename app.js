function ampm(time) {
  console.log(time);
  if (time.value !== "") {
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];
    let suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    const displayTime =
      hours - 9 + ":" + (minutes - 45) + " " + suffix + "  suggested";
    const displayTimeTwo =
      hours - "7" + ":" + minutes - "45" + " " + suffix + "  suggested";
    const displayTimeThree = hours - 6 + ":" + minutes - 15 + " " + suffix;
    const displayTimeFour = hours - 4 + ":" + minutes - 45 + " " + suffix;
    const displayTimeFive = hours - 3 + ":" + minutes - 15 + " " + suffix;
    const displayTimeSix = hours - 1 + ":" + minutes - 45 + " " + suffix;

    document.getElementById("display_time").innerHTML = displayTime;
    document.getElementById("display_time_two").innerHTML = displayTimeTwo;
    document.getElementById("display_time_three").innerHTML = displayTimeThree;
    document.getElementById("display_time_four").innerHTML = displayTimeFour;
    document.getElementById("display_time_five").innerHTML = displayTimeFive;
    document.getElementById("display_time_six").innerHTML = displayTimeSix;
  }
}

const app = Vue.createApp({
  data() {
    return {
      clockInput: "",
      clockSpan: "",
    };
  },
  methods: {
    timeCatch(e) {
      this.clockInput = e.target.value;
      console.log(this.clockInput);
    },
  },
});
app.mount("main");

console.log(typeof $dateControl);
