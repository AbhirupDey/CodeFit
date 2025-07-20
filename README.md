# CodeFit - AI-Powered Fitness Coach

CodeFit is a modern AI-powered fitness application that provides personalized workout routines and diet plans through voice conversation with an AI assistant.

## ✨ Features

- **AI Voice Assistant**: Interactive voice conversations with CodeFit AI for personalized fitness guidance
- **Personalized Programs**: Custom workout routines and diet plans tailored to your needs
- **Real-time Chat**: Voice-to-text transcription during AI conversations
- **User Authentication**: Secure login with Clerk authentication
- **Modern UI**: Sleek, responsive design with Tailwind CSS and shadcn/ui components
- **Real-time Database**: Powered by Convex for seamless data management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: Clerk
- **Database**: Convex
- **AI Voice**: Vapi.ai for voice interactions
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui with Radix primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/codefit.git
   cd codefit
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   CONVEX_DEPLOY_KEY=your_convex_deploy_key
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
   ```

4. Set up Convex:
   ```bash
   npx convex dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📱 Usage

1. **Sign Up/Login**: Create an account or login using Clerk authentication
2. **Generate Program**: Click "Build Your Program" to start a voice conversation with the AI
3. **Voice Interaction**: Talk to CodeFit AI about your fitness goals, preferences, and requirements
4. **Get Personalized Plan**: Receive custom workout routines and diet recommendations
5. **View Profile**: Access your generated programs and track your progress

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### AI Voice Assistant

- Real-time voice conversation with CodeFit AI
- Speech-to-text transcription
- Personalized responses based on user input

### Personalized Fitness Programs

- Custom workout routines based on your goals
- Personalized diet plans and nutrition advice
- Adaptive recommendations based on preferences

### Modern User Experience

- Responsive design for all devices
- Smooth animations and transitions
- Real-time updates and feedback

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vapi.ai](https://vapi.ai) for voice AI capabilities
- [Clerk](https://clerk.dev) for authentication
- [Convex](https://convex.dev) for real-time database
- [shadcn/ui](https://ui.shadcn.com) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) for styling

---