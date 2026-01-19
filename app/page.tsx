import Image from "next/image";

const achievements = [
  {
    id: 1,
    text: "The Ministry sets a target of training 10,000 youths in digital skills. We passed this goal and reached 14,509 young Nigerians.",
  },
  {
    id: 2,
    text: "The Ministry planned to support 80,000 youths in mentorship, internship, apprenticeship, and career development. We went beyond that and reached 97,212 beneficiaries.",
  },
  {
    id: 3,
    text: "In crime reduction and peace-building, the Ministry targets 2,500 youths. But we achieved more than that; we trained 5,023 — more than double the target.",
  },
  {
    id: 4,
    text: "The Nigerian Youth Academy (NIYA) has recorded over 250,000 youths actively engaged across its key components (NiYA Academy, NiYA Gigs, NiYA Jobs & Internship, and NiYA Community).",
  },
  {
    id: 5,
    text: "The Nigerian Youth HelpDesk, which we launched to give Nigerian youth a platform to connect with the government and receive immediate support, is also doing very well. So far, we have received a total of 5,745 cases, out of which 3,447 (representing 60%) have been resolved, while 1,551 (representing 27 %) are pending.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-[#1A4C38] w-full flex flex-col items-center justify-center pb-8 pt-4 px-4 shadow-lg">
        <div className="w-full max-w-4xl overflow-hidden bg-white ">
          <Image
            src="/minister-yd.png"
            alt="Minister of Youth Development - Ayodele's One Year of Excellence"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-green-900 sm:text-4xl mb-6">
            A Year of Transformative Leadership
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            He was appointed substantive Minister on the 23 October, 2024. The
            second quarter performance review of the Ministry by the Central
            Delivery Coordination Unit (CDCU) shows the progress and impacts of
            his leadership.
          </p>
        </section>

        {/* Achievements Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white p-6 rounded-2xl shadow-xs border border-slate-100 hover:shadow-xl transition-shadow duration-300 ${
                  index === achievements.length - 1
                    ? "md:col-span-2 md:w-3/4 md:mx-auto"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold text-lg border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    {item.id}
                  </div>
                  <div className="pt-1">
                    <p className="text-slate-800 text-base sm:text-lg leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Footer Note */}
        <section className="mt-20 text-center border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            Federal Ministry of Youth Development © {new Date().getFullYear()}
          </p>
        </section>
      </main>
    </div>
  );
}
