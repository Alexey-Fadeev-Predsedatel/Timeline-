import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ChevronDown, Shield, BookOpen, Sword, Flag, Play } from 'lucide-react';
import { useState } from 'react';

// Медиафайлы выставки. 
// Чтобы они отобразились, загрузите ваши фото и видео в папку public/media/
// с указанными ниже именами (или переименуйте пути здесь, когда загрузите файлы).
import { photo1_jpg, photo2_jpg, photo3_jpg, photo4_jpg, photo5_jpg, photo6_jpg, photo7_jpg, video1_MOV, video2_MOV } from './mediaData';

const galleryItems = [
  { type: 'image', src: photo1_jpg, alt: 'Исторический артефакт - пулеметная лента' },
  { type: 'image', src: photo2_jpg, alt: 'Историческая икона' },
  { type: 'image', src: photo3_jpg, alt: 'Военная форма' },
  { type: 'image', src: photo4_jpg, alt: 'Экспозиция с каской' },
  { type: 'image', src: photo5_jpg, alt: 'Обзор зала' },
  { type: 'image', src: photo6_jpg, alt: 'Посетители выставки' },
  { type: 'image', src: photo7_jpg, alt: 'Исторические артефакты' },
  { type: 'video', src: video1_MOV, alt: 'Видео-обзор выставки 1' }, 
  { type: 'video', src: video2_MOV, alt: 'Видео-обзор выставки 2' },
];

const eras = [
  { title: 'Царская Россия', icon: Flag, description: 'Эпоха великих императоров, формирования государства и блестящих побед.' },
  { title: 'Русско-японская война', icon: Sword, description: 'Героизм и трагедия начала XX века, ставшие важным уроком истории.' },
  { title: 'Великая Отечественная', icon: Shield, description: 'Священный подвиг народа, отстоявшего свободу и независимость Родины.' },
  { title: 'СВО', icon: BookOpen, description: 'Современная история мужества, чести и защиты национальных интересов.' },
];

export default function App() {
  const [selectedMedia, setSelectedMedia] = useState<{src: string, type: string} | null>(null);

  return (
    <div className="min-h-screen bg-dark-900 selection:bg-gold selection:text-dark-900 flex flex-col relative">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20 scale-105"
          style={{
            backgroundImage: `url('${photo2_jpg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(120%)'
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-900/40 via-dark-900/80 to-dark-900" />

        <div className="z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Первый показ</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-parchment uppercase tracking-widest mb-6"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
          >
            Линия<br/><span className="text-gold">Времени</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-parchment-muted max-w-2xl font-light leading-relaxed"
          >
            Уникальная выставка, посвященная военной и мирной истории России. Отблески эпох, застывшие в подлинных артефактах.<br/>Выставка организована силами Молодежи.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gold-dark">Исследовать</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </header>

      {/* --- ERAS SECTION --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-4">Эпохи Нашей Истории</h2>
            <div className="w-24 h-[1px] bg-gold-dark mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eras.map((era, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={era.title}
                className="group relative p-8 border border-dark-700 bg-dark-800/50 backdrop-blur-sm hover:border-gold/50 transition-colors duration-500 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-dark-900 transition-colors duration-500">
                  <era.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-parchment mb-3">{era.title}</h3>
                <p className="text-sm text-parchment-muted font-light leading-relaxed">
                  {era.description}
                </p>
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-24 px-6 bg-dark-800/80 border-y border-dark-700 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-gold mb-4">Экспозиция</h2>
              <p className="text-parchment-muted max-w-xl font-light">
                Прикоснитесь к подлинным предметам старины и военного быта. Каждый экспонат — это немой свидетель великих событий. 
                <br/><span className="text-sm text-dark-400 italic mt-2 block">*На сайте представлены фрагменты предстоящего показа</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
            {galleryItems.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className={`relative group overflow-hidden cursor-pointer border border-dark-700 bg-dark-900 ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${idx === 3 ? 'lg:col-span-2' : ''}`}
                onClick={() => setSelectedMedia({ src: item.src, type: item.type })}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-dark-900/60 border border-gold/50 backdrop-blur-md flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-dark-900 transition-all duration-500">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-24 px-6 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="w-16 h-16 mx-auto border-2 border-gold rounded-full flex items-center justify-center mb-8 relative">
             <div className="absolute inset-2 border border-gold/30 rounded-full" />
             <div className="w-2 h-2 bg-gold rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-parchment mb-12">Связь и Организация</h2>
          
          <div className="bg-dark-800/80 p-8 md:p-12 border border-gold/20 relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-gold mb-2">Алексей</h3>
                <p className="text-parchment-muted font-light mb-6 text-sm uppercase tracking-wider">
                  Руководитель выставки
                </p>
                <p className="text-parchment-muted/80 font-light text-sm max-w-sm mb-8 leading-relaxed">
                  Председатель палаты молодежного парламента района Покровское-Стрешнево.
                </p>
                
                <a 
                  href="tel:89938120077"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-dark-900 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +7 (993) 812-00-77
                </a>
              </div>

              <div className="flex-1 space-y-6 border-t md:border-t-0 md:border-l border-dark-700 pt-8 md:pt-0 md:pl-12">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-dark-900 rounded border border-dark-700 text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-parchment mb-1">Место проведения</h4>
                    <p className="text-sm font-light text-parchment-muted mb-2">
                      Аллея большого круга соор 1
                    </p>
                    <a href="https://yandex.ru/maps/-/CTS2jJiG" target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:text-gold-light transition-colors underline underline-offset-4">
                      Нажмите, чтобы перейти на Яндекс Карты
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-dark-900 rounded border border-dark-700 text-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-parchment mb-1">Время работы</h4>
                    <p className="text-sm font-light text-parchment-muted">
                      Открытие выставки в 11:00<br/>
                      <span className="text-dark-400">Первый показ</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-800 py-8 text-center text-dark-400 text-sm font-light">
        <p>© {new Date().getFullYear()} Линия Времени. Выставка истории России.</p>
      </footer>

      {/* Lightbox for Gallery */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
             {selectedMedia.type === 'video' ? (
               <video 
                 src={selectedMedia.src} 
                 className="max-w-full max-h-[90vh] shadow-2xl border border-dark-700"
                 controls
                 autoPlay
               />
             ) : (
               <img 
                 src={selectedMedia.src} 
                 alt="Увеличенное фото"
                 className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-dark-700"
               />
             )}
             <p className="absolute -bottom-8 text-gold text-sm font-light tracking-wide text-center w-full">
               Нажмите в любом месте, чтобы закрыть
             </p>
          </div>
        </div>
      )}

    </div>
  );
}
