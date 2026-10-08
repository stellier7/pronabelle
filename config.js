// ============================================================
// PRONABELLE ECO SALON — Comayagua, Honduras
// Edita este archivo para ajustar textos, colores e imágenes.
// ============================================================

const CONFIG = {
  lang: "es",

  // ---- Marca ----
  brandName: "Pronabelle",
  brandNameShort: "Pronabelle",
  tagline: "Sala de Belleza",
  heroEyebrow: "Eco Salon · Comayagua",
  heroHeadlineLines: ["Belleza", "sin químicos"],
  heroSub:
    "Todos nuestros productos son hechos en base a fórmulas especiales libres de químicos innecesarios.",

  // ---- Contacto / Reservas ----
  whatsappNumber: "50433480658", // código de país + número, sin + ni espacios
  whatsappDefaultMessage: "¡Hola! Me gustaría reservar una cita en Pronabelle Eco Salon.",
  phoneDisplay: "+504 3348-0658",
  phoneAlt: "2272-1661",
  email: "pronabelle@hotmail.com",
  address: "Colonia Casa Blanca — Comayagua, Honduras",
  hours: [
    { day: "Lun — Sáb", time: "8:00 AM – 8:00 PM" },
    { day: "Domingo", time: "Cerrado" },
  ],
  instagramHandle: "Pronabelle Eco Salon",
  instagramUrl: "https://www.facebook.com/231204046923838",

  // ---- Colores (negro + rosa de la marca) ----
  colors: {
    cream: "#000000",
    cream2: "#0A0A0A",
    ink: "#FFFFFF",
    inkSoft: "#C9C0C6",
    inkFaint: "#8A7A84",
    accent: "#FF5CAD",
    accentInv: "#0A0006",
    accentHover: "rgba(255,92,173,0.16)",
    gray: "#1A1218",
    grayLight: "#140F13",
    line: "rgba(255,92,173,0.28)",
    lineStrong: "rgba(255,92,173,0.48)",
  },

  // ---- Servicios ----
  services: [
    {
      label: "Color",
      name: "Balayage",
      description:
        "Iluminación pintada a mano, con fórmulas suaves que respetan tu cabello y se ven naturales bajo cualquier luz.",
      items: [
        "Balayage clásico",
        "Balayage con brillos",
        "Retoque de raíces + balayage",
        "Tratamiento sellador post-color",
      ],
    },
    {
      label: "Color",
      name: "Mechas",
      description:
        "Mechas precisas para abrir el rostro, subir el contraste o refrescar un color que ya amas — sin agresiones innecesarias.",
      items: [
        "Mechas tradicionales",
        "Mechas babylights",
        "Mechas creativas / fashion",
        "Corrección y unificación de tono",
      ],
    },
    {
      label: "Maquillaje",
      name: "Maquillaje",
      description:
        "Looks para el día a día, eventos y ocasiones especiales, con productos que cuidan tu piel tanto como tu foto final.",
      items: [
        "Maquillaje social",
        "Maquillaje para eventos",
        "Maquillaje de novia / quinceaños",
        "Prueba de maquillaje",
      ],
    },
  ],

  // ---- Franja ritual (sección de scroll signature) ----
  ritualSteps: [
    {
      time: "01",
      title: "Llegar",
      text: "Te recibimos en Casa Blanca, escuchamos lo que quieres lucir y revisamos el estado de tu cabello o piel antes de empezar.",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "02",
      title: "Elegir",
      text: "Juntas armamos el plan: balayage, mechas o maquillaje, siempre con fórmulas libres de químicos innecesarios.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "03",
      title: "Crear",
      text: "Trabajo a mano, sin prisa: cada sección de color y cada trazo de maquillaje se hacen con calma y detalle.",
      img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "04",
      title: "Brillar",
      text: "Cerramos con el espejo, tips de cuidado en casa y tu próxima cita por WhatsApp cuando quieras volver.",
      img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  // ---- Galería ----
  gallery: [
    "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop",
  ],

  // ---- Testimonios (Google Reviews) ----
  testimonials: [
    {
      quote: "Excelente servicio! The best beauty salon — sigue siendo lo mejor.",
      name: "Estela A.",
    },
    {
      quote:
        "La atención es súper buena y el maquillaje es un éxito. Súper empáticas con mi hija de 2 años.",
      name: "Dabeyba P.",
    },
    {
      quote:
        "Un lugar ideal para lucir en cualquier evento. Manos profesionales y productos naturales de buena calidad.",
      name: "Mimirachel E.",
    },
  ],

  // ---- Imágenes de ambiente ----
  // Placeholder de calidad hasta tener fotos del salón; el banner de marca está en images/
  heroImage:
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1800&auto=format&fit=crop",
  visitImage:
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1400&auto=format&fit=crop",

  // ---- Textos de interfaz ----
  ui: {
    metaDescription:
      "Pronabelle Eco Salon — Sala de belleza en Comayagua. Balayage, mechas y maquillaje con productos libres de químicos innecesarios.",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navGallery: "Galería",
    navVisit: "Visítanos",
    navBook: "Reservar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroCta: "Reservar por WhatsApp",
    heroSecondary: "Ver servicios",
    heroScroll: "Desliza",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Tres especialidades, un mismo cuidado.",
    ritualEyebrow: "La Experiencia",
    ritualTitle: "Cada visita, el mismo ritual eco.",
    galleryEyebrow: "Dentro del Salón",
    galleryTitle: "Color, luz y piel — hechos con calma.",
    galleryImageAlt: "Imagen de galería",
    testimonialsEyebrow: "De Boca en Boca",
    testimonialsTitle: "Lo que escriben nuestras clientas.",
    visitEyebrow: "Encuéntranos",
    visitTitle: "Visita Pronabelle.",
    visitImageAlt: "Interior del salón",
    footerEyebrow: "Cuando Quieras",
    footerTitle: "Reserva tu cita.",
    footerCta: "Escríbenos por WhatsApp",
    whatsappLabel: "WhatsApp",
    metaSpecialty: "Especialidad",
    metaHours: "Horario",
    metaContact: "Contacto directo",
    gallerySoon: "Foto próximamente",
    lightboxLabel: "Vista previa de galería",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    phoneAltLabel: "Línea fija",
    emailLabel: "Correo",
  },
};
