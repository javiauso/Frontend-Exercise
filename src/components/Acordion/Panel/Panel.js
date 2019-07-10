class Panel {
  constructor({ id, title, bodyText, isOpen }) {
    this.id = id;
    this.title = title;
    this.bodyText = bodyText;
    this.isOpen = isOpen;
  }

  render() {
    return `
        <div class="Panel${this.isOpen ? ' is-opened' : ''}">
          <dt class="Panel-header" id="${this.id}">${this.title}</dt>
          <dd class="Panel-body">
            <p>${this.bodyText}</p>
          </dd>
        </div>
    `;
  }
}

export default Panel;
