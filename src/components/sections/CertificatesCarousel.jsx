import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * CertificatesCarousel Component
 * 
 * A hybrid carousel that displays certificates in two categories:
 * - Landscape certificates (3 images)
 * - Portrait certificates (9 images from 3 institutions: 1, 3, 5)
 * 
 * Features:
 * - Auto-play with pause on hover/touch
 * - Responsive design (Desktop: multi-slide, Mobile: single-slide)
 * - Smooth slide animations
 * - Lightbox modal for zoom
 * - Dot indicators for navigation
 */

// Placeholder data - replace with actual certificate images later
const LANDSCAPE_CERTIFICATES = [
  { id: 'land-1', src: '/images/cert-landscape-1.jpg', alt: 'Certificate 1' },
  { id: 'land-2', src: '/images/cert-landscape-2.jpg', alt: 'Certificate 2' },
  { id: 'land-3', src: '/images/cert-landscape-3.jpg', alt: 'Certificate 3' },
];

const PORTRAIT_CERTIFICATES = [
  // Institution 1 (1 image)
  { id: 'port-1', src: '/images/cert-portrait-1.jpg', alt: 'Certificate 1' },
  // Institution 2 (3 images)
  { id: 'port-2', src: '/images/cert-portrait-2.jpg', alt: 'Certificate 2' },
  { id: 'port-3', src: '/images/cert-portrait-3.jpg', alt: 'Certificate 3' },
  { id: 'port-4', src: '/images/cert-portrait-4.jpg', alt: 'Certificate 4' },
  // Institution 3 (5 images)
  { id: 'port-5', src: '/images/cert-portrait-5.jpg', alt: 'Certificate 5' },
  { id: 'port-6', src: '/images/cert-portrait-6.jpg', alt: 'Certificate 6' },
  { id: 'port-7', src: '/images/cert-portrait-7.jpg', alt: 'Certificate 7' },
  { id: 'port-8', src: '/images/cert-portrait-8.jpg', alt: 'Certificate 8' },
  { id: 'port-9', src: '/images/cert-portrait-9.jpg', alt: 'Certificate 9' },
];

// Auto-play interval in milliseconds
const AUTOPLAY_INTERVAL = 4000;

