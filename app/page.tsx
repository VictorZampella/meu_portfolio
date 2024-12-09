import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  const skills = [
    { name: 'Kotlin', percentage: 80 },
    { name: 'Android Studio', percentage: 75 },
    { name: 'Html/Javascript', percentage: 50 },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 flex flex-col lg:flex-row justify-between gap-12">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <AnimatedText />
          <Button asChild>
            <Link href="/contato" className="bg-red-600 hover:bg-purple-700 text-white rounded-full w-fit px-8 py-4 text-lg">
              Entre em contato
            </Link>
          </Button>
        </div>

        {/* Coluna Direita */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
          {/* Imagem Redonda e Menor */}
          <div className="relative flex justify-center mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              <Image
                src="/foto_perfil.png"
                alt="Victor Zampella sorrindo usando uma camisa polo azul"
                width={192}
                height={192}
                className="rounded-full border-4 border-blue-600"
              />
            </div>
          </div>

          {/* Seção de Habilidades */}
          <div className="w-full max-w-sm flex flex-col items-start">
            <h2 className="text-blue-600 text-xl font-bold mb-4">Habilidades</h2>
            <div className="space-y-4 w-full">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <span className="text-white text-sm w-32">{skill.name}</span>
                  <div className="flex-grow bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <span className="text-white text-sm w-10 text-right ml-2">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
