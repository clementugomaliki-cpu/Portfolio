import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
    const navStyles = "text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 w-full bg-[#F8FAFC]/95 backdrop-blur-sm border-b border-slate-200/70 ">
      <nav className="px-6 py-5 flex items-center justify-between ">
         <div>
          <a href="#home" className="text-xl font-bold tracking-tight">
            CLEMENT<span className="text-slate-300 font-light ">/DEV</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={navStyles}>Home</a>
          <a href="#about" className={navStyles}>About</a>
          <a href="#skills" className={navStyles}>Skills</a>
          <a href="#projects" className={navStyles}>Projects</a>
          <a href="#contact" className={navStyles}>Contact</a>
        </div>
        <button className="md:hidden text-2xl" aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <LuX size={24}/> : <LuMenu size={24}/>}
        </button>
      </nav>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden">
            <div className="flex flex-col gap-5 px-6 py-6">     
                <a href="#home" className={navStyles} onClick={()=>setIsMenuOpen(false)}>Home</a>
                <a href="#about" className={navStyles} onClick={()=>setIsMenuOpen(false)}>About</a>
                <a href="#skills" className={navStyles} onClick={()=>setIsMenuOpen(false)}>Skills</a>
                <a href="#projects" className={navStyles} onClick={()=>setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className={navStyles} onClick={()=>setIsMenuOpen(false)}>Contact</a>
            </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;