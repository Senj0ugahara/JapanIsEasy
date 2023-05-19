let app = {
  data() {
    return {
      showMain: true,
      showDesc: false,
      showSocial: false,
      showPlay: false,
      showResult: false,
      number: 0,
      scoreRight: 0,
      scoreWrong: 0,
      time: 30,
      count: null,
      questions: questions,
      selectedBtn: null,
    }
  },
  methods: {
    goToMain() {
      this.showMain   = true;
      this.showDesc   = false;
      this.showSocial = false;
      this.showPlay   = false;
      this.showResult  = false;
    },
    goToDesc() {
      this.showMain   = false;
      this.showDesc   = true;
      this.showSocial = false;
      this.showPlay   = false;
      this.showResult  = false;
    },
    goToSocial() {
      this.showMain   = false;
      this.showDesc   = false;
      this.showSocial = true;
      this.showPlay   = false;
      this.showResult  = false;
    },
    goToPlay() {
      this.scoreRight = 0;
      this.scoreWrong = 0;
      this.timer();
      this.showMain   = false;
      this.showDesc   = false;
      this.showSocial = false;
      this.showPlay   = true;
      this.showResult  = false;
    },
    goToResult() {
      this.showMain   = false;
      this.showDesc   = false;
      this.showSocial = false;
      this.showPlay   = false;
      this.showResult  = true;
    },
    nextQuestions(answer) {
      if (this.number == 44) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGame();
      } else {
        this.number++;
        this.time = 30;
      }
      eval(answer);
    },
    timer() {
      this.time--;
      if (this.time < 10) {
        this.time = `0${this.time}`;
      }
      if (this.time <= 0) {
        this.scoreWrong++
        alert('Время вышло');
        clearTimeout(this.count);
        this.number++;
        this.time = 30;
        this.timer();
      } else {
        this.count = setTimeout(this.timer, 1000);
      }
      if (this.number > 44) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGame();
      }
    },
    endGame() {
      this.goToResult();
    }
  }
}

Vue.createApp(app).mount('.main');