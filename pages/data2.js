import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const data_2_info = {
    title: 'Japanese Maple',
    description: 'Some information about the Japanese Maple data element',
    image: '/japanese-maple.jpg',
  };

  return {
    props: {
      data_2_info,
    },
  };
}

export default function Data2({ data_2_info }) {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row md:gap-4">
        <section className="w-full md:w-1/2 bg-main-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <Image
            src={data_2_info.image}
            alt={data_2_info.title}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <Link href="/login">
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Buy Now
            </button>
          </Link>
        </section>
        <section className="w-full md:w-1/2 flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">{data_2_info.title}</h2>
            <p className="text-gray-700">{data_2_info.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
