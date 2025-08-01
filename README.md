# AI Text-to-Image Generator
A modern, responsive React application that transforms text descriptions into AI-generated images using Black Forest Labs' FLUX.1-schnell model. Built with React functional components and styled with Tailwind CSS, this web app provides an intuitive interface for creating digital art through natural language prompts.

The application features a clean, gradient-based design that works seamlessly across all devices, from mobile phones to desktop computers. Users can enter descriptive text, select from sample prompts, and generate high-quality images with real-time loading feedback and one-click download functionality.

## Key Highlights:
Leverages Stable Diffusion for creating unique images from text

- 🎨 **AI Image Generation**: Leverages FLUX.1-schnell for ultra-fast, high-quality image creation from text.

- 📱 **Fully Responsive**: Mobile-first design that adapts to any screen size.

- ⚡ **Optimized Performance**: Efficient React hooks and state management.
  
- 🎯 **User-Friendly**: Intuitive interface with sample prompts and error handling.
  
- 🔧 **Clean Architecture**: Modular, maintainable codebase following React best practices.

# 🌟 Features
  - **AI-Powered Image Generation**: Leverages FLUX.1-schnell model via Hugging Face API.
    
  - **Intuitive User Interface**: Clean, modern design with gradient backgrounds and smooth animations.
    
  - **Sample Prompts**: Pre-built prompt suggestions to get users started quickly.
    
  - **Real-time Loading States**: Visual feedback during image generation process.
    
  - **Image Download**: One-click download functionality for generated images.
    
  - **Error Handling**: Comprehensive error messages and validation.
    
  - **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices.
    
  - **Accessibility**: Proper form labels and keyboard navigation support.

# 🚀 Getting Started
### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**(v14.0.0 or higher).

- **Npm** or **yarn** package manager.

- **Hugging Face Account** with API access.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/ai-text-to-image-generator.git

cd ai-text-to-image-generator
```

**2. Install dependencies**
```bash
npm install
   # or
yarn install
```

**3. Install required packages** (if not using Create React App)
``` bash
npm install react react-dom

# For styling (if using Tailwind)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
# 🔧 Configuration
### Setting up Hugging Face API
**1. Create a Hugging Face account:** at https://huggingface.co

**2. Generate an API token:** 
- Go to your Hugging Face settings
- Click "New token"
- Select "Read" permissions
- Copy the generated token

**3. Add your API key to the application:**

**Option 1: Environment Variables (Recommended)**
Create a .env file in the root directory:
``` env
REACT_APP_HF_API_KEY=your_hugging_face_api_key_here
```

Then update the component:
``` javascript
const API_KEY = process.env.REACT_APP_HF_API_KEY;
```

**Option 2: Direct Replacement**
Replace ```'YOUR_HF_API_KEY'``` in the ```TextToImage.js``` file with your actual API key:
``` javascript
const API_KEY = 'hf_your_actual_api_key_here';
```
### Tailwind CSS Configuration
If you're setting up Tailwind CSS manually, update your ```tailwind.config.js```:
``` javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to your ```src/index.css```:
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# 🏃 Running the Application
**1. Start the development server**
``` bash
npm start
  # or
yarn start
```
**2. Open your browser** and navigate to http://localhost:3000

**3. Start generating images!**
- Enter a text description
- Click "Generate Image"
- Wait for the AI to create your image
- Download your creation

# 📁 Project Strcture
```
text-to-image-generator/
├── node_modules/              # Dependencies
├── public/                    # Public assets
├── src/
│   ├── components/
│   │   ├── DownloadButton.jsx # Download functionality component
│   │   ├── Error.jsx          # Error handling component
│   │   ├── GenerateButton.jsx # Image generation button
│   │   ├── ImageDisplay.jsx   # Generated image display
│   │   └── TexttoImage.jsx    # Main component
│   ├── service/
│   │   └── apiTexttoImage.js  # Hugging Face API integration
│   ├── App.jsx                # App wrapper
│   ├── index.js               # Entry point
│   └── index.css              # Tailwind styles
├── .env.local                 # Environment variables
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

# 🛠️ Build With
- **React** - Frontend library
- **TailwindCSS** - Utility-first CSS framework
- **Hugging Face API** - AI model inference
- **FLUX.1-schnell** - Ultra-fast text-to-image model by Black Forest Labs

# 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

**1. Fork the project**

**2. Create your feature branch** ```(git checkout -b feature/AmazingFeature)```

**3. Commit your changes** ```(git commit -m 'Add some AmazingFeature')```

**4. Push to the branch** ```(git push origin feature/AmazingFeature)```

**5. Open a Pull Request**

# 🙏 Acknowledgments

- **Hugging Face** for providing the AI model API
- **Black Forest Labs' FLUX.1-schnell** for the Ultra-fast text-to-image FLUX.1-schnell model
- **Tailwind CSS** for the utility-first CSS framework
