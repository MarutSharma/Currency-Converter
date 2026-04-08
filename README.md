# Currency Converter

A modern, real-time currency conversion web application that provides instant exchange rates with an intuitive and responsive user interface.

## 🌟 Features

- **Real-Time Exchange Rates**: Fetches live currency exchange rates from the ExchangeRate-API
- **150+ Currencies**: Support for major currencies worldwide
- **Country Flags**: Visual representation of currencies with corresponding country flags
- **Swap Functionality**: Quickly reverse conversion direction with a single click
- **Auto-Conversion**: Automatic calculation as you type or change currencies
- **Skeleton Loading**: Smooth loading experience with skeleton screens
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern gradient background with intuitive, user-friendly interface
- **Error Handling**: Graceful error messages and fallback mechanisms

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and form structure
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **ExchangeRate-API**: Real-time currency exchange rates
- **Font Awesome**: Icon library for visual elements
- **Flags API**: Dynamic country flag images

## 📋 Project Structure

```
Currency-Converter/
├── index.html       # Main HTML structure
├── app.js          # Core application logic
├── codes.js        # Currency and country code mappings
├── style.css       # Styling and responsive design
└── README.md       # Project documentation
```

### File Descriptions

- **index.html**: Contains the UI structure including form elements, dropdowns, and display areas
- **app.js**: Handles currency conversion logic, API calls, and event listeners
- **codes.js**: Currency code to country code mapping for flag display
- **style.css**: Complete styling including responsive breakpoints and animations

## 🚀 Getting Started

### Prerequisites

No installation or dependencies required! This is a pure client-side application that runs directly in your browser.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MarutSharma/Currency-Converter.git
   cd Currency-Converter
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Access the application**:
   - Open `http://localhost:8000` in your browser

## 💡 How to Use

1. **Enter Amount**: Type the amount you wish to convert in the input field
2. **Select Currencies**: Choose the source and target currencies from the dropdown menus
3. **View Results**: The conversion result and exchange rate are displayed instantly
4. **Swap Currencies**: Click the swap button (↔) to reverse the conversion direction
5. **Auto-Convert**: Results update automatically as you type or change selections

## 🔄 API Integration

This application uses the **ExchangeRate-API** for fetching real-time exchange rates.

- **Base URL**: `https://api.exchangerate-api.com/v4/latest`
- **Rate Limit**: Generally sufficient for personal use (check API documentation for limits)
- **Response Format**: JSON with exchange rates for multiple currencies

### Example API Call:
```javascript
GET https://api.exchangerate-api.com/v4/latest/USD
```

Response:
```json
{
  "base": "USD",
  "date": "2024-04-08",
  "rates": {
    "INR": 83.50,
    "EUR": 0.92,
    ...
  }
}
```

## 🎨 UI Components

- **Header**: Displays application title and tagline
- **Amount Input**: Numeric input field for conversion amount
- **Currency Dropdowns**: Selectable lists of available currencies with country flags
- **Swap Button**: Button to interchange source and target currencies
- **Result Display**: Shows conversion result and exchange rate
- **Convert Button**: Manual conversion trigger (also auto-triggers on input change)
- **Skeleton Loader**: Loading state with animated placeholders

## 📱 Responsive Design

The application is optimized for all screen sizes:
- **Desktop**: Full-width layout with optimal spacing
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Vertical stacking of elements with touch-friendly buttons

## ⚙️ Key Functions

### convertCurrency()
Performs the currency conversion by:
- Validating the input amount
- Fetching exchange rates from the API
- Calculating the converted amount
- Displaying results to the user

### updateFlag()
Updates the country flag image when a currency is selected based on the country code mapping.

### swapBtn Event Listener
Swaps the source and target currencies and re-triggers the conversion.

## 🐛 Error Handling

The application handles various error scenarios:
- **Invalid Input**: Defaults to 1 if empty or invalid value is provided
- **API Failures**: Displays user-friendly error message if API request fails
- **Network Issues**: Shows "Error fetching rate" message with retry capability

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security & Privacy

- All conversions happen on the client-side
- No personal data is collected or stored
- API calls are made directly from your browser
- No backend server or database required

## 📝 Code Highlights

### Real-time Conversion
```javascript
amountInput.addEventListener("change", convertCurrency);
amountInput.addEventListener("keyup", convertCurrency);
```

### API Integration
```javascript
const response = await fetch(`${BASE_URL}/${fromCurr.value}`);
const data = await response.json();
const rate = data.rates[toCurr.value];
```

### Dynamic Flag Updates
```javascript
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
};
```

## 🚀 Performance Optimizations

- **Lazy Loading**: Skeleton loader provides visual feedback during initial load
- **Debouncing**: Prevents excessive API calls with strategic event listeners
- **Async/Await**: Non-blocking API requests for smooth user experience
- **Minimal Dependencies**: No heavy frameworks or libraries for faster load times

## 📦 Future Enhancements

Potential features for future versions:
- [ ] Historical exchange rate charts
- [ ] Favorite currency pairs
- [ ] Offline mode with cached rates
- [ ] Multiple simultaneous conversions
- [ ] Dark/Light theme toggle
- [ ] Browser storage for recent conversions
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute this code.

## 🙋 Support & Issues

If you encounter any issues or have suggestions:

1. Check the [GitHub Issues](https://github.com/MarutSharma/Currency-Converter/issues) page
2. Create a new issue with detailed description
3. Include screenshots or error messages if applicable

## 👨‍💻 Author

**Marut Sharma**

- GitHub: [@MarutSharma](https://github.com/MarutSharma)
- Project: [Currency-Converter](https://github.com/MarutSharma/Currency-Converter)

## 🙏 Acknowledgments

- [ExchangeRate-API](https://exchangerate-api.com/) for providing free exchange rate data
- [Flags API](https://flagsapi.com/) for country flag images
- [Font Awesome](https://fontawesome.com/) for beautiful icons

## 📚 Resources

- [ExchangeRate-API Documentation](https://www.exchangerate-api.com/docs)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Grid & Flexbox Guide](https://css-tricks.com/)

---

**Note**: This application requires an active internet connection to fetch real-time exchange rates. Make sure the ExchangeRate-API is accessible from your location.

Last Updated: April 2024
