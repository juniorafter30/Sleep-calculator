function ampm(time) {
  console.log(time);

  if (time.value !== "") {
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];
    let suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    let displayTime = hours + ":" + minutes + " " + suffix + "  suggested";
    let displayTimeTwo = hours + ":" + minutes + " " + suffix + "  suggested";
    const displayTimeThree = hours + ":" + minutes + " " + suffix;
    const displayTimeFour = hours + ":" + minutes + " " + suffix;
    const displayTimeFive = hours + ":" + minutes + " " + suffix;
    const displayTimeSix = hours + ":" + minutes + " " + suffix;

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
      hidden: true,
    };
  },
  computed: {
    classChanger() {
      return {
        hidden: this.hidden,
        hidden: !this.hidden,
      };
    },
  },
  methods: {
    timeCatch(e) {
      this.clockInput = e.target.value;
      console.log(this.clockInput);
    },
    isActive() {
      this.hidden = !this.hidden;
    },
  },
});
app.mount("main");
