import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            BezHandlowca.pl
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-900">
              Funkcje
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-900">
              Cennik
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-900">
              Kontakt
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Logowanie</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Rozpocznij za darmo</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Skaluj sprzedaż{" "}
            <span className="text-blue-600">bez zatrudniania</span>{" "}
            handlowców
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Zaawansowana platforma B2B oferująca outsourcing sprzedaży w modelu SaaS. 
            Zwiększ przychody z profesjonalnym zespołem handlowym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/register">
                Rozpocznij za darmo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="#demo">
                Zobacz demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dlaczego BezHandlowca.pl?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompleksowe rozwiązanie dla firm, które chcą skalować sprzedaż 
              bez inwestowania w własny zespół handlowy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Profesjonalny zespół</h3>
              <p className="text-gray-600">
                Doświadczeni handlowcy z udokumentowanymi sukcesami w sprzedaży B2B
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precyzyjny targeting</h3>
              <p className="text-gray-600">
                Zaawansowane narzędzia do identyfikacji i kwalifikacji potencjalnych klientów
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mierzalne rezultaty</h3>
              <p className="text-gray-600">
                Transparentne raportowanie i analityka sprzedażowa w czasie rzeczywistym
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bezpieczeństwo</h3>
              <p className="text-gray-600">
                Pełna ochrona danych klientów zgodnie z RODO i najwyższymi standardami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gotowy na zwiększenie sprzedaży?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dołącz do setek firm, które już korzystają z naszych usług 
            i zwiększają swoje przychody o średnio 40%.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link href="/register">
              Rozpocznij współpracę
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">BezHandlowca.pl</div>
              <p className="text-gray-400">
                Outsourcing sprzedaży B2B w modelu SaaS
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features">Funkcje</Link></li>
                <li><Link href="#pricing">Cennik</Link></li>
                <li><Link href="#demo">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">O nas</Link></li>
                <li><Link href="/careers">Kariera</Link></li>
                <li><Link href="/contact">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Wsparcie</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help">Pomoc</Link></li>
                <li><Link href="/privacy">Prywatność</Link></li>
                <li><Link href="/terms">Regulamin</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BezHandlowca.pl. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
