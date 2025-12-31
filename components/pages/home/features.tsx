import { FEATURES } from "@/constants";
import { Check } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Unmatched Precision</h2>
                    <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Why Choose Dr. Sumon Rana?</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Combining international microsurgical expertise with high-level academic faculty leadership at Dhaka Medical College.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="group bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex gap-8 flex-col md:flex-row items-start">
                            <div className="shrink-0 p-5 bg-slate-50 rounded-3xl group-hover:bg-blue-50 transition-colors">
                                {feature.icon}
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-slate-900 font-display">{feature.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4">
                                    {feature.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                                <Check className="w-3 h-3 stroke-3" />
                                            </div>
                                            <span className="text-[12px] font-semibold text-slate-600 tracking-widest">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
