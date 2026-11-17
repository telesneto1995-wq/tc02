'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BarChart3,
  Check,
  ChevronRight,
  Handshake,
  HardHat,
  Home,
  Image as ImageIcon,
  Instagram,
  MapPin,
  MessageCircle,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '@/lib/contact-config';

import logoTcImg from '@/public/assets/crops/logo_tc_footer.png';
import heroLeftBgImg from '@/public/assets/crops/hero_left_bg.png';
import heroMachinesImg from '@/public/assets/crops/hero_machines.png';
import machine1DozerImg from '@/public/assets/crops/machine_1_dozer.png';
import machine2ExcavatorImg from '@/public/assets/crops/machine_2_excavator.png';
import machine3DumpImg from '@/public/assets/crops/machine_3_dump.png';
import machine4CompactorImg from '@/public/assets/crops/machine_4_compactor.png';
import machine5MixerImg from '@/public/assets/crops/machine_5_mixer.png';
import service1DozerImg from '@/public/assets/crops/service_1_dozer.png';
import service2ExcavatorImg from '@/public/assets/crops/service_2_excavator.png';
import service3TruckImg from '@/public/assets/crops/service_3_truck.png';
import service4BuildingImg from '@/public/assets/crops/service_4_building.png';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início', href: '#inicio', icon: Home },
  { id: 'servicos', label: 'Serviços', href: '#servicos', icon: Settings },
  { id: 'galeria', label: 'Galeria', href: '#maquinas', icon: ImageIcon },
  { id: 'sobre', label: 'Sobre Nós', href: '#sobre', icon: Handshake },
  { id: 'contato', label: 'Contato', href: '#contato', icon: MapPin },
] as const;

const MACHINES = [
  {
    id: 'trator-de-esteira',
    line1: 'TRATOR',
    line2: 'DE ESTEIRA',
    alt: 'Trator de esteira amarelo em terraplanagem',
    image: machine1DozerImg,
  },
  {
    id: 'escavadeira-hidraulica',
    line1: 'ESCAVADEIRA',
    line2: 'HIDRÁULICA',
    alt: 'Escavadeira hidráulica amarela em operação',
    image: machine2ExcavatorImg,
  },
  {
    id: 'cacambas',
    line1: 'CAÇAMBAS',
    line2: '',
    alt: 'Caminhão caçamba amarelo para transporte de terra e materiais',
    image: machine3DumpImg,
  },
  {
    id: 'muque-compactador',
    line1: 'MUQUE',
    line2: '(COMPACTADOR)',
    alt: 'Rolo compactador amarelo para compactação de solo',
    image: machine4CompactorImg,
  },
  {
    id: 'construtora',
    line1: 'CONSTRUTORA',
    line2: '',
    alt: 'Caminhão betoneira branco da construtora Thiago Correia',
    image: machine5MixerImg,
  },
] as const;

const DIFFERENTIALS = [
  'Equipe Qualificada',
  'Máquinas Modernas',
  'Agilidade no Atendimento',
  'Compromisso com o Prazo',
  'Obras de Qualidade',
] as const;

const SERVICE_PHOTOS = [
  {
    id: 'terraplanagem-trator',
    image: service1DozerImg,
    alt: 'Trator de esteira nivelando terreno em obra de terraplanagem',
  },
  {
    id: 'escavacao-hidraulica',
    image: service2ExcavatorImg,
    alt: 'Escavadeira hidráulica realizando escavação pesada',
  },
  {
    id: 'transporte-cacamba',
    image: service3TruckImg,
    alt: 'Caminhão basculante descarregando material na obra',
  },
  {
    id: 'construcao-civil',
    image: service4BuildingImg,
    alt: 'Estrutura de edificação em alvenaria e concreto na construtora',
  },
] as const;

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Qualidade',
    subtitle: 'em tudo que faz',
  },
  {
    icon: Handshake,
    title: 'Parceria',
    subtitle: 'que constrói',
  },
  {
    icon: BarChart3,
    title: 'Crescimento',
    subtitle: 'junto com você',
  },
] as const;

