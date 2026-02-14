"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, clipReveal, lineReveal } from '@/lib/animationVariants';
import Image from 'next/image';

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div className="bg-background overflow-hidden">
            {/* Architectural Hero */}
            <section className="relative h-screen flex items-center justify-center bg-secondary overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
                        alt="Minimalist Architecture"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] text-accent">
                            <span className="w-12 h-px bg-accent/30" />
                            Our Genesis
                            <span className="w-12 h-px bg-accent/30" />
                        </motion.div>

                        <motion.h1
                            variants={lineReveal}
                            className="text-5xl sm:text-7xl md:text-[10vw] lg:text-[12vw] font-black uppercase tracking-tighter leading-[0.85] text-white"
                        >
                            The Form <br />
                            <span className="text-outline-white text-transparent">of Style</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-lg mx-auto text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed px-4"
                        >
                            ModernCart was born at the intersection of architectural discipline and avant-garde fashion. We don't just design garments; we build wearable structures.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Vertical Scroll Indicator */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-white hidden sm:block"
                />
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-white border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div
                        variants={clipReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] bg-secondary overflow-hidden order-2 lg:order-1"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
                            alt="Fashion Construction"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8 md:space-y-12 order-1 lg:order-2"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <motion.span variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                                Design Philosophy
                            </motion.span>
                            <motion.h2
                                variants={lineReveal}
                                className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-primary"
                            >
                                Architectural <br /> Resonance
                            </motion.h2>
                        </div>

                        <motion.div variants={fadeUp} className="space-y-6 md:space-y-8">
                            <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed text-muted-foreground">
                                Every piece in our collection is a study in form, proportion, and texture. We draw inspiration from the brutalist movement and contemporary minimalist structures to create silhouettes that command attention through restraint.
                            </p>
                            <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed text-muted-foreground">
                                Our process is artisanal, our vision is future-forward. We believe in the power of the singular object—pieces that stand the test of time both in quality and aesthetic relevance.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 sm:gap-8 border-t border-border pt-8 md:pt-12">
                            <div>
                                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-primary">01.</h4>
                                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-accent mt-2 block">Impeccable Form</span>
                            </div>
                            <div>
                                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-primary">02.</h4>
                                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-accent mt-2 block">Avant-Garde Soul</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 md:py-40 px-4 md:px-8 bg-secondary text-primary relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 md:space-y-12"
                    >
                        <span className="text-4xl sm:text-6xl font-serif text-accent opacity-30 italic block">"</span>
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight italic px-4">
                            Style is a visual language that speaks of our inner architecture. We provide the blueprint for your identity.
                        </h3>
                        <div className="space-y-2">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-primary">ModernCart Studio</span>
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block">Paris / Tokyo / New York</span>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative BG Text - Hidden on small screens to prevent overflow */}
                <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black uppercase tracking-tighter text-primary/[0.01] whitespace-nowrap pointer-events-none select-none hidden lg:block">
                    MANIFESTO MANIFESTO MANIFESTO
                </span>
            </section>

            {/* Pillars Section */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-20 text-center space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">The ModernCart Pillars</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Defined by Detail</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                title: "Craftsmanship",
                                desc: "Centuries-old techniques meet modern fabrication. Each seam is a deliberate choice.",
                                img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                                title: "Materiality",
                                desc: "Sourcing only the most noble and technical textiles that serve both function and form.",
                                img: "https://images.unsplash.com/photo-1590736704728-f4730bb3c370?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                                title: "Sustainability",
                                desc: "Conscious creation. We believe in high-fashion that respects the ecological architecture of our planet.",
                                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop"
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={pillar.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group space-y-6 md:space-y-8 ${idx === 2 ? 'sm:col-span-2 lg:col-span-1 border-t sm:border-none pt-8 sm:pt-0' : ''}`}
                            >
                                <div className="relative aspect-square bg-secondary overflow-hidden">
                                    <Image
                                        src={pillar.title === "Materiality" ? "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" : pillar.img}
                                        alt={pillar.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-primary">{pillar.title}</h4>
                                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section with Strict Validation */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8 md:space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <motion.span variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Connect With Us</motion.span>
                            <motion.h2 variants={lineReveal} className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Start a Dialogue</motion.h2>
                        </div>

                        <ContactForm />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value) error = 'Name is required';
                else if (value.length < 3) error = 'Name must be at least 3 characters';
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) error = 'Email is required';
                else if (!emailRegex.test(value)) error = 'Please enter a valid email address';
                break;
            case 'subject':
                if (!value) error = 'Subject is required';
                else if (value.length < 5) error = 'Subject must be at least 5 characters';
                break;
            case 'message':
                if (!value) error = 'Message is required';
                else if (value.length < 20) error = 'Message must be at least 20 characters';
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Final validation check
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-accent p-8 md:p-12 text-center space-y-4 md:space-y-6"
            >
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-primary">Blueprint Received</h3>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">Our consultants will review your inquiry and respond within 24 architectural hours.</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-primary text-white text-[10px] font-black tracking-widest uppercase hover:bg-accent transition-all"
                >
                    Send Another
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-border'} px-4 md:px-6 py-3 md:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-accent transition-colors`}
                        placeholder="Yohji Yamamoto"
                    />
                    {errors.name && <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-border'} px-4 md:px-6 py-3 md:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-accent transition-colors`}
                        placeholder="studio@form.com"
                    />
                    {errors.email && <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.email}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-border'} px-4 md:px-6 py-3 md:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-accent transition-colors`}
                    placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-border'} px-4 md:px-6 py-3 md:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-accent transition-colors resize-none`}
                    placeholder="Describe your vision..."
                />
                {errors.message && <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting || Object.values(errors).some(e => e) || !formData.name || !formData.email || !formData.subject || !formData.message}
                className="w-full py-5 md:py-6 bg-primary text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden group"
            >
                {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
            </button>
        </form>
    );
}
