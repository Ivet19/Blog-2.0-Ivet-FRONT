import { huevosRotosBruc159PostDto } from "./dto/fixturesDto";
import { mapPostDtoToPost } from "./dto/mappers";
import { Post, PostData } from "./types";

export const choutaKaladinPost: Post = {
  id: "123456789123456789123456",
  author: "Cocinero de Sadeas (de incógnito)",
  content:
    "En las llanuras quebradas de Roshar, entre tormentas eternas y guerras interminables, los portadores de puentes encuentran consuelo en algo simple pero profundamente satisfactorio: el chouta. Este plato, parecido a un kebab moderno, es una mezcla de carne marinada en especias picantes, asada hasta quedar crujiente por fuera y jugosa por dentro. Se sirve envuelta en un pan plano y es acompañada por una salsa rojiza, de sabor intenso y ligeramente picante, que deja una impresión duradera en el paladar. Aunque en Alethkar puede encontrarse en puestos callejeros, el chouta ha trascendido su origen humilde. Hoy te traigo una receta adaptada para que lo prepares en casa sin necesitar esquirlas de tormenta ni la bendición de un alto príncipe. Ideal para una noche temática de Stormlight, una reunión con amigos fanáticos de Sanderson o simplemente cuando necesitas una dosis de sabor con un toque épico. Recuerda: si puedes comerlo sin ensuciarte las manos, no es un verdadero chouta. Prepárate para saborear el alimento de los héroes silenciosos. Después de todo, incluso Kaladin necesita algo más que honor para seguir adelante: necesita energía… y chouta.",
  previewContent:
    "En las llanuras quebradas de Roshar, entre tormentas eternas y guerras interminables, los portadores de puentes encuentran consuelo en algo simple pero profundamente satisfactorio: el chouta. Este plato, parecido a un kebab moderno, es una mezcla de carne marinada en especias picantes, asada hasta quedar crujiente por fuera y jugosa por dentro. Se sirve envuelta en un pan plano y es acompañada por una salsa rojiza, de sabor intenso y ligeramente picante, que deja una impresión duradera en el paladar. Aunque en Alethkar puede encontrarse en puestos callejeros, el chouta ha trascendido su origen humilde. Hoy te traigo una receta",
  imageAlt: "Chouta envuelto en pan plano con salsa picante",
  imageUrl: "https://example.com/chouta-roshar.jpg",
  smallImageUrl: "",
  publishDate: new Date("2025-04-23"),
  tags: ["stormlight", "chouta", "rosharfood"],
  previewTags: ["stormlight", "chouta", "rosharfood"],
  title: "Chouta callejero de Alethkar 🌯⚔️",
};

export const panLuzEstelarPost: Post = {
  id: "123456789123456789123457",
  author: "Panadero Kharbranthiano",
  content:
    "El Pan de Luz Estelar es más que una receta: es una evocación del mar Esquirlado, del amanecer que se filtra por las ventanas de mármol de la Gran Biblioteca de Kharbranth. Este pan tiene una textura suave, casi etérea, y una corteza dorada salpicada de cristales de sal relucientes que brillan como esferas de broam en la luz. El toque dulce de miel roshariana y un sutil aroma a lavanda completan este manjar digno de un ardent o un erudito. Ideal para acompañar un té caliente mientras estudias los tratados de Jasnah Kholin o simplemente te relajas contemplando una tormenta desde tu ventana. En esta receta, usamos ingredientes disponibles en nuestro mundo para emular esa sensación mística: harina de trigo de fuerza, sal marina gruesa, miel floral y levadura natural. Es un pan que no solo alimenta el cuerpo, sino que acaricia el alma. Sirve en rodajas gruesas, untado con mantequilla o incluso acompañado de queso suave, y recuerda: en Roshar, incluso el pan puede ser una obra de arte. Prepáralo cuando necesites un poco de luz en medio de tu propia tormenta interna.",
  previewContent:
    "El Pan de Luz Estelar es más que una receta: es una evocación del mar Esquirlado, del amanecer que se filtra por las ventanas de mármol de la Gran Biblioteca de Kharbranth. Este pan tiene una textura suave, casi etérea, y una corteza dorada salpicada de cristales de sal relucientes que brillan como esferas de broam en la luz. El toque dulce de miel roshariana y un sutil aroma a lavanda completan este manjar digno de un ardent o un erudito. Ideal para acompañar un té caliente mientras estudias los tratados de Jasnah Kholin o simplemente te relajas contemplando una",
  imageAlt: "Pan brillante con cristales de sal y corteza dorada",
  imageUrl: "https://example.com/pan-luz-estelar.jpg",
  smallImageUrl: "",
  publishDate: new Date("2025-04-23"),
  tags: ["stormlightarchive", "pan", "kharbranth"],
  previewTags: ["stormlightarchive", "pan", "kharbranth"],
  title: "Pan de luz estelar de Kharbranth ✨🍞",
};

export const archivoDeLasTormentasComidaPosts = [
  choutaKaladinPost,
  panLuzEstelarPost,
];

export const huevosRotosBruc159PostData: PostData = {
  title: "Huevos Rotos de Bruc, 159",
  content: `Los huevos rotos son una joya sencilla pero poderosa de la gastronomía española. En Bruc, 159, llevan este plato clásico a otro nivel. El plato se presenta con una cama de patatas fritas doradas, crujientes por fuera y tiernas por dentro, coronadas con huevos fritos de yema vibrante. Al romper los huevos sobre las patatas, se crea una mezcla cremosa y sabrosa que es pura felicidad. Puedes acompañarlos con jamón ibérico, chistorra o incluso trufa, según el antojo. El ambiente del lugar es acogedor, con una atención cercana que hace que cada visita sea especial. Ideal tanto para un almuerzo informal como para una cena relajada. Un plato imprescindible si quieres saborear lo mejor de la cocina tradicional española con un toque casero y auténtico.`,
  imageUrl: "http://huevosrotos.webp",
  author: "Mario Vaquerizo",
};

export const huevosRotos = mapPostDtoToPost(huevosRotosBruc159PostDto);
