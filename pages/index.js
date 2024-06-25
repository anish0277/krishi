import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home(){
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">Agriculture Dataset</h1>
        <p className="mb-6 text-gray-700 text-center">
          We have different types of agriculture datasets for various regions:
        </p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 bg-white rounded-lg shadow-lg p-6">
          <Link href="/data1">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Data_1</h3>
            </div>
          </Link>
          <Link href="/data2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Data_2</h3>
            </div>
          </Link>
          <Link href="/data3">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Data_3</h3>
            </div>
          </Link>
        </section>
        <h2 className="text-3xl font-medium mb-6 text-green-600 text-center">Models:</h2>
        <p className="text-gray-700 mb-6 text-center">
          We offer various models for different types of agriculture:
        </p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-6">
          <Link href="/model1">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Model_1</h3>
            </div>
          </Link>
          <Link href="/model2">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Model_2</h3>
            </div>
          </Link>
          <Link href="/model3">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-green-600">Model_3</h3>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
