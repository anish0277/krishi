import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const model_2_info = {
    title: 'Model 2',
    info_sections: [
      {
        title: 'Section 1',
        description: 'Information about Model 2',
      },
      {
        title: 'Section 2',
        description: 'More information about Model 2',
      },
    ],
  };

  return {
    props: {
      model_2_info,
    },
  };
}

export default function Model2({ model_2_info }) {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">{model_2_info.title} Details</h1>
        <section className="w-full flex flex-col md:flex-row md:gap-4">
          <div className="w-full md:w-1/2 bg-main-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <Image
              src="/info_image.jpg" // Replace with the path to your image
              alt="Model 2 Information"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Link href="/login">
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
            {model_2_info.info_sections.map((infoSection, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {infoSection.title}
                </h3>
                <p className="text-gray-700">{infoSection.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
