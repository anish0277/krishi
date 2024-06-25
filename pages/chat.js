import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Chat() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">Chat with Krishi Buddy</h1>
          <p className="mb-6 text-gray-700 text-center">
            Welcome to the chat page! Here you can interact with our Krishi Buddy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
