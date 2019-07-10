import Panel from './Panel/Panel';

class Acordion {
  constructor({ panels }) {
    this.panelsConfig = panels;
    this.handlePanelClick = this.handlePanelClick.bind(this);
  }

  init() {
    this.panelsConfig.forEach(panel => {
      document.querySelector(`#${panel.id}`).addEventListener('click', this.handlePanelClick);
    });
  }

  handlePanelClick(event) {
    const isPanelHeader = event.target.classList.contains('Panel-header');
    const selectedPanel = event.target.parentElement;

    if (isPanelHeader && selectedPanel) {
      this.hidePanels(selectedPanel);
      selectedPanel.classList.toggle('is-opened');
    }
  }

  hidePanels(selectedPanel) {
    const allPanels = document.querySelectorAll('.Panel');

    for (let panelPosition = 0; panelPosition < allPanels.length; panelPosition++) {
      if (!allPanels[panelPosition].isSameNode(selectedPanel)) {
        allPanels[panelPosition].classList.remove('is-opened');
      }
    }
  }

  render() {
    return `
      <div class="Acordion">
        <dl class="Acordion-content">
          ${this.panelsConfig.map(panelConfig => new Panel(panelConfig).render()).join('')}
        </dl>
      </div>
    `;
  }
}

export default Acordion;
