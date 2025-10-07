"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SocialMedia from "../_Components/social-media/social-media";

export default function Contact() {
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
        error = "يجب أن يكون الاسم 5 أحرف على الأقل";
      if (name === "email" && !/\S+@\S+\.\S+/.test(value))
        error = "البريد الإلكتروني غير صالح";
      if (name === "subject" && value.trim().length < 3)
        error = "الموضوع قصير جداً";
      if (name === "message" && value.trim().length < 10)
        error = "يجب أن تحتوي الرسالة على 10 أحرف على الأقل";
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
      const t = setTimeout(() => router.push("/"), 3000);
      return () => clearTimeout(t);
    }
  }, [showSuccess]);

  const subjectSuggestions = ["استفسار", "شكوى", "مقترح", "دعم فني"];

  return (
    <section className=" bg-gray-200  px-3 text-end md:px-10 lg:px-20  py-16 font-[Cairo]">
      <div className="container mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500 mb-3">
          مركز التواصل
        </h1>
        <p className="text-lg text-gray-500">
          يرجى ملء النموذج أدناه وسنعود إليك في أقرب وقت ممكن.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        {/* --- FORM --- */}
        <div className="w-full md:w-1/2 bg-neutral-900 border border-yellow-400/40 p-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,0,0.1)] relative overflow-hidden transition hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(255,255,0,0.25)]">
          {showSuccess && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm z-10 text-center text-yellow-400 animate-fadeIn rounded-2xl">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-semibold mb-2">
                تم إرسال رسالتك بنجاح
              </h3>
              <p className="text-sm text-gray-200">
                سيتم تحويلك للصفحة الرئيسية خلال لحظات...
              </p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6 ">
            <div className="grid md:grid-cols-2 gap-5">
              {/* name */}
              <div>
                <label className="block text-yellow-400 font-semibold mb-1">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-yellow-500/40 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* email */}
              <div>
                <label className="block text-yellow-400 font-semibold mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-yellow-500/40 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* subject */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-1">
                الموضوع
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-yellow-500/40 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
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
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/20"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* message */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-1">
                الرسالة
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-yellow-500/40 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 mt-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 active:bg-yellow-500 transition flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span className="animate-spin border-2 border-black border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                <>
                  إرسال <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>

        {/* --- INFO --- */}
        <div className="w-full md:w-1/2 relative bg-[url('/logo2.webp')] bg-cover bg-center rounded-2xl overflow-hidden border border-yellow-400/40 shadow-[0_0_30px_rgba(255,255,0,0.15)] transition hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(255,255,0,0.25)]">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-gray-100">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-right">
                تواصل معنا
              </h2>
              <p className="text-right text-gray-300 mb-8 leading-relaxed">
                نحن هنا للإجابة على جميع استفساراتك — سواء كانت استفسارًا
                عامًا، مقترحًا، أو دعمًا فنيًا.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-3 bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-3 hover:bg-yellow-500/20 transition">
                  <h4 className="text-sm md:text-2xl text-yellow-300">info@sogc.com</h4>
                  <i className="fa-solid fa-envelope text-yellow-400"></i>
                </div>
                <div className="flex items-center justify-end gap-3 bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-3 hover:bg-yellow-500/20 transition">
                  <h4 className="text-sm text-yellow-300">+20 1092332047</h4>
                  <i className="fa-solid fa-phone text-yellow-400"></i>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}