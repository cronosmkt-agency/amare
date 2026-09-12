import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  ShoppingBag,
  Heart,
  Truck,
  Tag,
  Clock,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Star,
  Phone,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Check,
  Layers,
  Award,
  Navigation,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AmareHome,
});

interface LookItem {
  id: string;
  title: string;
  category: "alfaiataria" | "vestidos" | "serra" | "basicos" | "acessorios";
  categoryLabel: string;
  priceEstimate: string;
  sizes: string[];
  fabric: string;
  description: string;
  highlight: string;
}

const LOOKS_DATA: LookItem[] = [
  {
    id: "blazer-linho-roma",
    title: "Blazer Estruturado em Linho Misto Roma",
    category: "alfaiataria",
    categoryLabel: "Alfaiataria & Trabalho",
    priceEstimate: "R$ 289,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Linho Puro com Forro Acetinado",
    description: "Corte de alfaiataria impecável com ombreiras leves e botões forrados. Transita com elegância do escritório e consultório para o jantar.",
    highlight: "Best Seller Alfaiataria",
  },
  {
    id: "calca-pantalona-milao",
    title: "Calça Pantalona Fluida com Cinto Forrado",
    category: "alfaiataria",
    categoryLabel: "Alfaiataria & Trabalho",
    priceEstimate: "R$ 199,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Crepe Alfaiataria Pesado",
    description: "Cintura alta alongadora com caimento fluido que não marca. Tecido que não amassa com facilidade e valoriza a postura.",
    highlight: "Caimento Alongador",
  },
  {
    id: "colete-alfaiataria-paris",
    title: "Colete de Alfaiataria Estruturado Paris",
    category: "alfaiataria",
    categoryLabel: "Alfaiataria & Trabalho",
    priceEstimate: "R$ 179,00",
    sizes: ["P", "M", "G"],
    fabric: "Crepe Texturizado com Elastano",
    description: "Decote em V elegante para usar sozinho como blusa ou em sobreposição com camisas clássicas. Tendência internacional atemporal.",
    highlight: "Tendência Chic",
  },
  {
    id: "vestido-midi-breeze",
    title: "Vestido Midi Plissado Aurora Solar",
    category: "vestidos",
    categoryLabel: "Vestidos & Fluidos",
    priceEstimate: "R$ 249,00",
    sizes: ["P", "M", "G"],
    fabric: "Viscose Sarjada com Toque de Seda",
    description: "Movimento leve, decote suave em V e faixa ajustável na cintura. O look perfeito para almoços na serra, passeios e celebrações especiais.",
    highlight: "Fluidez Absoluta",
  },
  {
    id: "vestido-chemise-linho",
    title: "Vestido Chemise em Linho Puro Toscana",
    category: "vestidos",
    categoryLabel: "Vestidos & Fluidos",
    priceEstimate: "R$ 269,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "100% Linho Natural Respirável",
    description: "Modelagem chemise clássica com abotoamento frontal e mangas dobráveis. Sinônimo de sofisticação descomplicada e frescor.",
    highlight: "Linho 100% Nobre",
  },
  {
    id: "conjunto-tricot-alpaca",
    title: "Conjunto Tricot Soft Gola Alta & Saia Midi",
    category: "serra",
    categoryLabel: "Moda Serra & Inverno",
    priceEstimate: "R$ 279,00",
    sizes: ["Único (Veste 38 ao 44)"],
    fabric: "Fio Soft com Toque de Caxemira",
    description: "Trama aconchegante desenhada especialmente para o clima ameno de Teresópolis. Elegância sem passar frio, combinando com bota ou salto.",
    highlight: "Toque Caxemira",
  },
  {
    id: "jaqueta-couro-eco",
    title: "Jaqueta Biker Couro Eco com Zíperes Ouro",
    category: "serra",
    categoryLabel: "Moda Serra & Inverno",
    priceEstimate: "R$ 319,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Couro Ecológico Premium Macio",
    description: "Modelagem acinturada clássica que transforma qualquer produção básica em um visual marcante, moderno e cheio de personalidade.",
    highlight: "Acabamento Premium",
  },
  {
    id: "cardigan-canelado-serra",
    title: "Cardigã Longo Canelado com Fendas Laterais",
    category: "serra",
    categoryLabel: "Moda Serra & Inverno",
    priceEstimate: "R$ 189,00",
    sizes: ["P/M", "G/GG"],
    fabric: "Malha Canelada de Alto Padrão",
    description: "Comprimento alongado que afina a silhueta. Perfeito para sobreposições nos dias mais frescos de Teresópolis.",
    highlight: "Silhueta Alongada",
  },
  {
    id: "tshirt-pima-gold",
    title: "T-Shirt Gola O em Algodão Pima Peruano",
    category: "basicos",
    categoryLabel: "Básicos Essenciais",
    priceEstimate: "R$ 119,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "100% Algodão Pima Peruano",
    description: "Toque sedoso incomparável, durabilidade superior e costuras reforçadas. A base indispensável que compõe perfeitamente com qualquer alfaiataria.",
    highlight: "Algodão Pima Nobre",
  },
  {
    id: "regata-seda-viscose",
    title: "Regata Decote V Duplo em Toque de Seda",
    category: "basicos",
    categoryLabel: "Básicos Essenciais",
    priceEstimate: "R$ 109,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Viscose Acetinada Premium",
    description: "Tecido duplo na frente para evitar qualquer transparência. Ideal para ser usada por baixo de blazers ou com calças de cintura alta.",
    highlight: "Tecido Duplo Sem Transparência",
  },
  {
    id: "cinto-couro-fivela-dourada",
    title: "Cinto em Couro Legítimo com Fivela Orgânica",
    category: "acessorios",
    categoryLabel: "Acessórios & Estilo",
    priceEstimate: "R$ 89,00",
    sizes: ["Ajustável (P ao GG)"],
    fabric: "Couro Legítimo com Banho Dourado",
    description: "O detalhe que arremata a produção. Fivela dourada escovada com design orgânico que eleva vestidos e calças de alfaiataria.",
    highlight: "Design Orgânico",
  },
  {
    id: "lenco-seda-estampado",
    title: "Lenço Acetinado Estampa Exclusiva Riviera",
    category: "acessorios",
    categoryLabel: "Acessórios & Estilo",
    priceEstimate: "R$ 69,00",
    sizes: ["70cm x 70cm"],
    fabric: "Toque de Seda Acetinada",
    description: "Versátil e refinado: use no pescoço, na bolsa, no cabelo ou como cinto delicado. Traz um ponto de luz solar e sofisticação aos looks neutros.",
    highlight: "Multiuso Sofisticado",
  },
];

