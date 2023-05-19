let app = {
  data() {
    return {
      showMain: true,
      showDesc: false,
      showSocial: false,
      showPlayHira: false,
      showPlayKata: false,
      showResultHira: false,
      showResultKata: false,
      number: 0,
      scoreRight: 0,
      scoreWrong: 0,
      time: 30,
      count: null,
      questionsHira: questionsHira,
      questionsKata: questionsKata,
      selectedBtn: null,
    }
  },
  methods: {
    goToMain() {
      this.showMain           = true;
      this.showDesc           = false;
      this.showSocial         = false;
      this.showPlayHira       = false;
      this.showPlayKata       = false;
      this.showResultHira     = false;
      this.showResultKata     = false;
    },
    goToDesc() {
      this.showMain           = false;
      this.showDesc           = true;
      this.showSocial         = false;
      this.showPlayHira       = false;
      this.showPlayKata       = false;
      this.showResultHira     = false;
      this.showResultKata     = false;
    },
    goToSocial() {
      this.showMain           = false;
      this.showDesc           = false;
      this.showSocial         = true;
      this.showPlayHira       = false;
      this.showPlayKata       = false;
      this.showResultHira     = false;
      this.showResultKata     = false;
    },
    goToPlayHira() {
      this.scoreRight = 0;
      this.scoreWrong = 0;
      this.timer();
      this.showMain           = false;
      this.showDesc           = false;
      this.showSocial         = false;
      this.showPlayHira       = true;
      this.showPlayKata       = false;
      this.showResultHira     = false;
      this.showResultKata     = false;
    },
    goToPlayKata() {
      this.scoreRight = 0;
      this.scoreWrong = 0;
      this.timer();
      this.showMain           = false;
      this.showDesc           = false;
      this.showSocial         = false;
      this.showPlayHira       = false;
      this.showPlayKata       = true;
      this.showResultHira     = false;
      this.showResultKata     = false;
    },
    goToResultHira() {
      this.showMain           = false;
      this.showDesc           = false;
      this.showSocial         = false;
      this.showPlayHira       = false;
      this.showPlayKata       = false;
      this.showResultHira     = true;
      this.showResultKata     = false;
    },
    goToResultKata() {
      this.showMain           = false;
      this.showDesc           = false;
      this.showSocial         = false;
      this.showPlayHira       = false;
      this.showPlayKata       = false;
      this.showResultHira     = false;
      this.showResultKata     = true;
    },
    nextQuestions(answer) {
      if (this.number == 44 && this.showPlayHira == true) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGameHira();
      } else if (this.number == 44 && this.showPlayKata == true) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGameKata();
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
      if (this.number > 44 && this.showPlayHira == true) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGameHira();
      } else if (this.number > 44 && this.showPlayKata == true) {
        clearTimeout(this.count);
        this.number = 0;
        this.endGameKata();
      }
    },
    endGameHira() {
      this.goToResultHira();
    },
    endGameKata() {
      this.goToResultKata();
    }
  }
}

Vue.createApp(app).mount('.main');