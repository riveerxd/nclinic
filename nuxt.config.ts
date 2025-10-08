// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // SEO and Performance Optimizations
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'NClinic Praha 4 | Moderní Zubní Klinika Kamýk | MUDr. Jamal Karra | Čelistní Chirurgie',
      meta: [
        {
          name: 'description',
          content: 'NClinic - Zubní klinika Praha 4 Kamýk se specialistou MUDr. Jamal Karra DDS, MS, CSc. pro čelistní a obličejovou chirurgii. Moderní stomatologie, dentální hygiena, implantologie. Zárubova 498/31. ☎ +420 703 622 644. Ordinujeme Po-Pá 8:00-16:00.'
        },
        {
          name: 'keywords',
          content: 'NClinic, zubní klinika Praha 4, MUDr. Jamal Karra, čelistní chirurgie Praha, obličejová chirurgie, stomatologie Kamýk, dentální hygiena, zubní implantáty, ústní chirurgie, zubní lékař Praha 4, Zárubova, estetická stomatologie, parodontologie, endodoncie, protetika, záchovná stomatologie, dentista Kamýk'
        },
        {
          name: 'author',
          content: 'N Clinic s.r.o.'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'bingbot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        // Open Graph for Social Media
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'NClinic' },
        { property: 'og:title', content: 'NClinic Praha 4 | MUDr. Jamal Karra | Čelistní Chirurgie' },
        { property: 'og:description', content: 'Moderní zubní klinika v Praze 4 se specialistou na čelistní a obličejovou chirurgii. Dentální hygiena, implantologie, stomatologie. Zárubova 498/31, Kamýk.' },
        { property: 'og:url', content: 'https://www.nclinic.cz/' },
        { property: 'og:image', content: 'https://www.nclinic.cz/images/heroimageop.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'NClinic - Moderní zubní klinika Praha 4' },
        { property: 'og:locale', content: 'cs_CZ' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'NClinic Praha 4 | MUDr. Jamal Karra | Čelistní Chirurgie' },
        { name: 'twitter:description', content: 'Moderní zubní klinika se specialistou na čelistní chirurgii. Dentální hygiena, implantologie. ☎ +420 703 622 644' },
        { name: 'twitter:image', content: 'https://www.nclinic.cz/images/heroimageop.webp' },
        { name: 'twitter:image:alt', content: 'NClinic - Moderní zubní klinika Praha 4' },
        // Local Business SEO
        { name: 'geo.region', content: 'CZ-PR' },
        { name: 'geo.placename', content: 'Praha 4, Kamýk' },
        { name: 'geo.position', content: '50.0195;14.4395' },
        { name: 'ICBM', content: '50.0195, 14.4395' },
        // Contact Information
        { name: 'contact', content: 'sestra@nclinic.cz' },
        { name: 'telephone', content: '+420703622644' },
        // Business Information
        { name: 'business:contact_data:street_address', content: 'Zárubova 498/31' },
        { name: 'business:contact_data:locality', content: 'Praha 4, Kamýk' },
        { name: 'business:contact_data:postal_code', content: '142 00' },
        { name: 'business:contact_data:country_name', content: 'Česká republika' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.nclinic.cz/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext' },
        { rel: 'preconnect', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ],
      script: [
        // Organization/Dentist Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Dentist', 'MedicalOrganization', 'LocalBusiness'],
            '@id': 'https://www.nclinic.cz/#organization',
            name: 'NClinic',
            alternateName: 'N Clinic s.r.o.',
            legalName: 'N Clinic s.r.o.',
            url: 'https://www.nclinic.cz',
            logo: 'https://www.nclinic.cz/logo.png',
            image: 'https://www.nclinic.cz/images/heroimageop.webp',
            description: 'Moderní zubní klinika v Praze 4 Kamýk specializující se na čelistní a obličejovou chirurgii, dentální hygienu a komplexní stomatologickou péči.',
            slogan: 'Moderní péče o váš úsměv, špičkové technologie a lidský přístup',
            telephone: '+420703622644',
            email: 'sestra@nclinic.cz',
            priceRange: '$$',
            currenciesAccepted: 'CZK',
            paymentAccepted: 'Cash, Credit Card',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Zárubova 498/31',
              addressLocality: 'Praha 4',
              addressRegion: 'Praha',
              postalCode: '142 00',
              addressCountry: 'CZ'
            },
            areaServed: {
              '@type': 'City',
              name: 'Praha'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.0195,
              longitude: 14.4395
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '12:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '12:30',
                closes: '16:00'
              }
            ],
            medicalSpecialty: ['Dentistry', 'OralSurgery', 'MaxillofacialSurgery'],
            employee: {
              '@type': 'Physician',
              '@id': 'https://www.nclinic.cz/#doctor-karra',
              name: 'MUDr. Jamal Karra DDS, MS, CSc.',
              jobTitle: 'Zubní lékař - specialista',
              medicalSpecialty: ['OralSurgery', 'MaxillofacialSurgery'],
              description: 'Specialista v oboru ústní, čelistní a obličejové chirurgie'
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Stomatologické služby',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Dentální hygiena',
                    description: 'Profesionální dentální hygiena a prevence'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Záchovná stomatologie',
                    description: 'Fotokompozitní výplně a ošetření zubů'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Endodoncie',
                    description: 'Endodontické ošetření kořenových kanálků'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Protetika',
                    description: 'Korunky, můstky a protetické práce'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Chirurgie',
                    description: 'Ústní, čelistní a obličejová chirurgie'
                  }
                }
              ]
            },
            hasMap: 'https://maps.google.com/?q=Zárubova+498/31,+Praha+4',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
              worstRating: '1',
              reviewCount: '1'
            },
            sameAs: []
          })
        },
        // Doctor Person Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Physician',
            '@id': 'https://www.nclinic.cz/#doctor-karra',
            name: 'MUDr. Jamal Karra DDS, MS, CSc.',
            honorificPrefix: 'MUDr.',
            honorificSuffix: 'DDS, MS, CSc.',
            jobTitle: 'Zubní lékař - specialista',
            medicalSpecialty: ['OralSurgery', 'MaxillofacialSurgery'],
            worksFor: {
              '@id': 'https://www.nclinic.cz/#organization'
            },
            description: 'Specialista v oboru ústní, čelistní a obličejové chirurgie s dlouholetou praxí'
          })
        },
        // WebSite Schema with Search Action
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://www.nclinic.cz/#website',
            url: 'https://www.nclinic.cz',
            name: 'NClinic',
            description: 'Moderní zubní klinika Praha 4',
            publisher: {
              '@id': 'https://www.nclinic.cz/#organization'
            },
            inLanguage: 'cs-CZ'
          })
        },
        // BreadcrumbList Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Domů',
                item: 'https://www.nclinic.cz/'
              }
            ]
          })
        },
        // FAQ Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Kde se nachází NClinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'NClinic se nachází na adrese Zárubova 498/31, Praha 4 - Kamýk, 142 00. Jsme snadno dostupní MHD i autem.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaká je ordinační doba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ordinujeme Po-Pá od 8:00 do 12:00 a od 12:30 do 16:00. Objednání na tel.: +420 703 622 644 nebo email: sestra@nclinic.cz'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaké služby poskytujete?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Poskytujeme komplexní stomatologickou péči včetně dentální hygieny, záchovné stomatologie, endodoncie, protetiky a ústní, čelistní a obličejové chirurgie.'
                }
              },
              {
                '@type': 'Question',
                name: 'Kdo je váš zubní lékař?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Naším specialistou je MUDr. Jamal Karra DDS, MS, CSc., odborník v oblasti ústní, čelistní a obličejové chirurgie s dlouholetou praxí.'
                }
              }
            ]
          })
        }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // CSS optimization
  css: [],

  // Build optimizations
  build: {
    transpile: [],
    analyze: false
  },

  // Router optimization
  router: {
    prefetchLinks: true
  },

  // Image optimization
  image: {
    formats: ['webp', 'avif', 'jpg'],
    quality: 80
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.nclinic.cz',
      siteName: 'NClinic',
      siteDescription: 'Moderní zubní klinika v Praze 4 s profesionální stomatologickou péčí a nejnovějšími technologiemi'
    }
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  // Additional SEO and performance features
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
};