export default function ThiagoCorreiaLanding() {
  const [activeNav, setActiveNav] = useState<string>('inicio');
  const whatsappHref = getWhatsAppUrl();

  return (
    <div className="min-h-screen w-full bg-[#060606] text-white overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] bg-dark-textured shadow-[0_0_90px_rgba(0,0,0,0.95)]">
        {/* SEÇÃO 1 — IDENTIDADE E CABEÇALHO */}
        <header className="relative z-30 bg-[#080808] border-b border-yellow-500/25">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logotipo TC à esquerda */}
            <a
              href="#inicio"
              onClick={() => setActiveNav('inicio')}
              className="flex items-center px-4 py-2 sm:px-6 sm:py-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15]"
              aria-label="Thiago Correia - Início"
            >
              <Image
                src={logoTcImg}
                alt="TC Thiago Correia - Locação de Máquinas e Construtora"
                width={235}
                height={102}
                priority
                referrerPolicy="no-referrer"
                className="h-14 sm:h-16 md:h-[74px] w-auto object-contain mix-blend-lighten"
              />
            </a>

            {/* Barra de Navegação Central (Desktop) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-stretch self-stretch bg-[#0d0d0d] border-x border-white/10"
            >
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveNav(item.id)}
                    className={`group flex flex-col items-center justify-center gap-1 px-5 xl:px-6 border-r last:border-r-0 border-white/10 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] ${
                      isActive
                        ? 'text-[#facc15] bg-white/[0.04]'
                        : 'text-neutral-200 hover:text-[#facc15] hover:bg-white/[0.03]'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-transform duration-150 group-hover:scale-105 ${
                        isActive ? 'text-[#facc15]' : 'text-neutral-200 group-hover:text-[#facc15]'
                      }`}
                      strokeWidth={2}
                    />
                    <span className="text-[13px] font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Faixa Amarela Diagonal de Localização à Direita */}
            <div className="relative self-stretch flex items-center ml-auto lg:ml-0">
              <div
                className="flex items-center gap-2 bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#eab308] text-black pl-7 pr-5 sm:pl-10 sm:pr-8 py-3 sm:py-4 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                style={{
                  clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-black shrink-0 fill-black/15" strokeWidth={2.4} />
                <span className="font-script text-lg sm:text-xl md:text-2xl text-black whitespace-nowrap">
                  {CONTACT_CONFIG.location}
                </span>
              </div>
            </div>
          </div>

          {/* Barra de Navegação Mobile / Tablet */}
          <nav
            aria-label="Navegação principal mobile"
            className="grid grid-cols-5 lg:hidden border-t border-white/10 bg-[#0d0d0d]"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex flex-col items-center justify-center gap-0.5 py-2 px-1 border-r last:border-r-0 border-white/10 transition-colors min-h-[46px] ${
                    isActive ? 'text-[#facc15] bg-white/[0.05]' : 'text-neutral-200 hover:text-[#facc15]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span className="text-[11px] font-semibold leading-tight whitespace-nowrap truncate max-w-full">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </header>

        {/* SEÇÃO 2 & 3 — FRASE PRINCIPAL E IMAGEM PRINCIPAL */}
        <section
          id="inicio"
          className="relative overflow-hidden border-b-2 border-[#ca8a04]/40 bg-[#180d04]"
        >
          {/* Fundo Pôr do Sol e Solo de Terraplanagem à Esquerda */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src={heroLeftBgImg}
              alt=""
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-left opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
            {/* Coluna Esquerda: Frase Principal + Texto + Botão */}
            <div className="w-full lg:w-[44%] px-5 py-8 sm:px-9 sm:py-10 lg:pl-12 lg:pr-4 lg:py-12 flex flex-col justify-center">
              <h1 className="font-script text-[34px] sm:text-[44px] xl:text-[50px] leading-[1.08] tracking-normal text-shadow-heavy">
                <span className="block text-white">Jovem Sonhador</span>
                <span className="block text-[#facc15] mt-0.5">
                  que não para de Lutar!
                </span>
              </h1>

              {/* Traço luminoso dourado abaixo da frase */}
              <div
                aria-hidden="true"
                className="mt-3 mb-5 h-[3px] w-full max-w-[440px] rounded-full bg-gradient-to-r from-[#fde047] via-[#facc15] to-transparent shadow-[0_0_12px_rgba(250,204,21,0.75)]"
              />

              {/* Texto descritivo com barra vertical amarela à esquerda */}
              <div className="flex items-stretch gap-3.5 max-w-[460px]">
                <div
                  aria-hidden="true"
                  className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#ca8a04]"
                />
                <p className="text-[16px] sm:text-[18px] leading-[1.45] text-neutral-100 font-medium text-shadow-heavy">
                  <strong className="font-bold text-white">Thiago Correia</strong>,
                  construindo sonhos, realizando projetos e movimentando{' '}
                  <strong className="font-bold text-[#facc15]">Milagres</strong> e
                  região com qualidade, compromisso e trabalho de verdade!
                </p>
              </div>

              {/* Botão Principal de Orçamento */}
              <div className="mt-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 rounded-full bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#d97706] px-6 py-3 sm:px-7 sm:py-3.5 text-black shadow-[0_6px_22px_rgba(234,179,8,0.45),inset_0_1px_1px_rgba(255,255,255,0.7)] border border-[#fef08a]/80 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                >
                  <span className="font-display font-extrabold italic uppercase text-lg sm:text-[21px] tracking-wide">
                    FAÇA SEU ORÇAMENTO
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#facc15] transition-transform duration-150 group-hover:translate-x-0.5">
                    <ChevronRight className="h-4 w-4" strokeWidth={3} />
                  </span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Composição Escavadeira, Caçamba, Logo TC e Faixa */}
            <div className="relative w-full lg:w-[56%] min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] flex items-end justify-end">
              <div
                className="relative w-full h-full"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 11%, black 100%)',
                  maskImage:
                    'linear-gradient(to right, transparent 0%, black 11%, black 100%)',
                }}
              >
                <Image
                  src={heroMachinesImg}
                  alt="Escavadeira hidráulica e caminhão caçamba da Thiago Correia (TC) em operação sob pôr do sol dramático — Trabalho Forte, Resultado Certo!"
                  width={698}
                  height={503}
                  priority
                  referrerPolicy="no-referrer"
                  className="w-full h-auto lg:h-full object-cover object-center lg:object-right-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — MÁQUINAS E EQUIPAMENTOS */}
        <section
          id="maquinas"
          className="relative bg-[#0c0c0c] bg-dark-textured px-4 py-6 sm:px-7 sm:py-8 lg:px-8"
        >
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-5">
            {/* 5 Cards Horizontais em Paralelogramo */}
            <div className="w-full xl:w-[79%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-2.5">
              {MACHINES.map((machine) => (
                <a
                  key={machine.id}
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de solicitar orçamento para ${machine.line1}${
                      machine.line2 ? ` ${machine.line2}` : ''
                    } com a Thiago Correia (TC).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15]"
                  aria-label={`Solicitar orçamento de ${machine.line1} ${machine.line2}`}
                >
                  {/* Moldura Dourada Inclinada (Desktop) / Limpa */}
                  <div
                    className="bg-gradient-to-b from-[#eab308]/90 via-[#b45309]/55 to-[#eab308]/85 p-[1.5px] shadow-[0_8px_20px_rgba(0,0,0,0.75)] transition-colors group-hover:from-[#fde047] group-hover:to-[#facc15]"
                    style={{
                      clipPath: 'polygon(11% 0%, 100% 0%, 89% 100%, 0% 100%)',
                    }}
                  >
                    <div
                      className="flex flex-col bg-[#111111]"
                      style={{
                        clipPath: 'polygon(11% 0%, 100% 0%, 89% 100%, 0% 100%)',
                      }}
                    >
                      <div className="relative w-full aspect-[206/107] bg-[#0d0d0d] overflow-hidden">
                        <Image
                          src={machine.image}
                          alt={machine.alt}
                          fill
                          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 32vw, 18vw"
                          referrerPolicy="no-referrer"
                          className="object-cover object-center transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex min-h-[52px] flex-col items-center justify-center bg-gradient-to-b from-[#171717] to-[#080808] px-5 py-2 border-t border-[#eab308]/40">
                        <span className="font-display font-bold uppercase text-white text-[15px] leading-[1.12] tracking-wide text-center">
                          {machine.line1}
                        </span>
                        {machine.line2 && (
                          <span className="font-display font-bold uppercase text-white text-[14px] leading-[1.12] tracking-wide text-center">
                            {machine.line2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Lista de Diferenciais à Direita */}
            <ul className="w-full xl:w-[21%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2.5 sm:gap-3 xl:pl-2">
              {DIFFERENTIALS.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#fde047] to-[#eab308] text-black shadow-sm"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3.2} />
                  </span>
                  <span className="text-[15px] font-medium text-neutral-100 whitespace-nowrap">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEÇÃO 5 — NOSSOS SERVIÇOS */}
        <section
          id="servicos"
          className="relative bg-[#090909] border-y-[5px] border-[#facc15] shadow-[0_0_25px_rgba(250,204,21,0.2)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Painel Esquerdo: NOSSOS SERVIÇOS + Texto + Botão SAIBA MAIS */}
            <div className="relative z-20 w-full lg:w-[29%] bg-[#090909] bg-dark-textured px-6 py-7 sm:px-8 lg:pr-10 lg:py-8 flex flex-col justify-center lg:[clip-path:polygon(0_0,93%_0,100%_50%,92%_100%,0_100%)]">
              <div className="flex items-center gap-3">
                <HardHat
                  className="h-11 w-11 sm:h-12 sm:w-12 text-[#facc15] shrink-0 fill-[#facc15]/20"
                  strokeWidth={2}
                />
                <h2 className="font-display font-black italic uppercase leading-[0.96] tracking-wide">
                  <span className="block text-2xl sm:text-[26px] text-white">
                    NOSSOS
                  </span>
                  <span className="block text-3xl sm:text-[34px] text-[#facc15]">
                    SERVIÇOS
                  </span>
                </h2>
              </div>

              <p className="mt-3.5 text-[15px] leading-[1.42] text-neutral-200 max-w-[300px]">
                Da terraplanagem à construção, oferecemos soluções completas para
                sua obra, com eficiência e segurança.
              </p>

              <div className="mt-5">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#d97706] px-5 py-2 text-black shadow-[0_4px_16px_rgba(234,179,8,0.4),inset_0_1px_1px_rgba(255,255,255,0.65)] border border-[#fef08a]/70 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                >
                  <span className="font-display font-extrabold italic uppercase text-[17px] tracking-wide">
                    SAIBA MAIS
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#facc15] transition-transform duration-150 group-hover:translate-x-0.5">
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </a>
              </div>
            </div>

            {/* Galeria de 4 Fotos Inclinadas de Serviços com Divisórias Amarelas */}
            <div className="w-full lg:w-[75%] lg:-ml-[4%] bg-[#facc15] grid grid-cols-2 lg:flex items-stretch gap-1 p-1 lg:p-0 lg:gap-0 overflow-hidden">
              {SERVICE_PHOTOS.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`relative h-[165px] sm:h-[200px] lg:h-[232px] lg:flex-1 overflow-hidden bg-transparent ${
                    index > 0 ? 'lg:-ml-7' : ''
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 & 7 — VALORES, CHAMADA PARA ORÇAMENTO E CONTATOS */}
        <section
          id="contato"
          className="relative bg-[#070707] bg-dark-textured border-b-[4px] border-[#eab308]"
        >
          <div
            id="sobre"
            className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 px-5 py-7 sm:px-8 lg:px-8 lg:py-6"
          >
            {/* 3 Pilares de Valor (Esquerda) */}
            <div className="lg:col-span-4 grid grid-cols-3 divide-x divide-white/15">
              {VALUE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col items-center text-center px-2"
                  >
                    <Icon
                      className="h-8 w-8 sm:h-9 sm:w-9 text-[#facc15] mb-1.5"
                      strokeWidth={2}
                    />
                    <span className="font-bold text-white text-sm sm:text-[15px] leading-tight">
                      {pillar.title}
                    </span>
                    <span className="text-neutral-300 text-xs sm:text-[13px] leading-tight mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Chamada para Orçamento (Centro) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center py-2 lg:border-x lg:border-yellow-500/20 lg:px-4">
              <h2 className="font-display font-black italic uppercase leading-[1.02] tracking-wide">
                <span className="block text-xl sm:text-2xl text-white">
                  SOLICITE SEU
                </span>
                <span className="block text-2xl sm:text-[28px] text-[#facc15]">
                  ORÇAMENTO AGORA!
                </span>
              </h2>
              <div
                aria-hidden="true"
                className="mt-2 h-[3px] w-44 rounded-full bg-gradient-to-r from-transparent via-[#facc15] to-transparent"
              />
            </div>

            {/* Botões Oficiais: WhatsApp e Instagram (Direita) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-3.5">
              {/* Botão WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp: ${CONTACT_CONFIG.whatsapp.displayPhone}`}
                aria-label={`Fale Conosco pelo WhatsApp ${CONTACT_CONFIG.whatsapp.displayPhone}`}
                className="group flex items-center justify-between gap-3 rounded-[20px] bg-gradient-to-b from-[#25d366] via-[#16a34a] to-[#0f8a3c] px-4 py-3 text-white ring-2 ring-white/85 shadow-[0_6px_22px_rgba(34,197,94,0.4)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] sm:min-w-[225px]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/40">
                    <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.2} />
                  </span>
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[14px] font-bold whitespace-nowrap">
                      Fale Conosco
                    </span>
                    <span className="text-[14px] font-bold whitespace-nowrap">
                      pelo WhatsApp
                    </span>
                  </span>
                </span>
                <ChevronRight
                  className="h-5 w-5 text-white shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                  strokeWidth={2.8}
                />
              </a>

              {/* Botão Instagram */}
              <a
                href={CONTACT_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga nosso Instagram"
                className="group flex items-center justify-between gap-3 rounded-[20px] bg-gradient-to-tr from-[#f58529] via-[#e1306c] to-[#833ab4] px-4 py-3 text-white ring-2 ring-white/85 shadow-[0_6px_22px_rgba(225,48,108,0.4)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] sm:min-w-[205px]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 border border-white/40">
                    <Instagram className="h-6 w-6 text-white" strokeWidth={2.2} />
                  </span>
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[14px] font-bold whitespace-nowrap">
                      Siga nosso
                    </span>
                    <span className="text-[14px] font-bold whitespace-nowrap">
                      Instagram
                    </span>
                  </span>
                </span>
                <ChevronRight
                  className="h-5 w-5 text-white shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                  strokeWidth={2.8}
                />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 — RODAPÉ */}
        <footer className="bg-[#050505] bg-dark-textured px-5 py-7 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0">
            {/* Localização à Esquerda */}
            <div className="flex items-center justify-center md:justify-start gap-3 md:pr-6">
              <MapPin
                className="h-11 w-11 text-[#facc15] shrink-0 fill-[#facc15]/20"
                strokeWidth={2.2}
              />
              <div>
                <p className="font-bold text-white text-2xl sm:text-[26px] leading-tight">
                  {CONTACT_CONFIG.location}
                </p>
                <p className="font-script text-[#facc15] text-lg sm:text-xl leading-tight mt-0.5">
                  Nossa terra, nosso orgulho!
                </p>
              </div>
            </div>

            {/* Logotipo TC Central */}
            <div className="flex items-center justify-center md:border-x md:border-[#eab308]/60 md:px-6 py-1">
              <Image
                src={logoTcImg}
                alt="TC Thiago Correia - Locação de Máquinas e Construtora"
                width={260}
                height={113}
                referrerPolicy="no-referrer"
                className="h-20 sm:h-24 w-auto object-contain mix-blend-lighten"
              />
            </div>

            {/* Frase Final à Direita */}
            <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right md:pl-6">
              <p className="font-script text-white text-2xl sm:text-[28px] leading-[1.15]">
                Construindo um futuro
                <span className="block">melhor, juntos!</span>
              </p>
              <div
                aria-hidden="true"
                className="mt-2 h-[3px] w-48 rounded-full bg-gradient-to-r from-transparent via-[#facc15] to-[#eab308]"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
