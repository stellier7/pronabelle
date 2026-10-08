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
      img: "images/02-wash-station.jpg",
    },
    {
      time: "02",
      title: "Elegir",
      text: "Juntas armamos el plan: balayage, mechas o maquillaje, siempre con fórmulas libres de químicos innecesarios.",
      img: "images/07-highlights-foils.jpg",
    },
    {
      time: "03",
      title: "Crear",
      text: "Trabajo a mano, sin prisa: cada sección de color y cada trazo de maquillaje se hacen con calma y detalle.",
      img: "images/03-makeup.jpg",
    },
    {
      time: "04",
      title: "Brillar",
      text: "Cerramos con el espejo, tips de cuidado en casa y tu próxima cita por WhatsApp cuando quieras volver.",
      img: "images/06b-glam-result.jpg",
    },
  ],

  // ---- Galería ----
  gallery: [
    "images/06-glam-waves.jpg",
    "images/05-copper-brand.jpg",
    "images/08-balayage-before-after.jpg",
    "images/09-balayage-waves.jpg",
    "images/04-bridal.jpg",
    "images/03-makeup.jpg",
    "images/07-highlights-foils.jpg",
    "images/02-wash-station.jpg",
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
  heroImage: "images/02-wash-station.jpg",
  visitImage: "images/01-stylist-revlon.jpg",

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
