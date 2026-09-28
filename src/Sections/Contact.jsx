import { useState, useEffect } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const EMPTY_FORM = { name: "", email: "", message: "" };

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formInput, setFormInput] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); 
  const [feedback, setFeedback] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setStatus("idle");
    setFeedback("");
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const inputValue = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMessage = async () => {
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("https://portfolio-na6b.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInput),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.message || "Message sending failed.");
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Your message has been sent.");
      setFormInput(EMPTY_FORM);
      setTimeout(closeModal, 4000);
    } catch (err) {
      setStatus("error");
      setFeedback(err.message || "Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-18">
      <div className=" mx-auto px-6 flex flex-col gap-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-slate-500 mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's build something together.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Have a project, opportunity, or idea you'd like to discuss? I'd be
            happy to hear from you.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Contact information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>

            <div className="mt-6 space-y-5 flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">EMAIL</p>
                <a
                  href="mailto:clementugomaliki@gmail.com"
                  className="mt-2 inline-block text-slate-900 hover:underline"
                >
                  clementugomaliki@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">LOCATION</p>
                <p className="mt-2 text-slate-700">Port Harcourt, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Let's connect */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              I'm open to opportunities, collaborations, and interesting
              projects. Feel free to reach out through email or connect with me
              on my professional platforms.
            </p>

            <div className="mt-6 flex flex-wrap justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/clementugomaliki-cpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  <LuGithub /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/clement-ugochukwu-maliki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  <LuLinkedin /> LinkedIn
                </a>
              </div>

              <button
                type="button"
                className="px-5 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer font-semibold transition-colors"
                onClick={() => setModalOpen(true)}
              >
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <form
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="bg-white rounded-lg w-full max-w-lg p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              if (status !== "sending") sendMessage();
            }}
          >
            <div className="flex items-center justify-between">
              <h3 id="contact-title" className="text-lg font-semibold">
                Send a Message
              </h3>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="text-2xl leading-none text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label htmlFor="name" className="text-sm font-medium">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formInput.name}
                  onChange={inputValue}
                  className="mt-1 block border border-slate-500 placeholder:text-sm px-3 py-2 rounded-lg focus:outline-slate-500 w-full"
                />
              </label>

              <label htmlFor="email" className="text-sm font-medium">
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. youremail@email.com"
                  required
                  value={formInput.email}
                  onChange={inputValue}
                  className="mt-1 block border border-slate-500 placeholder:text-sm px-3 py-2 rounded-lg focus:outline-slate-500 w-full"
                />
              </label>
            </div>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
              value={formInput.message}
              onChange={inputValue}
              className="resize-none block border border-slate-500 placeholder:text-sm px-3 py-2 rounded-lg focus:outline-slate-500 w-full h-28 md:h-32"
            />

            <p
              role="status"
              className={`text-center min-h-6 text-sm ${
                status === "error" ? "text-red-600" : "text-green-700"
              }`}
            >
              {feedback}
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-slate-950 px-5 py-3 text-white hover:bg-slate-800 cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;