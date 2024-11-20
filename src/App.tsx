import React from 'react';
import { HeartCrack } from 'lucide-react';
import LetterForm from './components/LetterForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HeartCrack className="h-16 w-16 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Szakitsunk - Online szolgáltatás
          </h1>
          <p className="text-xl text-gray-600">
            Válassz egy sablont, szabd személyre, és küldd el a szakítóleveled gyorsan és egyszerüen!
          </p>
        </div>

        <LetterForm />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;