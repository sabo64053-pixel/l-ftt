import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('legal.privacy.title')}
              </h1>
              <p className="text-gray-600">
                {t('legal.privacy.lastUpdated')}: {t('legal.privacy.date')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section1.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section1.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section2.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section2.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t('legal.privacy.section2.item1')}</li>
                  <li>{t('legal.privacy.section2.item2')}</li>
                  <li>{t('legal.privacy.section2.item3')}</li>
                  <li>{t('legal.privacy.section2.item4')}</li>
                  <li>{t('legal.privacy.section2.item5')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section3.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section3.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t('legal.privacy.section3.item1')}</li>
                  <li>{t('legal.privacy.section3.item2')}</li>
                  <li>{t('legal.privacy.section3.item3')}</li>
                  <li>{t('legal.privacy.section3.item4')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section4.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section4.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section5.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section5.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section6.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section6.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section7.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section7.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('legal.privacy.section8.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.privacy.section8.content')}
                </p>
              </section>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-600 text-sm">
                  {t('legal.privacy.contact')}{' '}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                    {t('legal.privacy.contactLink')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