function CertificatesCarousel() {
  const { t } = useTranslation();
  const [landscapeIndex, setLandscapeIndex] = useState(0);
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [itemsPerSlide, setItemsPerSlide] = useState({ landscape: 3, portrait: 5 });

  // Calculate items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 1 item per slide
        setItemsPerSlide({ landscape: 1, portrait: 1 });
      } else if (width < 1024) {
        // Tablet: 2-3 items per slide
        setItemsPerSlide({ landscape: 3, portrait: 3 });
      } else {
        // Desktop: 3-5 items per slide
        setItemsPerSlide({ landscape: 3, portrait: 5 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total slides
  const landscapeSlides = Math.ceil(LANDSCAPE_CERTIFICATES.length / itemsPerSlide.landscape);
  const portraitSlides = Math.ceil(PORTRAIT_CERTIFICATES.length / itemsPerSlide.portrait);

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;

    const landscapeTimer = setInterval(() => {
      setLandscapeIndex((prev) => (prev + 1) % landscapeSlides);
    }, AUTOPLAY_INTERVAL);

    const portraitTimer = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % portraitSlides);
    }, AUTOPLAY_INTERVAL + 500); // Slight offset for visual interest

    return () => {
      clearInterval(landscapeTimer);
      clearInterval(portraitTimer);
    };
  }, [isPaused, landscapeSlides, portraitSlides]);

  // Navigation handlers
  const goToLandscapeSlide = useCallback((index) => {
    setLandscapeIndex(index);
  }, []);

  const goToPortraitSlide = useCallback((index) => {
    setPortraitIndex(index);
  }, []);

  const prevLandscape = useCallback(() => {
    setLandscapeIndex((prev) => (prev - 1 + landscapeSlides) % landscapeSlides);
  }, [landscapeSlides]);

  const nextLandscape = useCallback(() => {
    setLandscapeIndex((prev) => (prev + 1) % landscapeSlides);
  }, [landscapeSlides]);

  const prevPortrait = useCallback(() => {
    setPortraitIndex((prev) => (prev - 1 + portraitSlides) % portraitSlides);
  }, [portraitSlides]);

  const nextPortrait = useCallback(() => {
    setPortraitIndex((prev) => (prev + 1) % portraitSlides);
  }, [portraitSlides]);

  // Get current visible items
  const getVisibleItems = (items, index, perSlide) => {
    const start = index * perSlide;
    return items.slice(start, start + perSlide);
  };

  // Lightbox handlers
  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsPaused(true);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsPaused(false);
  };

  // Carousel Section component
  const CarouselSection = ({
    title,
    items,
    currentIndex,
    totalSlides,
    onPrev,
    onNext,
    onDotClick,
    perSlide,
    isPortrait = false
  }) => {
    const visibleItems = getVisibleItems(items, currentIndex, perSlide);

    return (
      <div
        className="mb-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      >
        {/* Section Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-primary-accent mb-6 text-center">
          {title}
        </h3>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 
                           w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/80 hover:bg-primary 
                           text-white shadow-lg transition-all duration-300 hover:scale-110
                           flex items-center justify-center backdrop-blur-sm"
                aria-label="Previous"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 
                           w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/80 hover:bg-primary 
                           text-white shadow-lg transition-all duration-300 hover:scale-110
                           flex items-center justify-center backdrop-blur-sm"
                aria-label="Next"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slides Container */}
          <div className="overflow-hidden mx-6 sm:mx-14">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Generate all slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-shrink-0 w-full flex justify-center gap-3 sm:gap-4 md:gap-6 px-2"
                >
                  {getVisibleItems(items, slideIndex, perSlide).map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => openLightbox(cert)}
                      className={`
                        group cursor-pointer transition-all duration-300 hover:scale-105
                        ${isPortrait ? 'w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px]' : 'w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]'}
                      `}
                    >
                      {/* Certificate Image Placeholder */}
                      <div
                        className={`
                          relative overflow-hidden rounded-lg shadow-lg 
                          border-4 border-primary-accent/30 group-hover:border-primary-accent
                          bg-gradient-to-br from-background-light to-gray-200 
                          dark:from-background-dark dark:to-primary/30
                          transition-all duration-300
                          ${isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                        `}
                      >
                        {/* Placeholder content - will be replaced with actual images */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4">
                          <svg
                            className="w-8 h-8 sm:w-12 sm:h-12 text-primary-accent/50 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm text-primary/60 dark:text-primary-accent/60 text-center">
                            {cert.alt}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                            {t('about.certificates.clickToZoom')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotClick(index)}
                  className={`
                    w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                    ${index === currentIndex
                      ? 'bg-primary-accent scale-125'
                      : 'bg-primary/30 hover:bg-primary/50'
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="mt-16 sm:mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-accent mb-4">
          {t('about.certificates.title')}
        </h2>
        <p className="text-base sm:text-lg text-primary/70 dark:text-text-dark/70 max-w-2xl mx-auto">
          {t('about.certificates.subtitle')}
        </p>
      </div>

      {/* Landscape Certificates Carousel */}
      <CarouselSection
        title={t('about.certificates.landscapeTitle')}
        items={LANDSCAPE_CERTIFICATES}
        currentIndex={landscapeIndex}
        totalSlides={landscapeSlides}
        onPrev={prevLandscape}
        onNext={nextLandscape}
        onDotClick={goToLandscapeSlide}
        perSlide={itemsPerSlide.landscape}
        isPortrait={false}
      />

      {/* Portrait Certificates Carousel */}
      <CarouselSection
        title={t('about.certificates.portraitTitle')}
        items={PORTRAIT_CERTIFICATES}
        currentIndex={portraitIndex}
        totalSlides={portraitSlides}
        onPrev={prevPortrait}
        onNext={nextPortrait}
        onDotClick={goToPortraitSlide}
        perSlide={itemsPerSlide.portrait}
        isPortrait={true}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 
                       text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder for lightbox - will be replaced with actual image */}
            <div className="bg-gradient-to-br from-background-light to-gray-200 dark:from-background-dark dark:to-primary/30 
                            rounded-xl shadow-2xl border-4 border-primary-accent aspect-[3/4] max-h-[80vh] w-auto mx-auto
                            flex flex-col items-center justify-center p-8">
              <svg
                className="w-24 h-24 text-primary-accent/50 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-xl text-primary/60 dark:text-primary-accent/60 text-center">
                {lightboxImage.alt}
              </span>
              <span className="text-sm text-primary/40 dark:text-primary-accent/40 mt-2">
                {t('about.certificates.placeholderNote')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificatesCarousel;
