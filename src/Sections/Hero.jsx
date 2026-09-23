import Button from "../Components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl lg:mx-w-none">

            <p className="text-sm font-semibold tracking-widest text-slate-500 mb-5">
                WEB DEVELOPER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Hi, I'm Clement.
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                I build modern, responsive web applications
                that are functional, intuitive and user-friendly.
            </p>

            <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4">
                <Button href="#projects">View My Projects</Button>
                <Button href="#contact" variant="secondary">Contact Me</Button>
            </div>
           </div>   


            {/* Right grid */}
              <div className="hidden lg:flex justify-center">
                <div className="w-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <p className="text-slate-400">
                      const developer = {"{"}
                    </p>

                    <p className="pl-4 text-slate-700">
                      name: <span className="text-slate-500">"Clement"</span>,
                    </p>

                    <p className="pl-4 text-slate-700">
                      role: <span className="text-slate-500">"Web Developer"</span>,
                    </p>

                    <p className="pl-4 text-slate-700">
                      skills: <span className="text-slate-500">["React", "JavaScript"]</span>
                    </p>

                    <p className="text-slate-400">
                      {"}"}
                    </p>
                  </div>

                </div>
              </div>
            {/* End of right grid */}
        </div>


      </div>
    </section>
  );
}

export default Hero;