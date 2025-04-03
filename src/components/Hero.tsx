
import React from 'react';
import { ArrowDown, FileDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-blue-600">
                Portfolio BTS SIO
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-navy-800">Nabil Bennadi</span>
                <span className="block text-blue-500 mt-1">Développeur Web</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Étudiant en BTS SIO option SLAM au lycée Gaspard Monge à Charleville Mézières.
              Passionné par le développement web et la cybersécurité.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Button className="gradient-bg" asChild>
                  <a href="/cv">
                    <FileDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    Voir mon CV
                  </a>
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700" asChild>
                  <a href="#projects">
                    <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    Découvrir mes projets
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Abstract shapes */}
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-navy-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              
              {/* Profile card */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex flex-col items-center text-center">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-navy-600 p-1">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-5xl font-bold text-blue-600">NB</span>
                    </div>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-navy-800">Nabil Bennadi</h2>
                  <p className="text-blue-600 font-medium">Développeur Web / Cybersécurité</p>
                  
                  <div className="mt-6 border-t border-gray-200 pt-4 w-full">
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="icon" className="rounded-full border-blue-300">
                        <Mail size={18} className="text-blue-500" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-blue-300">
                        <Github size={18} className="text-blue-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
