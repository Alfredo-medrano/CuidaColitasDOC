import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { CodeBlockComponent } from '../../../components/code-block/code-block.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, CodeBlockComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  // Return type display (to avoid template syntax errors with curly braces)
  protected returnTypeObject = '{ user, session, error }';

  // Supabase Client Initialization
  protected supabaseClientCode = `import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Inicialización del cliente Supabase
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,        // Persistencia en React Native
    autoRefreshToken: true,        // Renovación automática de tokens
    persistSession: true,          // Mantener sesión entre reinicios
    detectSessionInUrl: false,     // No detectar en URL (móvil)
  },
})`;

  // Authentication Examples
  protected signInExample = `const { data, error } = await supabase.auth.signInWithPassword({
  email: 'veterinario@clinica.com',
  password: 'password123'
})

if (error) {
  console.error('Error al iniciar sesión:', error.message)
} else {
  console.log('Usuario autenticado:', data.user)
}`;

  protected signUpExample = `const { data, error } = await supabase.auth.signUp({
  email: 'nuevo@cliente.com',
  password: 'securePass456',
  options: {
    data: {
      role: 'client',  // 'client', 'vet', o 'admin'
      nombre: 'Juan Pérez'
    }
  }
})`;

  protected signOutExample = `const { error } = await supabase.auth.signOut()

if (!error) {
  // Limpiar estado local y redirigir a login
  navigation.navigate('Login')
}`;

  protected resetPasswordExample = `const { error } = await supabase.auth.resetPasswordForEmail(
  'usuario@email.com',
  {
    redirectTo: 'cuidacolitas://reset-password'
  }
)

if (!error) {
  alert('Se ha enviado un enlace de recuperación a tu correo')
}`;

  // Hooks Examples
  protected useAuthExports = `{
  session,        // Objeto de sesión actual (null si no autenticado)
  user,           // Datos del usuario autenticado
  userRole,       // Rol del usuario: 'client', 'vet', 'admin'
  isLoading,      // Boolean indicando si está cargando
  login,          // Función para iniciar sesión
  register,       // Función para registrarse
  logout          // Función para cerrar sesión
}`;

  protected useAuthExample = `import { useAuth } from '../context/AuthContext'

function ProtectedScreen() {
  const { user, userRole, logout } = useAuth()
  
  // Proteger ruta basada en rol
  if (userRole !== 'vet') {
    return <Text>Acceso denegado</Text>
  }
  
  return (
    <View>
      <Text>Bienvenido Dr. {user.nombre}</Text>
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  )
}`;

  protected usePetsExample = `import { usePets } from '../hooks/usePets'

function MisMascotas() {
  const { user } = useAuth()
  const { pets, loading, addPet, deletePet } = usePets(user.id)
  
  const handleAddPet = async () => {
    const newPet = {
      nombre: 'Max',
      especie: 'Perro',
      raza: 'Golden Retriever',
      fecha_nac: '2020-01-15',
      peso: 25.5
    }
    await addPet(newPet)
  }
  
  if (loading) return <ActivityIndicator />
  
  return (
    <FlatList
      data={pets}
      renderItem={({ item }) => <PetCard pet={item} />}
    />
  )
}`;

  protected useAppointmentsExample = `import { useAppointments } from '../hooks/useAppointments'

function AgendaVet() {
  const { user, userRole } = useAuth()
  const { 
    appointments, 
    loading, 
    updateStatus 
  } = useAppointments()
  
  const handleConfirm = async (appointmentId) => {
    await updateStatus(appointmentId, 'confirmada')
    // Se notifica automáticamente al cliente
  }
  
  return (
    <View>
      {appointments.map(apt => (
        <AppointmentCard
          key={apt.id}
          appointment={apt}
          onConfirm={() => handleConfirm(apt.id)}
        />
      ))}
    </View>
  )
}`;

  protected useAdminDataReturn = `{
  stats: {
    totalUsers: 245,
    totalPets: 387,
    appointmentsThisMonth: 156,
    completedAppointments: 142
  },
  loading: false,
  error: null,
  refreshData: () => Promise<void>
}`;

  // Storage Examples
  protected uploadImageCode = `import * as FileSystem from 'expo-file-system'
import { decode } from 'base64-arraybuffer'

async function uploadImage(uri, path) {
  try {
    // 1. Leer archivo como base64
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64
    })
    
    // 2. Convertir a ArrayBuffer
    const arrayBuffer = decode(base64)
    
    // 3. Subir a Supabase Storage
    const { data, error } = await supabase.storage
      .from('medical_records')
      .upload(path, arrayBuffer, {
        contentType: 'image/jpeg',
        upsert: false
      })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error al subir imagen:', error)
    throw error
  }
}`;

  protected downloadImageCode = `async function downloadImage(path) {
  try {
    // Para imágenes públicas
    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(path)
    
    return data.publicUrl
    
    // Para documentos médicos (privados)
    const { data: signedUrl, error } = await supabase.storage
      .from('medical_records')
      .createSignedUrl(path, 3600) // Expira en 1 hora
    
    if (error) throw error
    return signedUrl.signedUrl
  } catch (error) {
    console.error('Error al obtener URL:', error)
    throw error
  }
}`;

  // Integration Examples
  protected botpressConfig = `import { WebView } from 'react-native-webview'

function BotpressScreen() {
  const botpressUrl = process.env.EXPO_PUBLIC_BOTPRESS_WEBCHAT_URL
  
  return (
    <WebView
      source={{ uri: botpressUrl }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  )
}

// El chatbot incluye:
// - Integración con Google Gemini AI
// - Base de conocimiento veterinario
// - Respuestas en lenguaje natural
// - Disponible 24/7`;

  protected registerNotificationsCode = `import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

async function registerForPushNotificationsAsync() {
  let token
  
  if (Device.isDevice) {
    const { status: existingStatus } = 
      await Notifications.getPermissionsAsync()
    
    let finalStatus = existingStatus
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    
    if (finalStatus !== 'granted') {
      alert('Se necesitan permisos para notificaciones')
      return
    }
    
    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log('Push token:', token)
  }
  
  return token
}`;

  protected sendNotificationCode = `async function sendPushNotification(expoPushToken, title, body) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: { someData: 'goes here' },
  }

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
}

// Ejemplo de uso:
await sendPushNotification(
  userToken,
  'Cita Confirmada ✅',
  'Su cita para mañana a las 10:00 AM ha sido confirmada'
)`;
}
