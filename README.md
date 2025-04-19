# Les Chimères Restaurant Landing Page with n8n Chatbot

A beautiful, responsive landing page for Les Chimères, a French restaurant and cocktail bar, featuring an AI-powered chatbot built with n8n.

## Project Background

This project was built as a learning exercise to understand how to create a RAG (Retrieval-Augmented Generation) agent workflow using n8n, inspired by Leon van Zyl's tutorial ["Build a ChatGPT-like Chatbot with your own data using n8n"](https://www.youtube.com/watch?v=UeFi5oV9UpY).

## Features

- Elegant, modern design inspired by French bistro aesthetics
- Fully responsive layout that works on all devices
- Interactive menu preview with categories
- Restaurant information sections (About, Location, Hours)
- Reservation system with form submission
- Mobile-friendly navigation
- Animated content sections
- AI-powered chatbot for customer service using n8n

## Technologies Used

- HTML5
- CSS3 with custom variables and modern layout techniques (Grid, Flexbox)
- Vanilla JavaScript for interactivity
- Google Fonts (Playfair Display and Poppins)
- n8n for chatbot functionality
- RAG (Retrieval-Augmented Generation) for intelligent responses

## Project Structure

```
restaurant-landing-page/
├── index.html           # Main HTML file
├── styles.css           # CSS styles
├── script.js            # JavaScript functionality
└── images/              # Directory for images
    ├── logo.png
    ├── hero-bg.jpg
    ├── restaurant-interior.jpg
    ├── map-placeholder.jpg
    ├── qr-code.png
    └── logo-small.png
```

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your web browser to view the landing page
3. For the chatbot functionality:
   - Set up an n8n instance
   - Configure the RAG workflow as shown in the tutorial
   - Update the webhook URL in the chatbot configuration

## Customization

To customize this landing page for another restaurant:

1. Replace all instances of "Les Chimères" with your restaurant name
2. Update menu items, prices, and categories in the HTML
3. Replace images in the `images` directory with your own
4. Modify color scheme in the CSS `:root` variables
5. Update contact information and address
6. Configure the chatbot with your own data

## Browser Compatibility

This landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is available for personal and commercial use.

## Credits

- Tutorial by [Leon van Zyl](https://www.youtube.com/watch?v=UeFi5oV9UpY) for the n8n RAG agent workflow implementation
- Fonts: Google Fonts (Playfair Display, Poppins)
- Design inspiration: Classic French bistro menus and modern restaurant websites 