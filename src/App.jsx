import './App.css'

const sections = [
  {
    id: '1 - bolim',
    title:
      "O'zbekiston taraqqiyotining yangi davrida texnologiyalarni o'qitishni takomillashtirishning mohiyati va ahamiyati",
    phone: '+998913982397',
    email: 'gulasal_x@mail.ru',
  },
  {
    id: '2 - bolim',
    title:
      "Materialshunoslik va texnologik ta'limdagi nanostrukturalar nazariyasi, texnologiyasi",
    phone: '+998936431433',
    email: 'otajonov_s@mail.ru',
  },
  {
    id: '3 - bolim',
    title:
      "Texnologik ta'limda avtomatlashtirish va robototexnika o'qitishning kontseptual muammolari va echimlari",
    phone: '+998972871991',
    email: 'neo_gizmo1@mail.ru',
  },
  {
    id: '4 - bolim',
    title:
      "O'zbekiston taraqqiyotining yangi davrida texnologiyalarni o'qitishni takomillashtirishning mohiyati va ahamiyati",
    phone: '+998939741023',
    email: 'boqirov_j@mail.ru',
  },
  {
    id: '5 - bolim',
    title:
      "Texnologik fanni o'zgartirishda innovatsion pedagogik va raqamli texnologiyalardan foydalanish istiqbollari",
    phone: '+998972088068 / +998930418558',
    email: 'barchin.askarova@mail.ru',
  },
  {
    id: '6 - bolim',
    title:
      "Sun'iy intellekt yordamida noan'anaviy energiya manbalaridan foydalanadigan ob'ektlarni boshqarish samaradorligi",
    phone: '+998939710263',
    email: 'rova08@mail.ru',
  },
]

