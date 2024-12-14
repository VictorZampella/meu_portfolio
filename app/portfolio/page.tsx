import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'App de Formas Geométricas',
      description: 'All the Forms é um aplicativo educacional e funcional que permite calcular as áreas de diversas formas geométricas.',
      image: '/formas.jpg',
      github: 'https://github.com/VictorZampella/Aplicativo_Formas-Geometricas.git'
    },
    {
      title: 'App Filmes Aleatórios',
      description: 'Este projeto é um aplicativo simples desenvolvido em Kotlin para Android, com o objetivo de sortear filmes aleatórios e exibir o gênero correspondente abaixo da imagem do filme sorteado',
      image: '/corra.jpeg',
      github: 'https://github.com/VictorZampella/Aplicativo_Escolha_Filme.git'
    },
    {
      title: 'App Bons Sonhos',
      description: 'Com sons suaves e reconfortantes, criados especialmente para acalmar e relaxar, o aplicativo é uma solução simples e carinhosa para noites tranquilas e momentos de paz.',
      image: '/soninho.jpeg',
      github: 'https://github.com/VictorZampella/App_Bons_Sonhos.git'
    }
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full" style={{ paddingTop: '177.78%' }}> {/* 16:9 aspect ratio */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 w-full"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Ver no GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