function AmareHome() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("Trabalho & Alfaiataria");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const phone = "5521991625495";
  const phoneDisplay = "(21) 99162-5495";
  const address = "R. Francisco Sá, 185 - Sala 106 (Galeria Teresópolis) - Várzea, Teresópolis - RJ, 25953-011";
  const googleMapsUrl = "https://maps.google.com/?q=Rua+Francisco+S%C3%A1,+185+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ,+25953-011";

  const filteredLooks =
    activeTab === "todos" ? LOOKS_DATA : LOOKS_DATA.filter((item) => item.category === activeTab);

  const generateMalaWhatsappUrl = () => {
    const text = [
      `*Solicitação da Mala Delivery (Provador em Casa) — Amare Boutique*`,
      ``,
      `*Cliente:* ${clientName.trim() || "Cliente Amare"}`,
      `*Tamanho Habitual:* ${selectedSize}`,
      `*Estilo / Ocasião Desejada:* ${selectedOccasion}`,
      neighborhood.trim() ? `*Bairro em Teresópolis:* ${neighborhood.trim()}` : `*Bairro:* Centro / Várzea / A combinar`,
      ``,
      `Olá! Vi o site oficial da Amare e gostaria de receber a malinha com looks selecionados para provar no conforto da minha casa! Podem me atender?`,
      ``,
      `_Enviado pelo site oficial da Amare Boutique_`,
    ].join("\n");

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const generalWhatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Acessei a vitrine digital da Amare Boutique e gostaria de tirar dúvidas e conhecer as novidades da coleção!"
  )}`;

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-500 selection:text-white pb-24 lg:pb-0 overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-amber-900/15 bg-[#1C1917] text-amber-100 px-4 py-2 text-center text-xs font-medium">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-amber-200">Loja Física Aberta na Galeria Teresópolis (Sala 106)</span>
          </div>
          <p className="mx-auto text-[11px] sm:text-xs">
            Atendimento de Segunda a Sábado das 09:00 às 19:00 · Serviço de Mala Delivery Ativo em Toda Teresópolis
          </p>
          <div className="hidden md:flex items-center gap-2 font-semibold text-white">
            <Phone className="h-3.5 w-3.5 text-amber-400" />
            <span>{phoneDisplay}</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR (HEADER STRICTLY WITHOUT ICON - PURE TYPOGRAPHY BRANDING) */}
      <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#FAF8F5]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Brand Name Only - Strictly Zero Icon */}
          <a href="#" className="flex flex-col text-left group min-w-0">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
              Amare
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-700">
              Boutique Feminina · Galeria Teresópolis
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-stone-700">
            <a href="#colecao" className="hover:text-amber-700 transition">
              Coleção de Looks
            </a>
            <a href="#mala-delivery" className="hover:text-amber-700 transition">
              Mala Provador
            </a>
            <a href="#loja-aberta" className="hover:text-amber-700 transition">
              Portas Abertas
            </a>
            <a href="#diferenciais" className="hover:text-amber-700 transition">
              Diferenciais
            </a>
            <a href="#galeria" className="hover:text-amber-700 transition">
              Localização
            </a>
            <a href="#faq" className="hover:text-amber-700 transition">
              Dúvidas
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#mala-delivery"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-800/20 hover:from-amber-700 hover:to-amber-800 transition active:scale-95"
            >
              <Truck className="h-4 w-4 text-amber-100" />
              <span>Pedir Mala em Casa</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-900/15 text-stone-800 lg:hidden active:bg-amber-50"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-amber-900/10 bg-white px-4 py-4 sm:px-6 sm:py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 text-sm font-semibold text-stone-800">
              <a
                href="#colecao"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <ShoppingBag className="h-4 w-4 text-amber-700" />
                <span>Coleção de Looks</span>
              </a>
              <a
                href="#mala-delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <Truck className="h-4 w-4 text-amber-700" />
                <span>Mala Provador em Casa</span>
              </a>
              <a
                href="#loja-aberta"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <Sparkles className="h-4 w-4 text-amber-700" />
                <span>Portas Abertas na Galeria</span>
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <Award className="h-4 w-4 text-amber-700" />
                <span>Diferenciais Amare</span>
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <MapPin className="h-4 w-4 text-amber-700" />
                <span>Localização na Galeria Teresópolis</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 text-stone-800"
              >
                <ShieldCheck className="h-4 w-4 text-amber-700" />
                <span>Perguntas Frequentes</span>
              </a>

              <div className="pt-3 border-t border-stone-100">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-98"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Falar com Consultora no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#FAF8F5]">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-amber-500/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[150px] sm:h-[200px] bg-orange-500/10 blur-[80px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/90 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Portas Abertas · Galeria Teresópolis, Sala 106</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900 leading-[1.14]">
                A Elegância que te Acompanha em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700">
                  Todos os Momentos.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Alfaiataria impecável, vestidos fluidos e peças atemporais pensadas para valorizar a mulher contemporânea de Teresópolis. Compre com tranquilidade na nossa loja privativa na Galeria Teresópolis ou receba a <strong>Mala Provador</strong> no conforto do seu lar.
              </p>

              {/* Dual Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#mala-delivery"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-800/20 hover:from-amber-700 hover:to-amber-800 transition active:scale-95"
                >
                  <Truck className="h-4 w-4 text-amber-100" />
                  <span>Solicitar Mala Provador em Casa</span>
                </a>
                <a
                  href="#colecao"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-300 bg-white px-7 py-4 text-sm font-bold text-stone-800 hover:bg-amber-50/60 transition active:scale-95 shadow-sm"
                >
                  <ShoppingBag className="h-4 w-4 text-amber-700" />
                  <span>Ver Destaques da Coleção</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-stone-600 border-t border-amber-900/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Loja Aberta até 19:00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Mala Delivery Sem Custo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Parcelamento em até 6x Sem Juros</span>
                </div>
              </div>
            </div>

            {/* Right Card: A Experiência da Mala Delivery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-9 shadow-xl shadow-stone-900/5">
                <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      Experiência Exclusiva
                    </span>
                    <h3 className="text-xl font-serif font-bold text-stone-900">Mala Delivery Amare</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
                    <Truck className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Você escolhe seu estilo:</strong> Conte-nos sua numeração e as ocasiões para as quais precisa de looks no WhatsApp.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Entregamos na sua porta:</strong> Uma malinha higienizada e cheirosa chega até seu endereço em Teresópolis.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Prove no seu espelho:</strong> Combine com seus próprios sapatos e acessórios sem pressa. Fique só com o que amar!
                    </p>
                  </div>
                </div>

                <a
                  href="#mala-delivery"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition active:scale-95"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Quero Agendar Minha Mala</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANNER DE ESCLARECIMENTO: PORTAS ABERTAS NA GALERIA */}
      <section id="loja-aberta" className="border-y border-amber-900/10 bg-[#FFFDF9] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-300/60 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-6 sm:p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 space-y-2.5">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ficha Oficial Verificada · Portas Abertas</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900">
                  A Amare Está Funcionando Normalmente no Centro de Teresópolis!
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Se você viu algum aviso desatualizado na internet, fique tranquila: nossa loja física na <strong>Sala 106 da Galeria Teresópolis (Rua Francisco Sá, 185)</strong> funciona a todo vapor de segunda a sábado das 09:00 às 19:00. Venha tomar um café conosco ou solicite a nossa Mala Delivery!
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Como Chegar na Galeria</span>
                  <ExternalLink className="h-3.5 w-3.5 text-stone-400" />
                </a>
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-3.5 text-xs font-bold text-amber-900 hover:bg-amber-50 transition"
                >
                  <MessageCircle className="h-4 w-4 text-amber-600" />
                  <span>Confirmar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÉTRICAS E BENEFÍCIOS */}
      <section className="border-b border-amber-900/10 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 text-center">
            <div className="rounded-2xl border border-stone-100 bg-[#FAF8F5] p-5">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-700">Sala 106</p>
              <p className="text-xs text-stone-600 font-medium mt-1">Galeria Teresópolis (Sobreloja)</p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-[#FAF8F5] p-5">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Até 19h</p>
              <p className="text-xs text-stone-600 font-medium mt-1">Segunda a Sábado Ininterrupto</p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-[#FAF8F5] p-5">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-700">100% VIP</p>
              <p className="text-xs text-stone-600 font-medium mt-1">Ambiente Privativo & Confortável</p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-[#FAF8F5] p-5">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Delivery</p>
              <p className="text-xs text-stone-600 font-medium mt-1">Mala na Sua Porta em Teresópolis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOOKBOOK & CATÁLOGO POR OCASIÃO COM FILTROS */}
      <section id="colecao" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Curadoria Exclusiva</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
                Destaques da Coleção Amare
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Peças selecionadas por caimento, qualidade superior de tecidos e versatilidade de combinações.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "todos", label: "Todos os Looks" },
                { id: "alfaiataria", label: "Alfaiataria & Trabalho" },
                { id: "vestidos", label: "Vestidos & Fluidos" },
                { id: "serra", label: "Moda Serra & Inverno" },
                { id: "basicos", label: "Básicos Nobres" },
                { id: "acessorios", label: "Acessórios" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-amber-100/60 text-stone-700 hover:bg-amber-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLooks.map((look) => (
              <div
                key={look.id}
                className="group rounded-3xl border border-amber-900/10 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-xl hover:shadow-stone-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      {look.categoryLabel}
                    </span>
                    <span className="text-xs font-serif font-bold text-amber-700">{look.priceEstimate}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-serif font-bold text-stone-900 group-hover:text-amber-700 transition">
                    {look.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-block rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-700">
                      {look.fabric}
                    </span>
                    <span className="text-[10px] font-bold text-amber-600">{look.highlight}</span>
                  </div>
                  <p className="mt-3 text-xs text-stone-600 leading-relaxed">{look.description}</p>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Tamanhos:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {look.sizes.map((s, idx) => (
                        <span key={idx} className="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Olá! Adorei a peça *${look.title}* (${look.priceEstimate}) no site da Amare. Vocês têm disponível para pronta entrega ou para incluir na minha Mala Delivery?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-700 transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>Consultar Peça no WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MÓDULO INTERATIVO: MONTE SUA MALA DELIVERY */}
      <section id="mala-delivery" className="py-16 sm:py-24 bg-white border-t border-amber-900/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-300/80 bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-amber-50/50 p-6 sm:p-12 shadow-xl shadow-amber-900/5">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Provador no Conforto do Lar
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
                Agende Sua Mala Delivery Amare
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
                Conte-nos suas preferências e receba uma seleção exclusiva de looks higienizados e no seu tamanho na sua residência em Teresópolis:
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Seu Nome Completo:</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Mariana Vasconcelos"
                    className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-stone-900 focus:border-amber-600 focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Seu Bairro em Teresópolis:</label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Agriões, Alto, Várzea, Comary, Golfe..."
                    className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-stone-900 focus:border-amber-600 focus:outline-none shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Qual o seu tamanho habitual?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["P (36/38)", "M (40)", "G (42)", "GG (44/46)"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`rounded-xl border p-3 text-xs font-bold transition-all text-center ${
                        selectedSize === sz
                          ? "border-amber-600 bg-amber-600 text-white shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:bg-amber-50"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Para qual ocasião você deseja looks?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Trabalho & Alfaiataria",
                    "Fim de Semana & Passeio",
                    "Clima Serra & Inverno",
                    "Festa & Ocasião Especial",
                  ].map((oc) => (
                    <button
                      key={oc}
                      type="button"
                      onClick={() => setSelectedOccasion(oc)}
                      className={`rounded-xl border p-3 text-xs font-bold transition-all text-center ${
                        selectedOccasion === oc
                          ? "border-amber-600 bg-amber-100 text-amber-900 shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {oc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-stone-900">Taxa de Entrega da Malinha:</p>
                  <p className="text-sm font-serif font-bold text-amber-700">GRÁTIS para Centro, Várzea e Agriões</p>
                  <p className="text-[11px] text-stone-500">Você só paga pelas peças que decidir ficar no dia seguinte.</p>
                </div>

                <a
                  href={generateMalaWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar Pedido de Mala no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIFERENCIAIS DA BOUTIQUE AMARE */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-amber-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">A Essência Amare</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
              Por Que Nossas Clientes Amam a Amare
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Um conceito de moda que une aconchego, elegância sem afetação e respeito ao seu tempo:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm transition hover:border-amber-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-serif font-bold text-stone-900">Moda com Afeto & Acolhimento</h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                O nome Amare nasce da proposta de acolher e vestir a mulher com autoamor, realçando sua beleza natural sem impor padrões inalcançáveis.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm transition hover:border-amber-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-serif font-bold text-stone-900">Tecidos Nobres & Durabilidade</h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Linho puro, algodão pima, tricot caxemira e crepes pesados. Roupas com caimento estruturado e costuras que permanecem impecáveis por anos.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm transition hover:border-amber-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-serif font-bold text-stone-900">Mala Delivery sem Custo</h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                A comodidade de provar no seu ritmo, no seu quarto, combinando com seus sapatos e maquiagem. Sem a pressa dos provadores de shopping.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm transition hover:border-amber-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <Tag className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-serif font-bold text-stone-900">Condições Facilitadas</h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Parcelamento em até 6x sem juros em todos os cartões de crédito ou desconto especial em pagamentos via PIX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. A LOJA NA GALERIA TERESÓPOLIS & GOOGLE MAPS */}
      <section id="galeria" className="py-16 sm:py-24 bg-white border-t border-amber-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-900/10 bg-[#FFFDF9] p-6 sm:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Visite Nossa Loja Física
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
                  Um Refúgio de Moda na Galeria Teresópolis
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Localizada na <strong>Sala 106</strong> da Galeria Teresópolis (Rua Francisco Sá, 185), nossa loja
                  foi desenhada para ser um ambiente acolhedor, privativo e sem o tumulto das calçadas da rua. Venha tomar um
                  café conosco, experimentar as peças com calma e bater um papo de estilo.
                </p>

                <div className="pt-3 space-y-3 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>R. Francisco Sá, 185 - Sala 106 (Galeria Teresópolis, Sobreloja) - Várzea, Teresópolis - RJ</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>Segunda a Sábado das 09:00 às 19:00 (Ininterrupto)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>WhatsApp Direto: {phoneDisplay}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-xs font-bold text-white hover:bg-stone-800 transition shadow-sm"
                  >
                    <Navigation className="h-4 w-4 text-amber-400" />
                    <span>Traçar Rota no Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5 text-stone-400" />
                  </a>
                  <a
                    href={generalWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-xs font-bold text-stone-800 hover:bg-amber-50 transition"
                  >
                    <MessageCircle className="h-4 w-4 text-amber-600" />
                    <span>Tirar Dúvidas com a Consultora</span>
                  </a>
                </div>
              </div>

              {/* Map Embed or Contact Box */}
              <div className="lg:col-span-5 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md">
                <iframe
                  title="Localização Amare Boutique Galeria Teresópolis"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1969299446215!2d-42.9734125!3d-22.420658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9852ae79758597%3A0xe5a36371cb1f39ec!2sR.%20Francisco%20S%C3%A1%2C%20185%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-011!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-amber-900/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Tire Suas Dúvidas</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">Perguntas Frequentes</h2>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "Como funciona o serviço de Mala Delivery (Provador em Casa)?",
                a: "Você escolhe as peças e estilos desejados pelo nosso site ou conversando diretamente com a nossa consultora no WhatsApp. Levamos a malinha com opções de numerações e cores no seu endereço em Teresópolis. Você experimenta com calma e busca-se no dia seguinte. Você só paga pelas peças que decidir ficar!",
              },
              {
                q: "A entrega da malinha tem custo?",
                a: "Para bairros do perímetro central como Várzea, Centro e Agriões, a entrega e a retirada da malinha são 100% gratuitas! Para outros bairros de Teresópolis, cobramos apenas uma taxa simbólica de entrega que é abonada caso você fique com peças.",
              },
              {
                q: "A loja física na Galeria Teresópolis está aberta aos sábados?",
                a: "Sim! A nossa loja na Galeria Teresópolis (Sala 106) funciona de segunda a sábado das 09:00 às 19:00 ininterruptamente, oferecendo flexibilidade para quem só tem tempo após o expediente ou nos fins de semana.",
              },
              {
                q: "Como encontrar a loja na Galeria Teresópolis?",
                a: "Entrando na Galeria Teresópolis pela Rua Francisco Sá, 185, suba pela escada ou pelo elevador até o primeiro andar (sobreloja). Nossa loja fica na Sala 106. É um espaço reservado, climatizado e acolhedor.",
              },
              {
                q: "Quais as formas de pagamento aceitas?",
                a: "Aceitamos cartões de crédito e débito com parcelamento em até 6x sem juros, além de PIX com desconto especial nas compras.",
              },
              {
                q: "É possível trocar peças compradas na malinha ou na loja?",
                a: "Com certeza! Caso precise trocar cor ou tamanho, basta avisar pelo WhatsApp em até 7 dias corridos com a etiqueta fixada na peça.",
              },
            ].map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-stone-900 hover:bg-amber-50/50 transition"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-amber-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-stone-100 p-5 text-xs sm:text-sm text-stone-600 leading-relaxed bg-[#FFFDF9]">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FOOTER (TYPOGRAPHIC BRAND ONLY) */}
      <footer className="border-t border-stone-800 bg-[#1C1917] text-stone-300 py-12 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              {/* Typographic brand - 0 icon */}
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Amare Boutique
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mt-0.5">
                  Moda Feminina Contemporânea · Galeria Teresópolis
                </span>
              </div>
              <p className="text-stone-400 max-w-sm leading-relaxed">
                Moda feminina contemporânea, alfaiataria elegante e vestidos fluidos no coração comercial de Teresópolis. Compre na loja física ou receba nossa Mala Delivery em casa.
              </p>
              <div className="pt-1 space-y-1 text-stone-400">
                <p>
                  Endereço: <strong>R. Francisco Sá, 185 - Sala 106 (Galeria Teresópolis)</strong>
                </p>
                <p>
                  WhatsApp: <strong className="text-amber-400">{phoneDisplay}</strong>
                </p>
              </div>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Navegação Rápida</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#colecao" className="hover:text-white transition">
                    Coleção de Looks
                  </a>
                </li>
                <li>
                  <a href="#mala-delivery" className="hover:text-white transition">
                    Mala Provador em Casa
                  </a>
                </li>
                <li>
                  <a href="#loja-aberta" className="hover:text-white transition">
                    Portas Abertas
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-white transition">
                    Diferenciais Amare
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-white transition">
                    Localização na Galeria
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Horários & Atendimento</p>
              <p className="text-stone-400">Segunda a Sábado: 09:00 às 19:00 (Ininterrupto)</p>
              <p className="text-stone-400 mt-2">Mala Delivery em Toda Teresópolis</p>
              <div className="mt-4">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 px-4 py-2.5 text-xs font-bold text-white transition shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()} Amare Boutique. Todos os direitos reservados.</p>
            <p>
              Desenvolvido estrategicamente por <span className="text-white">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FLUTUANTE MOBILE FIXA NO RODAPÉ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-900/10 bg-white/95 backdrop-blur-lg px-4 py-3 md:hidden shadow-xl">
        <div className="flex items-center gap-2.5">
          <a
            href={generateMalaWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 py-3 text-xs font-bold text-white shadow-md active:scale-95 transition"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <Truck className="h-4 w-4 text-amber-100" />
            <span>Pedir Mala Provador no WhatsApp</span>
          </a>
          <a
            href="#mala-delivery"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-50 text-amber-800 active:bg-amber-100"
            aria-label="Ir para o formulário de simulação"
          >
            <ShoppingBag className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Amare%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
export default AmareHome;
