# BezHandlowca.pl - Platforma Outsourcingu Sprzedaży B2B

Zaawansowana platforma B2B oferująca outsourcing sprzedaży w modelu SaaS, która umożliwia firmom skalowanie sprzedaży bez zatrudniania własnych handlowców.

## 🚀 Funkcjonalności

### Dla Klientów
- **Dashboard analityczny** - Przegląd kluczowych wskaźników sprzedażowych
- **Zarządzanie leadami** - Pełna transparentność procesu sprzedażowego
- **Komunikacja z zespołem** - Dwukierunkowa wymiana wiadomości
- **Dokumenty i umowy** - Przeglądanie i akceptacja ofert online
- **Raportowanie** - Szczegółowe raporty efektywności

### Dla Handlowców
- **System CRM** - Kompletne zarządzanie leadami i pipeline'em
- **Harmonogram zadań** - Organizacja spotkań i follow-up'ów
- **Komunikacja z klientami** - Wbudowany system czatu
- **Analityka wydajności** - Śledzenie konwersji i prowizji
- **Notatki prywatne** - Wewnętrzne komentarze zespołu

### Dla SuperAdminów
- **Zarządzanie użytkownikami** - Administracja kontami i rolami
- **Konfiguracja organizacji** - Ustawienia multi-tenant
- **Przypisywanie handlowców** - Optymalizacja alokacji zasobów
- **Globalne statystyki** - Monitoring całej platformy
- **Integracje zewnętrzne** - Konfiguracja API i automatyzacji

## 🛠 Stos Technologiczny

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + API)
- **Autentykacja**: Supabase Auth z obsługą 2FA
- **UI Components**: Shadcn/ui + Radix UI
- **Walidacja**: Zod + React Hook Form
- **Hosting**: Vercel
- **Database**: PostgreSQL z Row Level Security (RLS)

## 🏗 Architektura Multi-Tenant

Aplikacja wykorzystuje architekturę multi-tenant z pełną izolacją danych:

- **Row Level Security (RLS)** - Bezpieczeństwo na poziomie bazy danych
- **Kontekst organizacyjny** - Automatyczne filtrowanie danych
- **Skalowalna architektura** - Obsługa tysięcy klientów
- **Audit logging** - Pełne śledzenie działań użytkowników

## 🚀 Szybki Start

### Wymagania
- Node.js 18+
- npm lub yarn
- Konto Supabase

### Instalacja

1. **Klonowanie repozytorium**
```bash
git clone https://github.com/your-username/bezhandlowca.git
cd bezhandlowca
```

2. **Instalacja zależności**
```bash
npm install
```

3. **Konfiguracja środowiska**
```bash
cp .env.example .env.local
```

Wypełnij zmienne środowiskowe:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_direct_database_url
```

4. **Uruchomienie serwera deweloperskiego**
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`

## 📊 Schema Bazy Danych

### Główne tabele:
- `tenants` - Organizacje klientów
- `users` - Wszyscy użytkownicy systemu (SuperAdmin, Klienci, Handlowcy)
- `leads` - Potencjalni klienci
- `activities` - Aktywności handlowe (rozmowy, spotkania, zadania)
- `communications` - Historia komunikacji

### Row Level Security (RLS)
Każda tabela zawierająca dane multi-tenantowe posiada polityki RLS zapewniające:
- Izolację danych między organizacjami
- Kontrolę dostępu na podstawie ról użytkowników
- Automatyczne filtrowanie na poziomie bazy danych

## 🔐 Bezpieczeństwo

- **Autentykacja wieloczynnikowa (2FA)**
- **Row Level Security (RLS)**
- **Szyfrowanie danych w tranzycie i spoczynku**
- **Zgodność z RODO**
- **Audit logging wszystkich operacji**
- **Rate limiting API**

## 📱 Responsywność

Aplikacja jest w pełni responsywna i zoptymalizowana dla:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🧪 Testowanie

Testy jednostkowe uruchomisz komendą:

```bash
# Testy jednostkowe
npm run test

# Testy integracyjne
npm run test:integration

# Testy E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Zalecane)
```bash
npm run build
vercel --prod
```

### Docker
```bash
docker build -t bezhandlowca .
docker run -p 3000:3000 bezhandlowca
```

## 🗺 Roadmap

### Faza 1: MVP (Aktualna)
- ✅ Podstawowa infrastruktura
- ✅ Autentykacja i autoryzacja
- ✅ Core funkcjonalności CRM
- ✅ Strona marketingowa
- ✅ Deployment

### Faza 2: Zaawansowane funkcjonalności
- 🔄 Zaawansowany moduł komunikacji
- 🔄 Automatyzacje workflow
- 🔄 Integracje zewnętrzne (Google Calendar, Slack)
- 🔄 Szczegółowe dashboardy analityczne
- 🔄 Generowanie raportów PDF

### Faza 3: AI i Marketplace
- 📋 AI scoring leadów
- 📋 Automatyczne sugestie działań
- 📋 AI-asystent dla handlowców
- 📋 Marketplace dodatkowych usług
- 📋 Predykcyjna analityka sprzedażowa

## 🤝 Wkład w Projekt

1. Fork repozytorium
2. Utwórz branch dla nowej funkcjonalności (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt jest licencjonowany na licencji MIT - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 📞 Kontakt

- **Email**: kontakt@bezhandlowca.pl
- **Website**: https://bezhandlowca.pl
- **LinkedIn**: [BezHandlowca.pl](https://linkedin.com/company/bezhandlowca)

## 🙏 Podziękowania

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Hosting platform
