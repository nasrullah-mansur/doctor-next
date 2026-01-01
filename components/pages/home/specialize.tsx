import { Dot } from "lucide-react"

const SpecializeData = [
    {
        id: 1,
        title: "Brain",
        list: [
            "Headache / Migraine",
            "Head injury / Trauma",
            "Brain tumors & Abscess",
            "Neuro-tuberculosis",
            "Hydrocephalus",
            "Seizure-related cases",
        ],
    },
    {
        id: 2,
        title: "Spine",
        list: [
            "Low back pain, Slip disc (PLID)",
            "Neck pain, Cervical spondylosis",
            "Nerve compression / Weakness",
            "Spinal fracture / Trauma",
            "Spinal tumors & Deformity",
            "Spinal infection / abscess",
        ]
    },
    {
        id: 3,
        title: "Pediatric",
        list: [
            "Encephalocele",
            "Myelomeningocele",
            "Congenital brain/spine tumors",
            "Skull abnormalities",
        ]
    },
    {
        id: 4,
        title: "Nerve & Eye",
        list: [
            "Optic nerve tumors",
            "Visual loss evaluation",
            "Carpal Tunnel Syndrome (CTS)",
            "Peripheral nerve compression",
        ]
    }
]


export default function Specialize() {
    return (
        <section id="conditions" className="pb-24 pt-0 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[11px]">Specialized Expertise</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold gradient-text font-display tracking-tight">Conditions We Treat</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {SpecializeData.map(item => (
                        <div key={item.id} className="p-8 group rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-violet-500/30 transition-all duration-500">
                            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest group-hover:text-blue-500 duration-300">{item.title}</h4>
                            <ul className="space-y-4 text-slate-600 text-sm leading-tight">
                                {item.list.map((t, i) => (
                                    <li key={i} className="flex"><Dot className="-mt-0.5" /> {t}</li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
