import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { CodeBlockComponent } from '../../../components/code-block/code-block.component';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, CodeBlockComponent],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.css'
})
export class ArchitectureComponent {
  // Code examples as properties
  protected dataFlowExample = `// Flujo: Crear una Cita

// 1. UI Layer - Usuario llena formulario
const handleCreateAppointment = async (formData) => {
  // 2. Validación
  if (!validateAppointmentData(formData)) {
    showError('Datos inválidos');
    return;
  }

  // 3. Business Logic - Hook procesa datos
  const result = await createAppointment(formData);
  
  // 4. Data Layer - Supabase insert
  // const { data, error } = await supabase
  //   .from('appointments')
  //   .insert({...})
  
  // 5. UI Update - Mostrar resultado
  if (result.success) {
    navigate('/mis-citas');
  }
};`;

  protected supabaseSingletonExample = `// src/api/Supabase.js - Patrón Singleton
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Única instancia compartida
export const supabase = createClient(supabaseUrl, supabaseKey);`;

  protected authContextExample = `// src/context/AuthContext.js - Patrón Observer
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  // Notifica a todos los suscriptores cuando cambia
  const updateUser = (newUser) => {
    setUser(newUser);
    setRole(newUser?.role);
  };

  return (
    <AuthContext.Provider value={{ user, role, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};`;

  protected containerPresentationalExample = `// Container Component (lógica)
const MisCitasScreen = () => {
  const { appointments, loading } = useAppointments();
  
  return <AppointmentList data={appointments} loading={loading} />;
};

// Presentational Component (solo vista)
const AppointmentList = ({ data, loading }) => {
  if (loading) return <LoadingOverlay />;
  
  return data.map(apt => <AppointmentCard key={apt.id} {...apt} />);
};`;

  protected rbacExample = `// App.js - RBAC Implementation
function Navigation() {
  const { user, role } = useAuth();

  if (!user) return <AuthStack />;
  
  // Redirección basada en rol
  switch(role) {
    case 'admin':
      return <AdminNavigator />;
    case 'vet':
      return <VetNavigator />;
    default:
      return <ClientNavigator />;
  }
}`;

  protected rlsExample = `-- Row Level Security Policy Example
-- Solo permite a los clientes ver sus propias mascotas

CREATE POLICY "clients_see_own_pets" 
ON pets 
FOR SELECT 
USING (
  owner_id = auth.uid()
  OR 
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND users.role IN ('vet', 'admin')
  )
);`;
}
