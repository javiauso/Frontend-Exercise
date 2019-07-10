// Components:
import Acordion from './Acordion/Acordion';
import Bonus from './Bonus/Bonus';
// Services:
import AcordionService from '../services/acordion';

class App {
  constructor({ element }) {
    this.app = document.querySelector(element);
    this.acordion = new Acordion(AcordionService.getConfig());
    this.loading = false;
    this.bonus = false;
    this.handleBonusClick = this.handleBonusClick.bind(this);
    this.render();
  }

  init() {
    document.querySelector('.App-bonusButton').addEventListener('click', this.handleBonusClick);
  }

  handleBonusClick() {
    if (!this.bonus) {
      this.loading = true;
      AcordionService.loadBonus().then(bonus => {
        this.loading = false;
        this.bonus = Bonus(bonus);
        this.render();
      });
    } else {
      this.bonus = false;
    }
    this.render();
  }

  render() {
    const component = this.bonus ? this.bonus : this.acordion.render();
    this.app.innerHTML = `
      <div class="App">
        <div class="App-logo"></div>
        <div class="App-content">
          ${this.loading ? 'Cargando...' : component}
          <span class="App-bonusButton">${this.bonus ? 'Volver' : 'Bonus'}</span>
        </div>
      </div>
    `;
    this.init();
    if (!this.loading && !this.bonus) {
      this.acordion.init();
    }
  }
}

export default App;
