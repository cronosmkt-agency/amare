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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AmareHome,
});

interface LookItem {
  id: string;
  title: string;
  category: "alfaiataria" | "vestidos" | "serra" | "basicos";
  categoryLabel: string;
  priceEstimate: string;
  sizes: string[];
  fabric: string;
  description: string;
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
    description: "Corte impecável com ombreiras leves e botões forrados. Transita com autoridade do consultório ou tribunal para o jantar.",
  },
  {
    id: "calca-pantalona-milao",
    title: "Pantalona Fluida com Cinto Forrado",
    category: "alfaiataria",
    categoryLabel: "Alfaiataria & Trabalho",
    priceEstimate: "R$ 199,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Crepe Alfaiataria Pesado",
    description: "Cintura alta alongadora com caimento solto e elegante. Não amassa com facilidade e valoriza a postura.",
  },
  {
    id: "vestido-midi-breeze",
    title: "Vestido Midi Plissado Aurora Solar",
    category: "vestidos",
    categoryLabel: "Vestidos & Fluidos",
    priceEstimate: "R$ 249,00",
    sizes: ["P", "M", "G"],
    fabric: "Viscose Sarjada com Toque de Seda",
    description: "Movimento leve, decote suave em V e faixa ajustável na cintura. O look perfeito para almoços na serra e eventos de fim de semana.",
  },
  {
    id: "conjunto-tricot-alpaca",
    title: "Conjunto Tricot Soft Gola Alta & Saia Midi",
    category: "serra",
    categoryLabel: "Moda Serra & Inverno",
    priceEstimate: "R$ 279,00",
    sizes: ["Tamanho Único (Veste 38 ao 44)"],
    fabric: "Fio Soft com Toque de Caxemira",
    description: "Trama aconchegante desenhada para o clima ameno de Teresópolis. Elegância sem passar frio, combinando com bota ou salto.",
  },
  {
    id: "jaqueta-couro-eco",
    title: "Jaqueta Biker Couro Eco com Zíperes Ouro",
    category: "serra",
    categoryLabel: "Moda Serra & Inverno",
    priceEstimate: "R$ 319,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "Couro Ecológico Premium",
    description: "Modelagem acinturada clássica que transforma qualquer look básico em uma produção sofisticada e moderna.",
  },
  {
    id: "tshirt-pima-gold",
    title: "T-Shirt Gola O em Algodão Pima Peruano",
    category: "basicos",
    categoryLabel: "Básicos Essenciais",
    priceEstimate: "R$ 119,00",
    sizes: ["P", "M", "G", "GG"],
    fabric: "100% Algodão Pima Nobre",
    description: "Toque sedoso, durabilidade extrema e caimento reto. A peça essencial que combina com todos os blazers e saias do guarda-roupa.",
  },
];

