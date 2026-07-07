'use client'
import PagesLayout from "@/component/PagesLayout";
import MainButton from "@/component/button/MainButton";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      return;
    }

    // AMAN: Simpan referensi form ke variabel lokal sebelum masuk ke proses async
    const formTarget = e.currentTarget;

    setIsLoading(true);
    setStatus("idle");

    const formData = new FormData(formTarget); // Gunakan variabel lokal di sini
    const payload = {
      email: formData.get("email"),
      message: formData.get("message"),
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");

      // FIX: Gunakan variabel lokal yang sudah diamankan di atas
      formTarget.reset();

      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (error) {
      console.error("[FORM_SUBMISSION_ERROR]", error);
      setStatus("error");
      turnstileRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PagesLayout>
      <section className="w-full min-h-screen overflow-hidden">
        <div className="max-w-7xl w-full content-start grid grid-cols-1 md:grid-cols-2 mx-auto mt-[3rem] md:mt-[10rem] gap-10 px-5">

          <div>
            <h1 className="text-[4rem] lg:text-[6rem] leading-[1em] font-bold mb-5">
              Now, let's make it <br /><span className="text-cyan-500">Real.</span>
            </h1>
            <p>Have a project in mind or just want to <span className="text-cyan-500">collaborate?</span></p>
            <p>Let's talk about how we can turn ideas into clean, functional, and visually solid work.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-2 block">
                Email <span className="text-teal-500/50 text-sm">(Optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled={isLoading}
                placeholder="you@email.com"
                className="relative group overflow-hidden px-4 py-3 w-full bg-white/5 border border-teal-500/20 hover:border-teal-500 focus:border-teal-500 outline-none global-transition rounded-xl disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isLoading}
                placeholder="What's on your mind?"
                className="min-h-[200px] relative group overflow-hidden px-4 py-3 w-full bg-white/5 border border-teal-500/20 hover:border-teal-500 focus:border-teal-500 outline-none global-transition rounded-xl resize-y disabled:opacity-50"
              ></textarea>
            </div>

            {/* Cloudflare Turnstile Widget */}
            <div className="my-2">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
                options={{
                  theme: "dark", // Sesuai dengan desain dark-theme milikmu
                }}
              />
            </div>

            {status === "success" && (
              <div className="text-green-400 flex items-center gap-2 text-sm bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                <CheckCircle2 size={16} /> Message received. I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                Verification failed or network error. Please try again.
              </div>
            )}

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={isLoading || !turnstileToken} // Disable jika loading atau token belum siap
                className="disabled:cursor-not-allowed disabled:opacity-50 "
              >
                <div className="">
                  <MainButton
                    type="button"
                    noblank
                    text={isLoading ? "Sending..." : "Send"}
                    icon={isLoading ? Loader2 : Send}
                  />
                </div>
              </button>
            </div>
          </form>

        </div>
      </section>
    </PagesLayout>
  );
}