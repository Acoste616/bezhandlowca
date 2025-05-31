# Konfiguracja Środowiska - BezHandlowca.pl

## Zmienne Środowiskowe

Utwórz plik `.env.local` w głównym katalogu projektu z następującymi zmiennymi:

### Wymagane - Supabase
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Wymagane - Środowisko
```env
NODE_ENV=development
```

### Opcjonalne - Baza Danych
```env
DATABASE_URL=your_direct_database_url
```

### Opcjonalne - Autentykacja
```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Opcjonalne - Integracje Zewnętrzne
```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Opcjonalne - Email
```env
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
```

### Opcjonalne - Przechowywanie Plików
```env
SUPABASE_STORAGE_BUCKET=your_storage_bucket
```

## Konfiguracja Supabase

### 1. Utworzenie Projektu
1. Przejdź do [Supabase Dashboard](https://supabase.com/dashboard)
2. Kliknij "New Project"
3. Wybierz organizację i nazwij projekt
4. Wybierz region (zalecane: Europe West)
5. Ustaw hasło bazy danych

### 2. Pobranie Kluczy API
1. W Dashboard przejdź do Settings > API
2. Skopiuj `Project URL` do `NEXT_PUBLIC_SUPABASE_URL`
3. Skopiuj `anon public` key do `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Konfiguracja Bazy Danych
Wykonaj następujące SQL w SQL Editor:

```sql
-- Włączenie Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Utworzenie tabeli tenants
CREATE TABLE public.tenants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    domain TEXT UNIQUE,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

-- Utworzenie tabeli users
CREATE TABLE public.users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('super_admin', 'client', 'sales_rep')),
    tenant_id UUID REFERENCES public.tenants(id),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

-- Utworzenie tabeli leads
CREATE TABLE public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id),
    assigned_sales_rep_id UUID REFERENCES public.users(id),
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'closed_won', 'closed_lost')),
    value DECIMAL(10,2),
    source TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Utworzenie tabeli activities
CREATE TABLE public.activities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.users(id),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id),
    type TEXT NOT NULL CHECK (type IN ('call', 'email', 'meeting', 'note', 'task')),
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT false,
    due_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Utworzenie tabeli communications
CREATE TABLE public.communications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES public.users(id),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id),
    message TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Włączenie RLS dla wszystkich tabel
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communications ENABLE ROW LEVEL SECURITY;

-- Funkcja do pobierania aktualnego tenant_id
CREATE OR REPLACE FUNCTION get_current_tenant_id()
RETURNS UUID AS $$
BEGIN
    RETURN COALESCE(
        current_setting('app.current_tenant_id', true)::UUID,
        (SELECT tenant_id FROM public.users WHERE id = auth.uid())
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Polityki RLS dla tabeli users
CREATE POLICY "Users can view own tenant data" ON public.users
    FOR SELECT USING (
        tenant_id = get_current_tenant_id() OR 
        role = 'super_admin'
    );

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (id = auth.uid());

-- Polityki RLS dla tabeli leads
CREATE POLICY "Tenant isolation for leads" ON public.leads
    FOR ALL USING (tenant_id = get_current_tenant_id());

-- Polityki RLS dla tabeli activities
CREATE POLICY "Tenant isolation for activities" ON public.activities
    FOR ALL USING (tenant_id = get_current_tenant_id());

-- Polityki RLS dla tabeli communications
CREATE POLICY "Tenant isolation for communications" ON public.communications
    FOR ALL USING (tenant_id = get_current_tenant_id());

-- Polityki RLS dla tabeli tenants (tylko super_admin)
CREATE POLICY "Super admin can manage tenants" ON public.tenants
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role = 'super_admin'
        )
    );
```

### 4. Konfiguracja Autentykacji
1. W Dashboard przejdź do Authentication > Settings
2. Skonfiguruj dozwolone domeny w "Site URL"
3. Włącz potrzebnych providerów (Email, Google, etc.)
4. Skonfiguruj email templates

### 5. Konfiguracja Storage (Opcjonalne)
1. W Dashboard przejdź do Storage
2. Utwórz bucket o nazwie "documents"
3. Skonfiguruj polityki dostępu

## Deployment na Vercel

### 1. Przygotowanie
```bash
npm run build
```

### 2. Deployment
```bash
npx vercel
```

### 3. Konfiguracja Zmiennych Środowiskowych
W Vercel Dashboard dodaj wszystkie zmienne środowiskowe z pliku `.env.local`

### 4. Konfiguracja Domeny
1. Dodaj custom domain w Vercel
2. Zaktualizuj "Site URL" w Supabase Authentication

## Troubleshooting

### Problem: "Invalid JWT"
- Sprawdź czy `NEXT_PUBLIC_SUPABASE_URL` i `NEXT_PUBLIC_SUPABASE_ANON_KEY` są poprawne
- Upewnij się, że nie ma spacji na początku/końcu kluczy

### Problem: "Row Level Security"
- Sprawdź czy polityki RLS są poprawnie skonfigurowane
- Upewnij się, że funkcja `get_current_tenant_id()` istnieje

### Problem: "CORS Error"
- Dodaj domenę do "Site URL" w Supabase Authentication
- Sprawdź konfigurację CORS w Supabase

### Problem: "Build Error"
- Sprawdź czy wszystkie wymagane zmienne środowiskowe są ustawione
- Uruchom `npm run build` lokalnie aby zidentyfikować błędy 