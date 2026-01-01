import { SERVICES } from '@/constants'

export default function Services() {
    return (
        <div id="procedures">
            <section id="services" className="pb-32 pt-10 bg-background ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Surgical Excellence</h2>
                        <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">
                            Procedures & Surgical Services.
                        </h3>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            State-of-the-art neurosurgical interventions using microscopic and endoscopic technology for precision outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="group flex flex-col p-8 rounded-[2.5rem] bg-background border border-gray-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-inherit transition-all group-hover:rotate-6 group-hover:scale-110`}>
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 font-display leading-tight">{service.title}</h4>
                                <p className="text-muted-foreground text-[13px] leading-relaxed grow mb-8">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-[12px] text-muted-foreground uppercase tracking-wider">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500/50"></div>
                                            <span className="text-gray-500">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
