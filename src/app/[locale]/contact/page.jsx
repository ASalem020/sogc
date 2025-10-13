"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import SocialMedia from "../../_Components/social-media/social-media";
import { useTranslations, useLocale } from 'next-intl';
import FadeInAnimation from "../../../components/animations/FadeInAnimation";
import StaggerAnimation from "../../../components/animations/StaggerAnimation";


export const dynamic = 'force-dynamic';

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const validateField = (name, value) => {
    let error = "";
    if (value.trim() !== "") {
      if (name === "name" && value.trim().length < 5)
        error = t('form.nameError');
      if (name === "email" && !/\S+@\S+\.\S+/.test(value))
        error = t('form.emailError');
      if (name === "subject" && value.trim().length < 3)
        error = t('form.subjectError');
      if (name === "message" && value.trim().length < 10)
        error = t('form.messageError');
    }
    setErrors((p) => ({ ...p, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    validateField(name, value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const allValid =
      Object.values(errors).every((e) => e === "") &&
      Object.values(formData).every((v) => v.trim() !== "");
    if (!allValid) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  useEffect(() => {
    if (showSuccess) {
      const t = setTimeout(() => router.push(`/${locale}`), 3000);
      return () => clearTimeout(t);
    }
  }, [showSuccess, router, locale]);

  const subjectSuggestions = [
    t('subjects.inquiry'),
    t('subjects.complaint'),
    t('subjects.suggestion'),
    t('subjects.support')
  ];

  const isRTL = locale === 'ar';

  return (
    <section id="contact" className={`px-3 ${isRTL ? 'text-end' : 'text-start'} md:px-10 lg:px-20  py-3 md:py-16 font-[Cairo]`}>
      <div className="container mx-auto">
      <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
        <header className="relative flex flex-col items-center mb-12">
          <h1 className={`relative md:text-4xl text-[1.7rem] font-bold px-10
                    before:content-[" "] before:absolute before:top-5 md:before:w-20 before:w-10 before:h-1 before:bg-black
                    after:content-[" "] after:absolute after:top-5 md:after:w-20 after:w-10 after:h-1 after:bg-black
                     before:-left-2  after:-right-2 text-center
                     md:before:-left-15  md:after:-right-15
                     
                    `}>
            {t('title')}
          </h1>
          <p className="text-lg !text-center text-gray-500">
            {t('subtitle')}
          </p>
        </header>
      </FadeInAnimation>

      <StaggerAnimation 
        staggerDelay={0.2} 
        direction="up" 
        delay={0.4}
        duration={0.8}
        className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-10"
      >
        {/* --- FORM --- */}
        <div className="w-full  bg-white border border-black/40 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] relative overflow-hidden transition hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] active:translate-y-[-4px] active:shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          {showSuccess && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10 text-center text-black animate-fadeIn rounded-2xl">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-semibold mb-2">
                {t('form.success')}
              </h3>
              <p className="text-sm text-gray-500">
                {t('form.successRedirect')}
              </p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6 ">
            <div className="grid md:grid-cols-2 gap-5">
              {/* name */}
              <div>
                <label className="block text-black font-semibold mb-1">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/40 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* email */}
              <div>
                <label className="block text-black font-semibold mb-1">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* subject */}
            <div>
              <label className="block text-black font-semibold mb-1">
                {t('form.subject')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-black/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {subjectSuggestions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() =>
                      setFormData((p) => ({ ...p, subject: s }))
                    }
                    className={`px-3 py-1 rounded-full text-sm font-semibold border transition ${
                      formData.subject === s
                        ? "bg-white text-black border-black"
                        : "border-black/40 text-black hover:bg-black/10 active:bg-black/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* message */}
            <div>
              <label className="block text-black font-semibold mb-1">
                {t('form.message')}
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-black/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 mt-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-black/90 active:bg-black/80 transition flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                <>
                  {t('form.submit')} <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>

        {/* --- INFO --- */}
        <div className="w-full h-full hidden md:block relative bg-[url('/jpg1.jpg')] bg-cover bg-center rounded-2xl overflow-hidden border border-black/40 shadow-[0_0_30px_rgba(0,0,0,0.15)] transition hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] active:translate-y-[-4px] active:shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-gray-100">
            <div>
              <h2 className={`text-3xl font-bold text-black mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('infoTitle')}
              </h2>
              <p className={`${isRTL ? 'text-right' : 'text-left'} text-gray-600 mb-8 leading-relaxed`}>
                {t('infoSubtitle')}
              </p>
              <div className="space-y-4">
                <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} gap-3 bg-white/10 border border-black/30 rounded-xl p-3 hover:bg-white/20 active:bg-white/20 transition`}>
                  <h4 className="text-sm md:text-2xl text-black">info@sogc-construction.com</h4>
                  <i className="fa-solid fa-envelope text-black"></i>
                </div>
                <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} gap-3 bg-white/10 border border-black/30 rounded-xl p-3 hover:bg-white/20 active:bg-white/20 transition`}>
                  <h4 className="text-sm text-black">+20 1092332047</h4>
                  <i className="fa-solid fa-phone text-black"></i>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <SocialMedia />
            </div>
          </div>
        </div>
      </StaggerAnimation>

      </div>
    </section>
  );
}
