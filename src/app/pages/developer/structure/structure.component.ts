import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { CodeBlockComponent } from '../../../components/code-block/code-block.component';

@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, CodeBlockComponent],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css'
})
export class StructureComponent {
  // Code examples as properties to avoid template parsing issues
  protected appJsExample = `// Punto de entrada - Estructura típica
import AuthProvider from './src/context/AuthContext';
import Navigation from './src/navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}`;

  protected supabaseExample = `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);`;

  protected usePetsExample = `export const usePets = (userId) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    const { data, error } = await supabase
      .from('pets')
      .select('*')
      .eq('owner_id', userId);
    
    if (!error) setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, [userId]);

  return { pets, loading, refetch: fetchPets };
};`;

  protected colorsExample = `export const colors = {
  primary: '#013847',
    secondary: '#007bff',
    danger: '#dc3545',
    white: '#ffffff',
    text: '#333333',
    textLight: '#777777',
    background: '#f5f5f5',
    cardBackground: '#ffffff',
};`;

  protected navigationExample = `// App.js
function Navigation() {
  const { user, role } = useAuth();

  if (!user) return <AuthStack />;
  
  if (role === 'admin') return <AdminNavigator />;
  if (role === 'vet') return <VetStack />;
  return <ClientStack />;
}`;

  protected installCommands = `# Instalar dependencias
npm install

# Iniciar desarrollo
npm start

# Limpiar caché
npx expo start -c

# Build APK (production)
eas build --platform android --profile production

# Build APK (preview)
eas build --platform android --profile preview`;
}
