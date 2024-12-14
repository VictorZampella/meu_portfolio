import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
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
        <div className="lg:w-1/2 flex flex-col items-center gap-8">
          {/* Imagem Centralizada */}
          <div className="relative flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <Image
                src="/foto_perfil.png"
                alt="Victor Zampella sorrindo usando uma camisa polo azul"
                width={512}
                height={512}
                className="rounded-full border-4 border-blue-600"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
