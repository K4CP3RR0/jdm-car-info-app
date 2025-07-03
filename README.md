# 🚗 JDM Car Info App

A comprehensive mobile application dedicated to Japanese Domestic Market (JDM) cars, featuring detailed information about iconic and rare JDM vehicles.

![JDM Logo](assets/images/jdm-logo.png)

## 📱 Features

- **Car Database**: Browse through a curated collection of JDM cars
- **Detailed Information**: View comprehensive details about each vehicle including:
  - Brand and model information
  - Body type specifications
  - Engine capacity details
  - High-quality images
- **Search & Filter**: Find specific cars using advanced search functionality
- **Modern UI**: Beautiful, responsive interface with dark/light theme support
- **Cross-Platform**: Works on iOS, Android, and Web

## 🚀 Current Car Collection

The app currently features information about these legendary JDM cars:

1. **Toyota Supra MK4** - The legendary twin-turbo icon
2. **Nissan Skyline GT-R R34** - The ultimate Godzilla
3. **Honda NSX Type R** - The supercar from Honda
4. **Mazda RX-7 FD3S** - The rotary-powered beauty
5. **Mitsubishi Lancer Evolution VI** - The rally-bred legend

*More cars are being added regularly!*

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with bottom tabs
- **TypeScript**: Full TypeScript support
- **Styling**: StyleSheet with themed components
- **State Management**: React Hooks
- **Images**: Expo Image for optimized image handling
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- For mobile development:
  - Android Studio (for Android)
  - Xcode (for iOS, macOS only)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jdm-car-info-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`

## 📱 App Structure

```
app/
├── (tabs)/                 # Tab-based navigation
│   ├── index.tsx          # Home screen
│   ├── list.tsx           # Car list screen
│   ├── search.tsx         # Search functionality
│   └── about.tsx          # About page
├── _layout.tsx            # Root layout
└── +not-found.tsx         # 404 page

components/
├── CarList.tsx            # Car listing component
├── CarScreen.tsx          # Individual car details
├── ThemedText.tsx         # Themed text component
├── ThemedView.tsx         # Themed view component
└── ui/                    # UI components
```

## 🎨 Screenshots

*Screenshots will be added soon*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contributing Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Roadmap

- [ ] Add more JDM cars to the database
- [ ] Implement advanced search filters (year, engine type, etc.)
- [ ] Add car comparison feature
- [ ] Include specifications and performance data
- [ ] Add user favorites functionality
- [ ] Implement car news section
- [ ] Add community features

## 🐛 Issues

Found a bug? Please open an issue on GitHub with:
- Device/platform information
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

Created with ❤️ by **808Dev**

![808Dev Logo](assets/images/808devlogo.png)

## 🙏 Acknowledgments

- Thanks to the JDM community for inspiration
- Expo team for the amazing framework
- React Native community for continuous support

---

**Note**: This app is for educational and informational purposes. All car information is sourced from publicly available data and community contributions.

