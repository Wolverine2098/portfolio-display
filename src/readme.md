# Cryptocurrency Tracker Dashboard

This project is a React-based cryptocurrency tracking application that displays a list of cryptocurrencies, allows users to input their holdings, and calculates the portfolio value based on current prices.

## Problem Statement

Create a dashboard that displays a list of cryptocurrencies along with their current prices.

**Requirements:**
1. Use any publicly available APIs to fetch price data.
2. Allow users to create price alerts for when a cryptocurrency goes above or below a specified value.
3. Send alerts via email.
4. Update the portfolio based on the current asset prices, with an acceptable delay of up to 10 minutes for price updates.

**Note**: This code currently displays prices and portfolio values but does not yet implement the email alerts for price changes.

## Features

- **Cryptocurrency Dashboard**: Displays a list of cryptocurrencies along with current prices.
- **Holdings Input**: Users can input the amount they hold of each cryptocurrency.
- **Portfolio Calculation**: The application calculates the portfolio value based on the entered holdings and current prices.
- **View Toggle**: Allows users to switch between the dashboard (price list) and portfolio views.

## Getting Started

### Prerequisites

- Ensure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with:

   ```bash
   npm install
   ```

4. Run the app with:

   ```bash
   npm start
   ```

The app should be running on `http://localhost:3000`.

## Code Overview

The main functionality is within the `App` component:

### State Variables

- `cryptoData`: Stores cryptocurrency data fetched from an API.
- `holdings`: Stores the user-defined holdings for each cryptocurrency.
- `portfolio`: Stores the calculated value of each cryptocurrency holding.
- `showPortfolio`: Toggles between the Dashboard view and Portfolio view.

### Components and Functions

1. **`fetchData`**: An asynchronous function that fetches cryptocurrency data from the CoinCap API. This data is stored in `cryptoData`.

2. **`useEffect` Hook**: Automatically calls `fetchData` when the component mounts to populate `cryptoData`.

3. **`handleHoldingChange`**: Updates the holdings and calls `calculatePortfolioValue` whenever the user modifies their holding amount.

4. **`calculatePortfolioValue`**: Calculates the value of each cryptocurrency holding by multiplying the holding amount by the current price. Updates the `portfolio` state with this calculated value.

### Rendered Components

- **Header**: Contains the title and buttons to toggle between Dashboard and Portfolio views.
- **Dashboard View**: Displays a list of cryptocurrencies with current prices. Users can enter the amount they hold for each cryptocurrency and set alerts (currently placeholders).
- **Portfolio View**: Displays the portfolio value based on holdings input in the Dashboard view.

## Future Enhancements

- **Email Alerts**: Implement functionality to send email alerts when a cryptocurrency's price goes above or below a specified value.
- **Automatic Data Refresh**: Set up data refresh at intervals (e.g., every 10 minutes) to keep portfolio values updated.
- **User Authentication**: Add authentication to allow users to save their portfolio across sessions.

## API Used

This application uses the [CoinCap API](https://api.coincap.io/v2/assets) to fetch real-time cryptocurrency data.

## Styles

Custom styling is applied using the `styles.css` file for layout and component styling.

## Example Usage

1. Open the application and view the list of available cryptocurrencies along with their current prices.
2. Enter the amount held for any cryptocurrency in the input field.
3. Switch to the Portfolio view to see the calculated values based on your holdings.

This project provides a foundational cryptocurrency tracker that can be extended with additional features to improve usability and functionality.