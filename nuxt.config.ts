// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      title: 'NClinic | Zubní klinika Praha 4 - Moderní stomatologie | Zárubova',
      meta: [
        {
          name: 'description',
          content: 'NClinic - Moderní zubní klinika v Praze 4, Zárubova 498/31. Profesionální stomatologická péče s nejnovějšími technologiemi. Dentální hygiena, estetická stomatologie, implantologie. Tel: +420 703 622 644. Ordinační doba: Po-Pá 8:00-16:00.'
        },
        {
          name: 'keywords',
          content: 'NClinic, zubní klinika Praha, zubní lékař Praha 4, stomatologie Praha, dentální hygiena, estetická stomatologie, bělení zubů, zubní implantáty, Zárubova Praha, Kamýk, zubní ordinace, dentista Praha, zubní vyšetření, parodontologie, endodoncie, protetika'
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
        { property: 'og:title', content: 'NClinic | Moderní Zubní Klinika Praha 4' },
        { property: 'og:description', content: 'Profesionální stomatologická péče s nejnovějšími technologiemi. Dentální hygiena, estetická stomatologie, implantologie. Zárubova 498/31, Praha 4.' },
        { property: 'og:url', content: 'https://www.nclinic.cz/' },
        { property: 'og:locale', content: 'cs_CZ' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'NClinic | Moderní Zubní Klinika Praha 4' },
        { name: 'twitter:description', content: 'Profesionální stomatologická péče. Dentální hygiena, implantologie. Tel: +420 703 622 644' },
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
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            '@id': 'https://www.nclinic.cz/#organization',
            name: 'NClinic',
            alternateName: 'N Clinic s.r.o.',
            url: 'https://www.nclinic.cz',
            logo: 'https://www.nclinic.cz/logo.png',
            description: 'Moderní zubní klinika v Praze 4 s nejnovějšími technologiemi a profesionální stomatologickou péčí. Dentální hygiena, estetická stomatologie, implantologie.',
            telephone: '+420703622644',
            email: 'sestra@nclinic.cz',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Zárubova 498/31',
              addressLocality: 'Praha 4, Kamýk',
              postalCode: '142 00',
              addressCountry: 'CZ'
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
            medicalSpecialty: 'Dentistry',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Stomatologické služby',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dentální hygiena'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Estetická stomatologie'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Zubní implantáty'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Endodoncie'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Protetika'
                  }
                }
              ]
            },
            hasMap: 'https://maps.google.com/?q=Zárubova+498/31,+Praha+4',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '1'
            }
          })
        }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // CSS optimization
  css: [],

  // Build optimizations
  build: {
    transpile: []
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
    renderJsonPayloads: true
  }
})
