import { useEffect, useState } from 'react'
import './Portfolio.css'
import photo from "../../public/photo.png"

function Portfolio() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const skills = {
    langages: ['Python', 'JavaScript', 'PHP', 'HTML/CSS', 'Kotlin'],
    backend: ['Django', 'Flask', 'Laravel', 'Symfony', 'Node.js'],
    frontend: ['React', 'Next.js', 'Vite.js', 'Vue.js'],
    mobile: ['React Native', 'Expo', 'Kotlin'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'Docker', 'CI/CD', 'TailwindCSS', 'PyTorch', 'TensorFlow']
  }

  const experiences = [
    {
      title: 'Développeur Full-Stack & Assistant CTO',
      company: 'Acan Group',
      location: 'Dakar, Sénégal',
      period: 'Octobre 2024 - Novembre 2025',
      achievements: [
        'Développement de multiples applications web et mobiles',
        'Création d\'applications TV pour Smart TV (CRTV, VTV)',
        'Développement de l\'application mobile Ouest TV',
        'Optimisation du processus de déploiement continu (CI/CD)'
      ]
    },
    {
      title: 'Chef de Projet',
      company: 'Projet Tontine',
      location: 'Application Mobile',
      period: 'Octobre 2025 - Présent',
      achievements: [
        'Direction du développement d\'une application mobile de gestion de tontines',
        'Coordination des équipes de développement, design et test'
      ]
    }
    ,
     {
      title: 'Stage au Ministère de l’Administration territoriale et de la Décentralisation du Mali',
      company: 'Ministère',
      location: 'Bamako , Mali',
      period: 'Octobre 2022 - Janvier 2023',
      achievements: [
        'Direction du développement d\'une application mobile de gestion de tontines',
        'Coordination des équipes de développement, design et test'
      ]
    }
  ]

  const certificats = [
    {
      title: 'Certification Python',
      company: 'Udemy',
      location: 'En ligne',
      period: '2024',
      achievements: [
        'Formation complète couvrant les bases et concepts avancés du langage Python',
        'Programmation orientée objet (POO)',
        'Manipulation de fichiers et gestion des exceptions',
        'Introduction aux bibliothèques populaires (NumPy, Pandas)',
        'Développement de scripts et automatisation de tâches'
      ]
    },
    {
      title: 'Certification Machine Deep Learning',
      company: 'Udemy',
      location: 'En ligne',
      period: '2024',
      achievements: [
        'Formation pratique axée sur le Machine Learning',
        'Conception de modèles avec PyTorch et TensorFlow',
        'Structuration de projets d\'IA',
        'Traitement et analyse de données',
        'Déploiement de modèles de Machine Learning'
      ]
    }
  ]

  const education = [
    {
      title: 'Master en Génie Logiciel et Administration Réseau',
      school: 'École Supérieure de Technologie et de Management (ESTM)',
      location: 'Dakar, Sénégal',
      period: '2022 - 2023',
      description: 'Spécialisation en développement logiciel et gestion de réseaux'
    },
    {
      title: 'Licence en Sciences Mathématiques et Informatique',
      school: 'Université Cadi Ayyad de Marrakech (Semlalia)',
      location: 'Marrakech, Maroc',
      period: '2018 - 2021',
      description: 'Formation en mathématiques appliquées et informatique'
    },
    {
      title: 'Baccalauréat Scientifique',
      school: 'Lycée',
      location: 'Mali',
      period: '2018',
      description: 'Baccalauréat série Sciences'
    }
  ]

  const projects = [
    {
      title: 'E-Sora',
      description: 'Application web complète de gestion de tous les comptes',
      tech: ['Django', 'React', 'Vite.js' ,'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
     {
      title: 'E-Sora-hopital',
      description: 'Application web complète de gestion d\'hôpitaux',
      tech: ['Django', 'React', 'Vite.js', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    },
     {
      title: 'E-Sora-mobile',
      description: 'Application moblie complète pour les patients ',
      tech: ['Django', 'React Native','Expo GO', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    },
    
    {
      title: 'e-sora-pharmacie',
      description: 'Système complet de gestion pharmaceutique',
      tech: ['Django', 'React', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop'
    },
    {
      title: 'Gestion de Ferme Avicole',
      description: 'Analyse intelligente avec Machine Learning pour prédire les maladies',
      tech: ['Python', 'PyTorch', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop'
    },
    {
      title: 'Détection de Conformité Motocycliste',
      description: 'Application de surveillance routière avec IA',
      tech: ['YOLO', 'PyTorch', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&h=600&fit=crop'
    },
    {
      title: 'Bibliothèque Numérique',
      description: 'Plateforme de gestion documentaire',
      tech: ['Laravel', 'React', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop'
    }
  ]

  return (
    <div className="bg-dark-custom">
     
        <div className="h-40 relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop" alt="code background" className='w-full h-full object-cover'/>
         </div>
      
       <div className='container mx-auto flex flex-col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <section id="accueil" className="w-full mx-auto flex items-start justify-center" >
      
         <div className="w-full md:h-20  text-center animate-on-scroll flex md:flex-row flex-col  gap-4 ">
          
              <div className="w-42 h-42  mx-auto rounded-full flex items-center justify-center text-6xl animate-float shadow-primary rounded-full -translate-y-1/2">
              <img src={photo} alt="Mamadou Kouma" className='w-full h-full object-cover rounded-full'/>
              </div>
              
                <div className='flex flex-col flex-row items-center justify-center gap-2 mt-10'>
                    <h2 className="text-[18px] md:text-3xl font-bold mb-6 text-gradient">
                      MAMADOU KOUMA
                    </h2>
                    <div className='h-6 w-px border-1 border-white relative overflow-hidden'/>
                    <p className="text-[14px] md:text-2xl mb-4" style={{ color: '#c4b5fd' }}>
                      Développeur Full-Stack 
                    </p>
              </div>
           
          
      
       </div>
        </section>
     
       <section className="w-full mx-auto" style={{ paddingTop: '2rem',  }}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 animate-on-scroll'>

           <div className='col-span-2 w-full h-full bg-black/40 opacity-50 rounded-[10px]' style={{ padding: '2rem' }}>
            <h2 className='text-xl font-bold text-white' style={{ paddingBottom: '1rem'}}>Bienvenue dans mon Portfolio</h2>
            
            {/* Section Resume avec accordéon */}
            <div className='mb-6'>
              <div 
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className='flex items-center justify-between w-full text-left text-lg font-bold text-white hover:text-primary-custom transition-colors duration-300 cursor-pointer'
                style={{ paddingBottom: '1rem'}}
              >
                <span>Resume / CV</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isResumeOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {isResumeOpen && (
                <div className='mt-4 p-4 bg-dark-card rounded-lg border border-primary-custom' style={{ padding: '1rem'}}> 
                  <p className='text-gray-300 mb-4' style={{ paddingBottom: '1rem'}}>
                    Développeur Full-Stack passionné avec 3-5 ans d'expérience en développement web et mobile. 
                    Spécialisé dans React, Django, Laravel et les technologies IA.
                  </p>
                  <a 
                    href="/portfolio/CV_Mamadou_Kouma.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-block px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300'
                    style={{ background: 'linear-gradient(to right, #8b5cf6, #d946ef)',padding:"1rem" }}
                  >
                    📄 Télécharger mon CV
                  </a>
                </div>
              )}
            </div>

            {/* Section Education avec accordéon */}
            <div className='mb-6'>
              <div 
                className='flex items-center justify-between w-full text-left text-lg font-bold text-white  duration-300'
              >
                <span>🎓Education</span>
              </div>
                <div className='mt-4 space-y-4'>
                  {education.map((edu, idx) => (
                    <div 
                      key={idx}
                      className='p-4 rounded-lg  transition-all duration-300'
                      style={{ paddingBottom: '1rem'}}
                    >
                      <li className='text-lg font-bold text-primary-custom mb-2'>
                       <p> {edu.title}</p>
                            <p className='text-gray-300 font-semibold'>{edu.school}</p>
                            <p className='text-gray-400 text-sm'>{edu.location}</p>
                            <p className='text-sm mt-1' style={{ color: '#c4b5fd' }}>{edu.period}</p>
                            <p className='text-gray-400 text-sm mt-2'>{edu.description}</p>
                       </li>
                    </div>
                  ))}
                </div>
             
            </div>
            
           </div>
           <div className='col-span-1 w-full h-full bg-green-200/50 flex flex-col rounded-[10px] p-6'  style={{ padding: '2rem'}}>
              <h2 className="text-2xl font-bold text-center mb-16 text-white animate-on-scroll opacity-0">
                Compétences Techniques
              </h2>
              <div className="flex flex-col gap-6 ">
               {Object.entries(skills).map(([category, items], idx) => (
                <div
                  key={category}
                  className="animate-on-scroll opacity-0 rounded-2xl  transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-white  capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-white rounded-full text-sm  transition-colors duration-300"
                      
                      >
                        {skill}
                      </span>
                    ))}
                 </div>
              </div>
            ))}
          </div>
           </div>
        </div>
      </section>
      {/* Skills Section */}


      {/* Experience Section */}
      <section id="expérience" className="w-full mx-auto" style={{  marginBottom: '1rem'}}>
        <h2 className="text-4xl md:text-5xl font-bold text-start mb-16 text-gradient animate-on-scroll opacity-0" style={{ marginTop: '2rem', marginBottom: '1rem'}}>
            Expérience Professionnelle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 bg-dark-card backdrop-blur-sm rounded-2xl p-8 border border-primary-custom hover:border-primary-custom hover:shadow-primary-lg transition-all duration-300"
                style={{ animationDelay: `${idx * 150}ms`,padding: '2rem' }}
                
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="md:text-xl text-[15px] font-bold text-primary-custom mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-[14px]" style={{ color: '#c4b5fd' }}>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-primary-custom mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
       
      </section>
      <section id="expérience" className="w-full mx-auto" style={{  marginBottom: '1rem'}}>
        <h2 className="text-4xl md:text-5xl font-bold text-start mb-16 text-gradient animate-on-scroll opacity-0" style={{ marginTop: '2rem', marginBottom: '1rem'}}>
            Certification
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
            {certificats.map((exp, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 bg-dark-card backdrop-blur-sm rounded-2xl p-8 border border-primary-custom hover:border-primary-custom hover:shadow-primary-lg transition-all duration-300"
                style={{ animationDelay: `${idx * 150}ms`,padding: '2rem' }}
                
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="md:text-xl text-[15px] font-bold text-primary-custom mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-[14px]" style={{ color: '#c4b5fd' }}>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-primary-custom mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
       
      </section>

      {/* Projects Section */}
      <section id="projets" className="w-full mx-auto flex items-start justify-center" style={{ marginTop: '1rem' }}>
        <div className=" mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-start mb-16 text-gradient animate-on-scroll opacity-0" style={{marginBottom:'1rem'}}>
            Projets Principaux
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 bg-dark-card backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-custom hover:border-primary-custom transition-all duration-300 hover:scale-105 group hover:shadow-primary-lg"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6" style={{padding:"1rem"}}>
                  <h3 className="text-xl font-bold text-primary-custom mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-badge rounded text-xs"
                        style={{ color: '#c4b5fd' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full mx-auto" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className=" text-start animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Contactez-moi
          </h2>
          <p className="text-gray-400 mb-12 text-lg"  style={{marginBottom:'1rem'}}>
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:mamadoukouma691@gmail.com"
              className="bg-dark-card backdrop-blur-sm rounded-2xl p-8 border border-primary-custom hover:border-primary-custom transition-all duration-300 hover:scale-105 hover:shadow-primary-lg"
              style={{padding:"1rem"}}
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-primary-custom mb-2">Email</h3>
              <p className="text-gray-400">mamadoukouma691@gmail.com</p>
            </a>
            <a
              href="tel:+221788749980"
              className="bg-dark-card backdrop-blur-sm rounded-2xl p-8 border border-primary-custom hover:border-primary-custom transition-all duration-300 hover:scale-105 hover:shadow-primary-lg"
              style={{padding:"1rem"}}
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-primary-custom mb-2">Téléphone</h3>
              <p className="text-gray-400">+221 78 874 99 80</p>
            </a>
          </div>

        </div>
      </section>
       </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary-custom">
        <div className="mx-auto text-center text-gray-400">
          <p>© 2026 Mamadou Kouma - Développeur Full-Stack</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
