# 🌍 World Capital Explorer

![App Preview](https://via.placeholder.com/1280x600/3c40c6/ffffff?text=World+Capital+Explorer+Demo)  
*(Replace with actual screenshot)*

An interactive React application showcasing all 200+ world capitals with Redux state management. Perfect for geography enthusiasts and travelers!

## ✨ Key Features

- **Comprehensive Database**  
  📌 Displays capitals of every recognized sovereign state  
  🔄 Real-time data fetching via REST Countries API

- **Modern Tech Stack**  
  ⚛️ React + TypeScript  
  🏗️ Redux with Thunk middleware  
  🌐 Axios for API calls  
  🛠️ Redux DevTools integration

- **User Experience**  
  ⏳ Loading/error states handling  
  📱 Fully responsive design  
  🔍 Expandable for future search/filter features

## 🛠️ Tech Stack

| Category       | Technologies                                                                                   |
|----------------|------------------------------------------------------------------------------------------------|
| **Frontend**   | ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-593D88?logo=redux&logoColor=white) |
| **API**        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) [REST Countries](https://restcountries.com/) |
| **Dev Tools**  | ![Redux DevTools](https://img.shields.io/badge/Redux_DevTools-593D88?logo=redux&logoColor=white) |

## 🚀 Quick Start

### Prerequisites
- Node.js ≥14
- npm ≥6 or yarn

### Installation
```bash
git clone https://github.com/yourusername/world-capital-explorer.git
cd world-capital-explorer
npm install
npm start
```

The app will launch at [http://localhost:3000](http://localhost:3000)

## 📂 Project Architecture
```
src/
├── pages/
│   ├── Home.tsx        # Main view with capitals list
│   └── Country.tsx     # (Future) Detailed country view
├── redux/
│   ├── actions/
│   │   └── countries.ts # Async action creators
│   ├── reducers/
│   │   └── countries.ts # State management logic
│   └── store.ts        # Redux store configuration
├── types.ts            # TypeScript interfaces
└── App.tsx             # Root component
```

## 🌐 API Usage
```typescript
// Example API call in Redux action
axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    dispatch(fetchCountriesSuccess(response.data))
  })
```

**Endpoint**: `https://restcountries.com/v3.1/all`  
**Data Structure**:
```json
{
  "name": {
    "common": "Finland",
    "official": "Republic of Finland"
  },
  "capital": ["Helsinki"],
  // ...other fields
}
```

## 🧑‍💻 Development Guide

### Common Commands
| Command         | Action                              |
|-----------------|-------------------------------------|
| `npm start`     | Launch development server           |
| `npm run build` | Create production build             |
| `npm test`      | Run test suite                      |

