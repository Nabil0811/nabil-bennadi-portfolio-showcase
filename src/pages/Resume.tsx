
import React from 'react';
import { ArrowLeft, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="page-container py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 text-navy-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-navy-800">Mon CV</h1>
            
            <Button className="gradient-bg">
              <Download className="mr-2 h-4 w-4" />
              Télécharger en PDF
            </Button>
          </div>
        </div>
      </div>
      
      <div className="page-container py-8">
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Colonne de gauche */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-navy-600 p-1 mx-auto">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-600">NB</span>
                    </div>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-navy-800">Nabil Bennadi</h2>
                  <p className="text-blue-600 font-medium">Étudiant en BTS SIO</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Contact</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={16} className="text-blue-600 mr-3" />
                      <span>07 82 90 64 13</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="text-blue-600 mr-3" />
                      <span>nabil.bennadi@outlook.fr</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-blue-600 mr-3" />
                      <span>140 rue de l'Égalité, Revin, 08500</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Compétences</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    <li>Langage Python</li>
                    <li>Langage HTML/CSS</li>
                    <li>Langage SQL</li>
                    <li>Langage JavaScript (+ framework VueJS)</li>
                    <li>Conception de site web</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Langues</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Anglais</span>
                        <span className="text-blue-600">B1</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-1.5 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Italien</span>
                        <span className="text-blue-600">B2</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-1.5 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Loisirs</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Basketball (au poste d'arrière)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Lecture (roman, BD, manga)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colonne de droite */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">Profil</h3>
                  <Separator className="mb-4" />
                  <p className="text-gray-700">
                    Passionné par le développement informatique, je souhaite concevoir des applications performantes et ergonomiques en alliant technique et créativité. Actuellement en BTS SIO option SLAM, je possède de bonnes compétences en résolution de problèmes, une capacité d'apprentissage rapide et un bon esprit d'équipe.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">Expérience</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">Janvier - Février 2025 (5 semaines)</Badge>
                        <h4 className="text-lg font-medium text-navy-700">Développeur Web (Stage) - Centre social Fumay</h4>
                        <p className="text-blue-600">Conception et développement d'un site vitrine pour le centre social</p>
                      </div>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Technologies :</span> PHP, HTML, JavaScript, Bootstrap
                      </p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">Juin - Juillet 2024 (5 semaines)</Badge>
                        <h4 className="text-lg font-medium text-navy-700">Développeur Web (Stage) - Électro Sphère, Revin</h4>
                        <p className="text-blue-600">Développement d'une application web de gestion et suivi des machines</p>
                      </div>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Technologies :</span> PHP, MySQL, JavaScript, HTML/CSS
                      </p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-blue-200">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">Juillet 2023 - 2024</Badge>
                        <h4 className="text-lg font-medium text-navy-700">Agent administratif - DDFIP des Ardennes</h4>
                        <p className="text-blue-600">Gestion de dossiers administratifs et traitement de documents comptables</p>
                      </div>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Outils :</span> Logiciels bureautiques (Excel, Word) et outils internes
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">Formation</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">2023 - 2025</Badge>
                        <h4 className="text-lg font-medium text-navy-700">BTS SIO option SLAM, 2ème année</h4>
                        <p className="text-blue-600">Lycée Gaspard Monge, Charleville Mézières</p>
                      </div>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">2023</Badge>
                        <h4 className="text-lg font-medium text-navy-700">Baccalauréat général</h4>
                      </div>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-blue-200">
                      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="mb-1">
                        <Badge className="mb-2">2025 (En cours)</Badge>
                        <h4 className="text-lg font-medium text-navy-700">Formation EPSI 3ème année: développeur IA</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">Qualités</h3>
                  <Separator className="mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-navy-700 mb-2">Esprit d'analyse et de résolution de problème</h5>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-navy-700 mb-2">Autonomie et capacité d'apprentissage rapide</h5>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-navy-700 mb-2">Rigueur et sens du détail</h5>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-navy-700 mb-2">Créativité et goût pour l'optimisation</h5>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-navy-700 mb-2">Esprit d'équipe et adaptabilité</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <img 
            src="/lovable-uploads/9ccaf5fd-d0bd-4f81-bd62-d390250ea619.png" 
            alt="Tableau de synthèse des réalisations professionnelles" 
            className="max-w-full h-auto mx-auto border rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
