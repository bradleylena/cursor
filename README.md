# Reusable Pricing Card Component

A modern, responsive pricing card component that can be easily customized and reused across different projects.

## Bugs Fixed from Original Code

1. **CSS Typo**: Fixed `box-shdow` → `box-shadow`
2. **HTML Syntax Error**: Fixed unclosed `<h2>` tag: `<h2 class="title">Basic Plan<h2>` → `<h2 class="pricing-card__title">Basic Plan</h2>`

## Features

- ✅ Fully reusable and configurable
- ✅ Responsive design (mobile-friendly)
- ✅ Modern hover effects and animations
- ✅ BEM CSS naming convention
- ✅ Clean JavaScript class-based architecture
- ✅ Support for multiple cards in a container
- ✅ Customizable button actions
- ✅ Checkmark icons for features

## Files Structure

```
├── pricing-card.css    # Component styles
├── pricing-card.js     # Component JavaScript
├── demo.html          # Example implementation
├── index.html         # Original (buggy) version
└── README.md          # This documentation
```

## Usage

### Basic Usage

1. Include the CSS and JavaScript files:
```html
<link rel="stylesheet" href="pricing-card.css">
<script src="pricing-card.js"></script>
```

2. Create a container for your pricing cards:
```html
<div class="pricing-container" id="pricing-container"></div>
```

3. Initialize the pricing cards with JavaScript:
```javascript
const pricingPlans = [
    {
        title: 'Basic Plan',
        price: '$9.99',
        period: '/month',
        features: [
            '1 GB Storage',
            'Basic Support',
            'All Core Features'
        ],
        buttonText: 'Start Trial',
        buttonAction: () => {
            console.log('Basic plan selected!');
        }
    }
];

const container = document.getElementById('pricing-container');
createPricingCards(pricingPlans, container);
```

### Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | `'Plan'` | The plan title |
| `price` | string | `'$0.00'` | The price amount |
| `period` | string | `'/month'` | The billing period |
| `features` | array | `[]` | List of features |
| `buttonText` | string | `'Get Started'` | Button text |
| `buttonAction` | function | `() => {}` | Button click handler |

### Advanced Usage

#### Single Card Instance
```javascript
const card = new PricingCard({
    title: 'Pro Plan',
    price: '$19.99',
    period: '/month',
    features: ['10 GB Storage', 'Priority Support'],
    buttonText: 'Choose Pro',
    buttonAction: () => window.location.href = '/signup/pro'
});

const element = card.render();
document.body.appendChild(element);
```

#### Multiple Cards with Different Actions
```javascript
const plans = [
    {
        title: 'Starter',
        price: 'Free',
        period: '',
        features: ['1 GB Storage', 'Community Support'],
        buttonText: 'Get Started',
        buttonAction: () => signup('starter')
    },
    {
        title: 'Enterprise',
        price: 'Custom',
        period: '',
        features: ['Unlimited Storage', '24/7 Support'],
        buttonText: 'Contact Sales',
        buttonAction: () => openContactForm()
    }
];
```

## CSS Classes

The component uses BEM methodology for CSS class naming:

- `.pricing-card` - Main card container
- `.pricing-card__title` - Plan title
- `.pricing-card__price` - Price display
- `.pricing-card__features` - Features list
- `.pricing-card__btn` - Action button
- `.pricing-container` - Container for multiple cards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills for modern JavaScript features)

## Responsive Design

The component is fully responsive and includes:
- Flexible layout that adapts to different screen sizes
- Mobile-optimized spacing and typography
- Stack layout on smaller screens

## Demo

Open `demo.html` in your browser to see the component in action with multiple pricing plans.

## License

Free to use and modify for any purpose.