/**
 * Journal KLYNN — sistema editorial simple, tipado y escalable.
 *
 * Contenido-como-dato: cada artículo es un objeto con bloques estructurados.
 * No requiere dependencias nuevas (MDX podría sustituir esta capa más adelante
 * sin cambiar las rutas). El tiempo de lectura se calcula del contenido real.
 *
 * Autor institucional: "KLYNN" (no hay autor personal confirmado).
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  /** Fecha editorial de publicación (ISO). */
  date: string
  author: string
  blocks: Block[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'el-mundo-no-necesita-mas-opciones',
    title: 'El mundo no necesita más opciones',
    excerpt:
      'Hay más productos que nunca para resolver las mismas necesidades de siempre. El problema ya no es la falta de opciones: es la falta de una forma confiable de elegir.',
    category: 'Vida cotidiana',
    date: '2026-07-20',
    author: 'KLYNN',
    blocks: [
      { type: 'p', text: 'Comprar algo tan simple como una fibra para lavar los platos se convirtió en una tarea. Hay decenas de marcas, cientos de variantes y una avalancha de opiniones contradictorias. La abundancia, que debería facilitarnos la vida, terminó por complicarla.' },
      { type: 'p', text: 'El fenómeno tiene nombre: sobrecarga de elección. Cuando las opciones se multiplican más allá de cierto punto, elegir deja de sentirse como libertad y empieza a sentirse como trabajo. Comparamos, dudamos, posponemos. Y muchas veces terminamos comprando por cansancio, no por convicción.' },
      { type: 'h2', text: 'La calidad dejó de ser evidente' },
      { type: 'p', text: 'A esa abundancia se suma otro problema: la calidad ya no se ve a simple vista. Dos productos casi idénticos en la foto pueden comportarse de forma radicalmente distinta en la mano. El empaque promete, el marketing insiste, y la única forma real de saber es usarlo. Es decir: equivocarse primero.' },
      { type: 'p', text: 'El resultado es una desconfianza de fondo. Ya no sabemos si un precio alto significa mejor calidad, o solo mejor margen. Ni si un precio bajo es una oportunidad o una advertencia. Cada compra pequeña arrastra una duda pequeña, y esas dudas se acumulan.' },
      { type: 'h2', text: 'Menos fricción, no más productos' },
      { type: 'p', text: 'KLYNN parte de una idea incómoda para una empresa de productos: el mundo no necesita más productos. Necesita menos fricción para llegar al correcto. Nuestro trabajo no es agregar una opción más a un estante ya saturado, sino hacer el trabajo difícil por adelantado —investigar, comparar, probar— para que quede una sola elección confiable.' },
      { type: 'quote', text: 'El lujo cotidiano ya no es tener más para elegir. Es no tener que elegir mal.' },
      { type: 'p', text: 'Cuando algo lleva el nombre KLYNN, esa es la promesa: el trabajo difícil ya está hecho. No para vender más, sino para devolverle a la gente algo que la abundancia le quitó sin avisar —la tranquilidad de decidir bien sin convertirlo en un proyecto.' },
    ],
  },
  {
    slug: 'seleccionar-mejorar-o-crear',
    title: 'Seleccionar, mejorar o crear',
    excerpt:
      'KLYNN no es una curaduría, ni una marca blanca, ni un fabricante tradicional. Es las tres cosas cuando hace falta, y ninguna cuando no aporta. Lo que no cambia es el criterio.',
    category: 'Criterio',
    date: '2026-07-22',
    author: 'KLYNN',
    blocks: [
      { type: 'p', text: 'Es tentador encasillar a KLYNN en una categoría conocida. ¿Es un curador que elige lo mejor del mercado? ¿Una marca blanca que pone su nombre a productos de terceros? ¿Un fabricante que desarrolla desde cero? La respuesta honesta es que ninguna de esas etiquetas alcanza, porque describen un método fijo, y KLYNN no se define por su método sino por su estándar.' },
      { type: 'h2', text: 'Seleccionar' },
      { type: 'p', text: 'A veces la mejor solución ya existe. Alguien, en algún lugar, ya resolvió el problema mejor que nadie. En ese caso no tiene sentido reinventar: el trabajo es encontrarla, verificarla en uso real y respaldarla con nuestro nombre. Seleccionar bien es más difícil de lo que parece, porque exige comparar a fondo y resistir la tentación de lo más barato o lo más vistoso.' },
      { type: 'h2', text: 'Mejorar' },
      { type: 'p', text: 'Otras veces existe algo bueno, pero con una debilidad concreta: un material que podría ser más honesto, una unión que falla antes de tiempo, un detalle de uso mal resuelto. Cuando la oportunidad de mejora es real y demostrable —no cosmética— vale la pena intervenir. Mejorar no es cambiar por cambiar; es corregir lo que objetivamente puede ser mejor.' },
      { type: 'h2', text: 'Crear' },
      { type: 'p', text: 'Y a veces, sencillamente, nada cumple el estándar. Ninguna alternativa disponible resuelve el problema como debería. Solo entonces desarrollamos desde cero. Crear es el camino más costoso y el último recurso, no el primer impulso: se justifica cuando el mercado deja un hueco real.' },
      { type: 'quote', text: 'La categoría del producto cambia. El camino para llegar a él cambia. El criterio, nunca.' },
      { type: 'p', text: 'Por eso KLYNN puede entrar en la cocina, la casa o la tecnología sin contradecirse. No promete un método único; promete un mismo nivel de exigencia, aplicado con el camino que cada objeto merezca. Esa flexibilidad de método, anclada en un estándar rígido, es justamente lo que un curador, una marca blanca o un fabricante tradicional no pueden ofrecer por separado.' },
    ],
  },
  {
    slug: 'la-confianza-como-sistema',
    title: 'La confianza como sistema',
    excerpt:
      'Una marca que quiere existir en muchas categorías no puede sostenerse en el marketing. Se sostiene en que cada buena experiencia haga más creíble la siguiente.',
    category: 'Criterio',
    date: '2026-07-24',
    author: 'KLYNN',
    blocks: [
      { type: 'p', text: 'La ambición de KLYNN plantea una pregunta legítima: ¿cómo puede una misma marca ser confiable en la cocina, en la limpieza y, algún día, en la tecnología? A primera vista suena a dispersión. La respuesta está en entender la confianza no como un mensaje, sino como un sistema que se construye una decisión a la vez.' },
      { type: 'h2', text: 'La confianza no se declara, se acumula' },
      { type: 'p', text: 'Ninguna marca se vuelve confiable por decirlo. Se vuelve confiable cuando el objeto que compraste hace exactamente lo que esperabas, la primera vez y la número cien. Esa experiencia deja un residuo: la próxima vez que veas el mismo nombre, partes de un lugar distinto. Ya no evalúas desde cero; evalúas desde la memoria de haber acertado.' },
      { type: 'p', text: 'Ese es el mecanismo. Cada producto que cumple no solo satisface una necesidad: aumenta la probabilidad de que le des una oportunidad al siguiente, aunque sea de otra categoría. La confianza ganada en una fibra de limpieza puede, con el tiempo, abrir la puerta a un objeto de cocina. No por arte de marketing, sino porque el criterio detrás fue el mismo.' },
      { type: 'h2', text: 'Por qué el foco importa' },
      { type: 'p', text: 'De aquí se desprende una disciplina: no se puede empezar en todas partes al mismo tiempo. Si la confianza es acumulativa, hay que ganarla primero en un lugar y expandirse desde ahí. Por eso KLYNN empieza con foco —una categoría de entrada— y solo avanza cuando el estándar puede sostener la siguiente. Expandirse rápido y mal no construye una marca: la gasta.' },
      { type: 'quote', text: 'Cada producto debe aumentar la confianza en el siguiente. Ese es el verdadero activo, y no aparece en ningún estante.' },
      { type: 'p', text: 'Visto así, KLYNN no está construyendo un catálogo. Está construyendo un historial. Un catálogo se llena; un historial se gana. Y un historial de buenas decisiones es lo único que permite que una marca de objetos cotidianos crezca durante décadas sin traicionar la razón por la que la gente confió en ella la primera vez.' },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

/** Palabras del contenido → minutos de lectura (~200 ppm), mínimo 1. */
export function readingMinutes(article: Article): number {
  const words = article.blocks.reduce((n, b) => n + b.text.trim().split(/\s+/).length, 0)
  return Math.max(1, Math.round(words / 200))
}

/** Fecha ISO → texto legible en español (sin dependencias, sin Date.now). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  return `${d} de ${meses[m - 1]} de ${y}`
}

/** Otros artículos, para "relacionados". */
export function relatedArticles(slug: string, limit = 2): Article[] {
  return ARTICLES.filter(a => a.slug !== slug).slice(0, limit)
}
