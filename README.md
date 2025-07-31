# AI Text-to-Image Generator

A modern, responsive React application that transforms text descriptions into AI-generated images using Hugging Face's Stable Diffusion model. Built with React functional components and styled with Tailwind CSS, this web app provides an intuitive interface for creating digital art through natural language prompts. Users can enter descriptive text, select from sample prompts, and generate high-quality images with real-time loading feedback and one-click download functionality.

## Key Highlights:
Leverages Stable Diffusion for creating unique images from text

- 🎨 **AI Image Generation**: Leverages Stable Diffusion for creating unique images from text.

- 📱 **Fully Responsive**: Mobile-first design that adapts to any screen size.

- ⚡ **Optimized Performance**: Efficient React hooks and state management.
  
- 🎯 **User-Friendly**: Intuitive interface with sample prompts and error handling.
  
- 🔧 **Clean Architecture**: Modular, maintainable codebase following React best practices.

# 🌟 Features
  - **AI-Powered Image Generation**: Leverages Stable Diffusion model via Hugging Face API.
    
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

**3. Add your API key to the application:
Option 1: Environment Variables (Recommended)**
Create a .env file in the root directory:
``` env
REACT_APP_HF_API_KEY=your_hugging_face_api_key_here
```

Then update the component:
``` javascript
const API_KEY = process.env.REACT_APP_HF_API_KEY;
```

***Option 2: Direct Replacement***
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

# 🛠️ Build With
- **React** - Frontend library
- **TailwindCSS** - Utility-first CSS framework
- **Hugging Face API** - AI model inference
- **Stable Diffusion** - Text-to-image model

# 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

**1. Fork the project**

**2. Create your feature branch** ```(git checkout -b feature/AmazingFeature)```

**3. Commit your changes** ```(git commit -m 'Add some AmazingFeature')```

**4. Push to the branch** ```(git push origin feature/AmazingFeature)```

**5. Open a Pull Request**

# 🙏 Acknowledgments

- **Hugging Face** for providing the AI model API
- **Stability AI** for the Stable Diffusion model
- **Tailwind CSS** for the utility-first CSS framework
