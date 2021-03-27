function ampm(time) {
  console.log(time);

  if (time.value !== "") {
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];
    let $milisecondsValue = hours * 60000 * 60 + minutes * 60100;
    console.log($milisecondsValue);

    let timeInMiliseconds = $milisecondsValue;
    let h, m, s;
    h = Math.floor(timeInMiliseconds / 1000 / 60 / 60);
    m = Math.floor((timeInMiliseconds / 1000 / 60 / 60 - h) * 60);

    m < 10 ? (m = `0${m}`) : (m = `${m}`);
    h < 10 ? (h = `0${h}`) : (h = `${h}`);
    let suffix = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    console.log(`${h}:${m}`);

    let displayTime = `${h}:${m}` + " " + suffix + "  suggested";
    let displayTimeTwo = `${h}:${m}` + " " + suffix + "  suggested";
    const displayTimeThree = `${h}:${m}` + " " + suffix;
    const displayTimeFour = `${h}:${m}` + " " + suffix;
    const displayTimeFive = `${h}:${m}` + " " + suffix;
    const displayTimeSix = `${h}:${m}` + " " + suffix;

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
      this.clockInput.value = "";
    },
  },
});
app.mount("main");