function AmareHome() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("Trabalho & Alfaiataria");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phone = "5521991625495";
  const phoneDisplay = "(21) 99162-5495";

  const filteredLooks =
    activeTab === "todos" ? LOOKS_DATA : LOOKS_DATA.filter((item) => item.category === activeTab);

  const generateMalaWhatsappUrl = () => {
    const text = `Olá, meninas da Amare! Gostaria de agendar a Mala Delivery (Provador em Casa):
• Nome: ${clientName || "Cliente Amare"}
• Meu Tamanho: ${selectedSize}
• Estilo / Ocasião Desejada: ${selectedOccasion}
• Bairro em Teresópolis: ${neighborhood || "A combinar no Centro/Várzea"}

Podem me passar os looks disponíveis e combinar o horário de entrega?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const generalWhatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Acessei a vitrine digital da Amare e gostaria de ver fotos das peças da nova coleção!"
  )}`;

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-amber-900/10 bg-stone-900 text-amber-100 px-4 py-2 text-center text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider">
            LOJA FÍSICA ABERTA NA GALERIA TERESÓPOLIS (SALA 106)
          </span>
          <span className="text-amber-300/60 hidden sm:inline">·</span>
          <span className="text-stone-300 hidden sm:inline">
            Segunda a Sábado até às 19:00 · Serviço de Mala Delivery Ativo
          </span>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-amber-900/10 bg-[#FAF8F5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-md shadow-amber-900/15 transition group-hover:scale-105">
              <ShoppingBag className="h-5 w-5 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">Amare</span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  Boutique
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium">Moda Feminina · Galeria Teresópolis Sala 106</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#colecao" className="hover:text-amber-700 transition">
              Coleção de Looks
            </a>
            <a href="#mala-delivery" className="hover:text-amber-700 transition">
              Provador em Casa
            </a>
            <a href="#diferenciais" className="hover:text-amber-700 transition">
              A Experiência
            </a>
            <a href="#galeria" className="hover:text-amber-700 transition">
              A Loja na Galeria
            </a>
            <a href="#faq" className="hover:text-amber-700 transition">
              Dúvidas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#mala-delivery"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-700/20 hover:bg-amber-700 transition active:scale-95"
            >
              <Truck className="h-4 w-4 text-amber-200" />
              <span>Pedir Mala em Casa</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-900/15 text-stone-800 lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-amber-900/10 bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2 text-sm font-semibold text-stone-800">
              <a
                href="#colecao"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-amber-50"
              >
                Coleção de Looks
              </a>
              <a
                href="#mala-delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-amber-50"
              >
                Como Funciona a Mala Delivery
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-amber-50"
              >
                Diferenciais Amare
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-amber-50"
              >
                Onde Fica na Galeria
              </a>

              <div className="pt-2 border-t border-stone-100">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs font-bold text-white shadow-md"
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
      <section className="relative overflow-hidden py-14 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-900">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span>Moda Feminina Autoral · Galeria Teresópolis, Sala 106</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-stone-900 leading-[1.12]">
                A Elegância que te Acompanha em{" "}
                <span className="italic text-amber-700">Todos os Momentos.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Alfaiataria impecável, vestidos fluidos e peças atemporais para a mulher moderna da serra. Visite nossa
                loja privativa na Galeria Teresópolis ou receba a <strong>Mala Provador</strong> no conforto do seu lar.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <a
                  href="#mala-delivery"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-amber-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-800/20 hover:bg-amber-700 transition active:scale-95"
                >
                  <Truck className="h-4 w-4 text-amber-100" />
                  <span>Solicitar Provador em Casa</span>
                </a>
                <a
                  href="#colecao"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-300 bg-white px-7 py-4 text-sm font-bold text-stone-800 hover:bg-amber-50/50 transition"
                >
                  <ShoppingBag className="h-4 w-4 text-amber-700" />
                  <span>Ver Destaques da Coleção</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-stone-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Loja Aberta até 19:00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Mala Delivery Sem Custo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Parcelamento em até 6x</span>
                </div>
              </div>
            </div>

            {/* Hero Card: A Experiência da Mala Delivery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-amber-900/10 bg-white p-7 sm:p-9 shadow-xl shadow-stone-900/5">
                <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      Experiência Exclusiva
                    </span>
                    <h3 className="text-xl font-serif font-bold text-stone-900">Mala Delivery Amare</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <Truck className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700">
                      <strong>Você escolhe seu estilo:</strong> Conte-nos sua numeração e as ocasiões para as quais precisa de looks.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700">
                      <strong>Entregamos na sua porta:</strong> Uma malinha higienizada e cheirosa chega até seu endereço em Teresópolis.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700">
                      <strong>Prove no seu espelho:</strong> Combine com seus próprios sapatos e acessórios sem pressa. Fique só com o que amar!
                    </p>
                  </div>
                </div>

                <a
                  href="#mala-delivery"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 py-3.5 text-xs font-bold text-white shadow-md transition"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Quero Agendar Minha Mala</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METRICAS & BENEFICIOS */}
      <section className="border-y border-amber-900/10 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-amber-700">Sala 106</p>
              <p className="text-xs text-stone-500 font-medium mt-1">Galeria Teresópolis (Sobreloja)</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-stone-900">Até 19h</p>
              <p className="text-xs text-stone-500 font-medium mt-1">Aberto Segunda a Sábado</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-amber-700">100% VIP</p>
              <p className="text-xs text-stone-500 font-medium mt-1">Provador Confortável & Seguro</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-stone-900">Delivery</p>
              <p className="text-xs text-stone-500 font-medium mt-1">Mala na Sua Porta em Teresópolis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOOKBOOK & CATÁLOGO POR OCASIÃO */}
      <section id="colecao" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Curadoria Exclusiva</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
                Destaques da Coleção Amare
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Peças selecionadas por corte, qualidade de tecido e versatilidade de combinações.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "todos", label: "Todos os Looks" },
                { id: "alfaiataria", label: "Alfaiataria & Trabalho" },
                { id: "vestidos", label: "Vestidos & Fluidos" },
                { id: "serra", label: "Moda Serra & Inverno" },
                { id: "basicos", label: "Básicos Nobres" },
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
                  <p className="mt-1 text-xs text-amber-900/70 font-semibold">{look.fabric}</p>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">{look.description}</p>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Tamanhos:</span>
                    <div className="flex gap-1.5">
                      {look.sizes.map((s, idx) => (
                        <span key={idx} className="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold text-stone-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Adorei a peça *${look.title}* (${look.priceEstimate}) no site. Vocês têm no meu tamanho para pronta-entrega ou provador em casa?`)}`}
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

      {/* 6. MÓDULO INTERATIVO: MONTE SUA MALA DELIVERY */}
      <section id="mala-delivery" className="py-16 sm:py-24 bg-white border-t border-amber-900/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-300/80 bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-amber-50/50 p-7 sm:p-12 shadow-xl shadow-amber-900/5">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Provador no Conforto do Lar
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
                Agende Sua Mala Delivery Amare
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Conte-nos suas preferências e receba uma malinha exclusiva em sua casa em Teresópolis:
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
                    className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-xs text-stone-900 focus:border-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">Seu Bairro em Teresópolis:</label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Agriões, Alto, Várzea, Comary..."
                    className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-xs text-stone-900 focus:border-amber-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Qual o seu tamanho habitual?</label>
                <div className="grid grid-cols-4 gap-2">
                  {["P (36/38)", "M (40)", "G (42)", "GG (44/46)"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`rounded-xl border p-2.5 text-xs font-bold transition-all text-center ${
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
                      className={`rounded-xl border p-2.5 text-xs font-bold transition-all text-center ${
                        selectedOccasion === oc
                          ? "border-amber-600 bg-amber-100 text-amber-900"
                          : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {oc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-stone-900">Taxa de Entrega da Malinha:</p>
                  <p className="text-sm font-serif font-bold text-amber-700">GRÁTIS para Centro, Várzea e Agriões</p>
                  <p className="text-[11px] text-stone-500">Você só paga pelas peças que decidir ficar.</p>
                </div>

                <a
                  href={generateMalaWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-amber-700 transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar Pedido de Mala no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. A LOJA NA GALERIA */}
      <section id="galeria" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-900/10 bg-white p-8 sm:p-12">
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
                  foi desenhada para ser um ambiente acolhedor, privativo e sem o tumulto das calçadas. Venha tomar um
                  café conosco, experimentar as peças com calma e bater um papo de estilo.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-700" />
                    <span>R. Francisco Sá, 185 - Sala 106 (Galeria Teresópolis) - Várzea, Teresópolis - RJ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Segunda a Sábado das 09:00 às 19:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-amber-700" />
                    <span>WhatsApp Direto: {phoneDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-center space-y-4">
                  <Sparkles className="h-10 w-10 text-amber-600 mx-auto" />
                  <h3 className="font-serif font-bold text-stone-900 text-lg">Prefere Atendimento Personalizado?</h3>
                  <p className="text-xs text-stone-600">
                    Nossa consultora tira fotos das peças no cabide ou no corpo e envia detalhes de tecidos pelo WhatsApp.
                  </p>
                  <a
                    href={generalWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-3 text-xs font-bold text-white shadow-md hover:bg-amber-700 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chamar no WhatsApp Agora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-white border-t border-amber-900/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Tire Suas Dúvidas</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">Perguntas Frequentes</h2>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "Como funciona o serviço de Mala Delivery (Provador em Casa)?",
                a: "Você escolhe as peças e estilos desejados pelo site ou WhatsApp. Levamos a malinha com opções de cores e numerações no seu endereço. Você experimenta com calma e busca-se no dia seguinte. Você só paga pelas peças que decidir ficar.",
              },
              {
                q: "A loja física funciona até que horas aos sábados?",
                a: "A loja na Galeria Teresópolis (Sala 106) funciona de segunda a sábado das 09:00 às 19:00, proporcionando flexibilidade para quem só tem tempo após o expediente.",
              },
              {
                q: "Quais as formas de pagamento aceitas?",
                a: "Aceitamos PIX com desconto especial, cartões de crédito e débito com parcelamento em até 6x sem juros.",
              },
              {
                q: "Como encontrar a loja na Galeria Teresópolis?",
                a: "Entrando na Galeria Teresópolis pela Rua Francisco Sá, 185, suba pela sobreloja/elevador até a Sala 106. É um espaço reservado e acolhedor.",
              },
            ].map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-[#FAF8F5] overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-stone-900 hover:bg-amber-50/50"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-amber-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-stone-200 p-5 text-xs sm:text-sm text-stone-600 leading-relaxed bg-white">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-900 text-stone-300 py-12 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="sm:col-span-2 space-y-3">
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                AMARE — BOUTIQUE DE MODA FEMININA
              </span>
              <p className="text-stone-400 max-w-sm leading-relaxed">
                Moda feminina contemporânea, alfaiataria e conforto no Centro de Teresópolis.
              </p>
              <p className="text-stone-400">
                Endereço: <strong>R. Francisco Sá, 185 - Sala 106 (Galeria Teresópolis)</strong>
              </p>
              <p className="text-stone-400">
                WhatsApp: <strong className="text-amber-400">{phoneDisplay}</strong>
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Navegação</p>
              <ul className="space-y-2">
                <li>
                  <a href="#colecao" className="hover:text-white">
                    Coleção Atual
                  </a>
                </li>
                <li>
                  <a href="#mala-delivery" className="hover:text-white">
                    Provador em Casa
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-white">
                    A Loja Física
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    Dúvidas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Horários</p>
              <p className="text-stone-400">Segunda a Sábado: 09:00 às 19:00</p>
              <p className="text-stone-400 mt-2">Mala Delivery em Toda Teresópolis</p>
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

      {/* 10. BARRA FLUTUANTE MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-900/10 bg-white/95 backdrop-blur-lg px-4 py-3 md:hidden shadow-xl">
        <a
          href={generateMalaWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-95 transition"
        >
          <Truck className="h-4 w-4 text-amber-100" />
          <span>Pedir Mala Provador no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
