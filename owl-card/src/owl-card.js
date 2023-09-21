import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class OwlCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    .wrapper {
      display: inline-flex;
    }

    .card, #card {
      max-width: 400px;
      margin: 8px;
      padding: 16px;
      border: 8px solid gray;
      background-color: black;
      text-align: center;
    }

    .card img, #card img {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      border: 4px solid grey;
    }

    .card h1, #card h1 {
      font-size: 32px;
      margin-bottom: 32px;
      color: white;
    }

    details {
      font-size: 16px;
      color: white;
      display: inline-block;
    }

    p {
      font-size: 16px;
      color: white;
    }

    #description.toggled {
      display: none;
    }

    .button-other:hover, .button-other:focus {
      color: orange;
      background-color: white;
    }

    @media screen and (max-width: 799px) {
      details {
        display: none;
      }
    }

    @media screen and (max-width: 500px) {
      div {
        transform: scale(0.7);
      }
    }

    .button-other { 
      font-size: 22px;
      text-decoration: none;
      background-color: #A6AEB1;
      color: black;
      padding: 8px 16px;
      border-radius: 16px;
      height:50px
    }

    #card.toggled {
      max-width: 400px;
      margin: 8px;
      padding: 16px;
      border: 8px solid gray;
      background-color: #FC4B00;
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="wrapper">

    <div class="card" id="card">

    <h1>super</h1>
      
    <img src="https://www.gamersdecide.com/sites/default/files/authors/u156421/super.jpg" alt="Card Image">
      
      <details>
        <summary>Description</summary>
        <p>Matthew "super" DeLisi is a retired American player who last played for San Francisco Shock. He is one of the most decorated competitive Overwatch players, being a two time Overwatch League Champion, World Cup Champion, Stage 2 Champion, May Melee Tournament Champion, Role Star, All Star and MVP Runner-Up.</p>
      </details>
      
    </div>
      
    <Button class="button-other" id="button-duplicate">Duplicate</Button>
    
    <Button class="button-other" id="button-delete">Delete</Button>
      
    <Button class="button-other" id="button-color" onClick="toggleBackground()">Toggle Background Color</Button>

    <Button class="button-other" id="button-heading" onClick="changeHeading()">Change Heading</Button>
      
    <Button class="button-other" id="button-description" onClick="toggleDescription()">Toggle Description</Button>
      
    </div>  
    `;
  }
}

customElements.define('owl-card', OwlCard);