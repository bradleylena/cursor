/**
 * Reusable Pricing Card Component
 */
class PricingCard {
  constructor(config) {
    this.title = config.title || 'Plan';
    this.price = config.price || '$0.00';
    this.period = config.period || '/month';
    this.features = config.features || [];
    this.buttonText = config.buttonText || 'Get Started';
    this.buttonAction = config.buttonAction || (() => {});
  }

  /**
   * Generate the HTML structure for the pricing card
   */
  render() {
    const cardElement = document.createElement('div');
    cardElement.className = 'pricing-card';
    
    // Generate features list
    const featuresHTML = this.features
      .map(feature => `<li>${feature}</li>`)
      .join('');
    
    cardElement.innerHTML = `
      <h2 class="pricing-card__title">${this.title}</h2>
      <p class="pricing-card__price">${this.price} ${this.period}</p>
      <ul class="pricing-card__features">
        ${featuresHTML}
      </ul>
      <button class="pricing-card__btn">${this.buttonText}</button>
    `;
    
    // Add event listener to button
    const button = cardElement.querySelector('.pricing-card__btn');
    button.addEventListener('click', this.buttonAction);
    
    return cardElement;
  }

  /**
   * Render the card and append it to a container
   */
  appendTo(container) {
    const element = this.render();
    container.appendChild(element);
    return element;
  }
}

/**
 * Utility function to create multiple pricing cards
 */
function createPricingCards(cardsConfig, container) {
  // Clear existing content
  container.innerHTML = '';
  
  // Create cards
  cardsConfig.forEach(config => {
    const card = new PricingCard(config);
    card.appendTo(container);
  });
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PricingCard, createPricingCards };
}