function App() {
  return (
    <div className="page">
      <div className="top-strip" />
      <div className="top-banner" />
      <header className="header">
        <div className="header-row">
          <div className="logo-circle">
            <span>FDU</span>
          </div>
          <div className="header-title">
            <p>
              V XALQARO ILMIY-AMALIY KONFERENSIYA “RAQAMLI TEXNOLOGIYALAR,
              KOMPYUTER VA AXBOROT TEXNOLOGIYALARI, INNOVATSION PEDAGOGIKA”
            </p>
          </div>
        </div>
        <div className="header-subtitle">PRIYOM MAQOLALAR DAVOM ETADI</div>
        <a className="cta-bar" href="/namuna.docx" download>
          SHABLON FAYL (Lecture Notes in Networks and Systems)
        </a>
      </header>

      <main className="content">
        <article className="sheet">
          <h2>AXBOROT XATI</h2>
          <p>
            O'zbekiston Respublikasi oliy ta'lim, fan va innovatsiyalar
            vazirligining 2026-yil 16-yanvardagi 11-son buyrug'iga muvofiq,
            O'zbekiston Respublikasi oliy ta'lim, fan va innovatsiyalar
            vazirligi, Farg'ona davlat universiteti, Litva Vilnyus universiteti,
            Rostov-na-Donu shahrining Janubiy Federal universiteti, Sulton Mulay
            sliman Beni Mellal universiteti (USMS) Marokash, Boku shahridagi
            Ozarbayjon texnika universiteti, Gretsiyaning Peloponnes
            universiteti, Abay nomidagi Qozog'iston milliy pedagogika
            universiteti, akademik M. M. Adisheva nomidagi Osh texnologi
            universiteti, Berdak nomidagi Qoraqalpoq davlat universiteti, AIP
            Conference Proceedings, Proceedings of SPIE - The International
            Society for Optical Engineering, Springer Proceedings in Physics,
            Lecture Notes in Networks and Systems, Electron Laboratory LLC
            qoshidagi "Rezonans yadro reaktsiyalar fizikasi" ilmiy-tadqiqot
            instituti, Electron Laboratory LLC, "All Sciences" xalqaro ilmiy
            jurnali, Milliy universitet qoshidagi "Yarimo'tkazgichlar va
            mikroelektronika fizikasi" ilmiy-tadqiqot instituti, Andijon Davlat
            universiteti, Namangan Davlat universiteti, "Foton" AJ BMX 2026 yil
            7-8 may kunlari konferentsiyani o'tkazmoqda.
          </p>
          <p>
            Konferensiyaning maqsadi texnologik ta'lim sohasidagi ilmiy va
            amaliy tadqiqotlarni birlashtirish, zamonaviy texnologiyalarni ta'lim
            jarayoniga integratsiya qilish imkoniyatlarini kengaytirish, yangi
            pedagogik yechimlarni ishlab chiqish va keng ko'lamli xalqaro ilmiy
            hamkorlik uchun mustahkam platforma yaratishdir.
          </p>
          <p>
            Ushbu tadbir texnologik ta'limning jahon tendentsiyalari munosabati
            bilan milliy ta'lim tizimini uyg'unlashtirishga, ta'lim jarayoniga
            ilg'or innovatsion ishlanmalarni joriy etishga, ilmiy taraqqiyot
            sohasidagi so'nggi yutuqlarni kengaytirish va taqdim etishga, jahon
            ilmiy-tadqiqot jamoalarining yaqin hamkorligini ta'minlashga,
            fanlararo integratsiyani mustahkamlashga va yosh tadqiqotchilar
            o'rtasida tajriba almashish platformasini shakllantirishga
            qaratilgan.
          </p>
          <p>
            2026-yil 25-aprelgacha konferensiya seksiyalari koordinatorlariga
            elektron pochta orqali o'zbek, rus yoki ingliz tillaridagi tezislar
            va ilmiy maqolalarni yuborishingizni so'raymiz. Taqdim etilgan
            maqolalar va tezislarning fayl nomida bo'lim raqami bo'lishi kerak.
          </p>

          <h3>Nashr qilish uchun dolzarb yo'nalishlar</h3>
          <div className="section-table">
            <div className="section-head">Bo'lim raqami</div>
            <div className="section-head">Bo'lim yo'nalishi</div>
            <div className="section-head">Pochta va koordinator</div>
            {sections.map((section) => (
              <div key={section.id} className="section-row">
                <div className="section-cell">{section.id}</div>
                <div className="section-cell">{section.title}</div>
                <div className="section-cell">
                  <div>{section.phone}</div>
                  <div>{section.email}</div>
                </div>
              </div>
            ))}
          </div>

          <h3>Konferensiya mohiyati</h3>
          <p>
            Konferentsiyaning mohiyati o'qitish texnikasini takomillashtirish
            bo'yicha ilmiy-uslubiy takliflarni faol ishlab chiqish,
            materialshunoslik va nanostrukturalar sohasidagi ilg'or
            tadqiqotlarni muhokama qilish, ularni o'quv va texnologik jarayonga
            to'liq moslashtirish, o'rganishni avtomatlashtirishdan kelib
            chiqadigan muammolarni tahlil qilish, robototexnika tamoyillaridan
            foydalanish, shuningdek, o'qitish usullarini taklif qilishdan
            iborat.
          </p>
          <p>
            Shuningdek, texnologik ta'limda zamonaviy
            axborot-kommunikatsiya texnologiyalarining rolini kuchaytirish,
            raqamli ta'lim tizimi imkoniyatlarini kengaytirish va
            axborot-pedagogik yondashuv bo'yicha ilmiy-amaliy tavsiyalar
            ishlab chiqiladi.
          </p>
          <p>
            Tadbirning muhim yo'nalishi noan'anaviy energiya manbalari bilan
            bog'liq ilmiy ishlanmalarni taqdim etish, ularning nazariyasi,
            amaliy qo'llanilishi va ushbu energiya manbalarini ta'lim tizimiga
            yo'naltirish bo'yicha to'liq o'quv dasturini birlashtirish
            mexanizmlarini aniqlashdan iborat.
          </p>
          <p>
            Olingan ma'lumotlar va erishilgan natijalar asosida Milliy dastur
            talablariga muvofiq Respublikamiz maktablari va universitetlarida
            texnologik ta'lim sifatini oshirish bo'yicha uslubiy tavsiyalar va
            takliflar ishlab chiqiladi.
          </p>

          <h3>Nashr va ishtirok</h3>
          <p>
            Konferentsiya materiallari to'plamda nashr etiladi va ishtirokchilar
            orasida elektron shaklda tarqatiladi. Tezislar va ilmiy maqolalar
            mualliflari taqdim etgan ma'lumotlar uchun javobgardir. Konferensiya
            ishida faol ishtirok etgan mualliflar maxsus ishtirokchi
            sertifikatini oladilar.
          </p>
          <p>
            Eng yaxshi deb topilgan tezislar va ilmiy maqolalar Scopus
            ma'lumotlar bazalariga kiritilgan AIP Conference Proceedings,
            Proceedings of SPIE - The International Society for Optical
            Engineering, Springer Proceedings in Physics, Lecture Notes in
            Networks and Systems kabi nashrlarda chop etilishi mumkin.
            Konferentsiya ma'muriyati mualliflar bilan keyingi nashr etish
            masalasi bo'yicha bog'lanadi.
          </p>
          <p>
            Shuningdek, qolgan maqolalar mualliflarning talablariga muvofiq
            "Rezonans yadro reaktsiyalari fizikasi" ilmiy-tadqiqot instituti
            qoshidagi "All Science" xalqaro ilmiy jurnalida chop etiladi.
          </p>
          <p>
            Tezislarni, ilmiy maqolalarni yuborish va nashr etish, konferentsiyada
            qatnashish mutlaqo bepul.
          </p>
          <p>
            Konferentsiyaning onlayn shakli 2026 yil 7-8 may kunlari soat 9:00 da
            Zoom platformasida bo'lib o'tadi. Zoom konferentsiyasiga havola
            ro'yxatdan o'tishda ko'rsatilgan elektron pochta manziliga yuboriladi.
          </p>

          <h3>1-ilova: Tezislarni rasmiylashtirish talablari</h3>
          <ul>
            <li>Format: doc/docx, hajmi 3 sahifadan oshmasin.</li>
            <li>Maydonlar: chap 3 sm, o'ng 1.5 sm, yuqori 2 sm, past 2 sm.</li>
            <li>Shrift: Times New Roman, 14, satrlar oraligi 1.5.</li>
            <li>Xat boshi: 1.25 sm, qo'shimcha oraliqsiz.</li>
            <li>Sarlavha: bosh harflar, markazga tekislash.</li>
            <li>Mualliflar: to'liq kursiv, yuqori indekslar bilan, markazda.</li>
            <li>Asosiy matn: eniga tekislash.</li>
            <li>Rasmlar: 150 dpi dan kam bo'lmasin, imzolar raqamlangan.</li>
            <li>Formulalar: Microsoft Equation yoki MathType, majburiy raqamlanadi.</li>
          </ul>

          <h3>Maqolalarni rasmiylashtirish talablari</h3>
          <ul>
            <li>Format: doc/docx, hajmi 30 sahifadan oshmasin.</li>
            <li>Maydonlar: chap 3 sm, o'ng 1.5 sm, yuqori 2 sm, past 2 sm.</li>
            <li>Shrift: Times New Roman, 12, satrlar oraligi 1.</li>
            <li>Xat boshi: 1.25 sm, qo'shimcha oraliqsiz.</li>
            <li>Sarlavha: bosh harflar, yarim qalin, markazga tekislash.</li>
            <li>Mualliflar: to'liq kursiv, yuqori indekslar bilan, markazda.</li>
            <li>Asosiy matn: eniga tekislash.</li>
            <li>Rasmlar: 150 dpi dan kam bo'lmasin, imzolar raqamlangan.</li>
            <li>Formulalar: Microsoft Equation yoki MathType, majburiy raqamlanadi.</li>
          </ul>
          <p className="note">
            Tezislar va ilmiy maqolalar oxirida mualliflarning aloqa
            ma'lumotlarini ko'rsatish, onlayn yoki offline konferentsiyada chiqish
            istagini bildirgan mualliflarni pastki chiziq bilan ta'kidlash
            so'raladi. Tezislar va maqolalar ilgari e'lon qilinmagan asl
            natijalarni o'z ichiga olishi kerak.
          </p>

          <h3>2-ilova: Tezislarga qo'shimcha talablar</h3>
          <ul>
            <li>Maqola matni doc formatida, Times New Roman, 14, satr 1.15.</li>
            <li>A4 format: yuqori 20 mm, chap 30 mm, past 20 mm, o'ng 15 mm.</li>
            <li>Tezis nomi qalin, bosh harflarda, markazga tekislash.</li>
            <li>Mualliflar F.I.O va tashkilot to'liq nomi markazda.</li>
            <li>Asosiy matn 1 sm xatboshi bilan yoziladi.</li>
          </ul>
          <p>
            Foydalanilgan adabiyotlar ro'yxati:
            <br />
            [1] F.I.O. Familiyasi. Maqolaning nomi. Jurnalning nomi. (yil),
            tartib raqami, 1-10-satrlar. DOI yoki jurnal saytidagi havola.
            <br />
            [1] F.I.O. Familiyasi. Kitob nomi. (Shahar, Nashriyot, Yil) -
            sahifalar soni.
          </p>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h4>Namuna fayl</h4>
            <p>
              Namuna faylini `public/namuna.docx` ichiga joylashtiring. Button
              bosilganda fayl yuklab olinadi.
            </p>
          </div>
        </div>
        <div className="footer-actions">
          <a className="download-button" href="/namuna.docx" download>
            Namuna faylni yuklab olish
          </a>
          <a className="scopus-button" href="https://www.scopus.com" target="_blank" rel="noreferrer">
            Lecture Notes in Networks and Systems (Scopus)
          </a>
        </div>
        <div className="footer-meta">
          <div className="footer-contacts">
            <div>Telefon: +998 90 000 00 00</div>
            <div>Manzil: Farg'ona, O'zbekiston</div>
            <div>Email: info@example.uz</div>
          </div>
          <a className="dev-link" href="https://t.me/CB010" target="_blank" rel="noreferrer">
            Web Site dasturchi: Ikromov Solijon
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
