import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { CodeBlockComponent } from '../../../components/code-block/code-block.component';

@Component({
    selector: 'app-contributing',
    standalone: true,
    imports: [CommonModule, InfoCardComponent, CodeBlockComponent],
    templateUrl: './contributing.component.html',
    styleUrl: './contributing.component.css'
})
export class ContributingComponent {
    // Setup Commands
    protected cloneCommand = `git clone https://github.com/tu-usuario/cuidacolitasapp-ugb.git
cd cuidacolitasapp-ugb`;

    protected installCommand = `npm install`;

    protected envTemplate = `EXPO_PUBLIC_SUPABASE_URL=tu_url_de_supabase
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase`;

    protected startCommand = `npx expo start`;

    // Code Examples
    protected functionalComponentExample = `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function PetCard({ pet }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <View>
      <Text>{pet.name}</Text>
      <Button 
        title={liked ? 'Unlike' : 'Like'} 
        onPress={() => setLiked(!liked)} 
      />
    </View>
  );
}`;

    protected customHookExample = `// ❌ MAL - Lógica mezclada con UI
function MascotasScreen() {
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    supabase.from('mascotas').select('*').then(/* ... */);
  }, []);
  
  return <FlatList data={pets} /* ... */ />;
}

// ✅ BIEN - Lógica separada en hook
function MascotasScreen() {
  const { pets, loading } = usePets(); // Hook personalizado
  
  return <FlatList data={pets} /* ... */ />;
}`;

    protected asyncAwaitExample = `// ✅ BIEN - Usa async/await
async function fetchPets() {
  try {
    const { data, error } = await supabase
      .from('mascotas')
      .select('*');
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    return [];
  }
}

// ❌ MAL - Usa .then() chains
function fetchPets() {
  return supabase.from('mascotas').select('*')
    .then(response => response.data)
    .catch(error => console.error(error));
}`;

    protected styleSheetExample = `import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

function MyComponent() {
  return <View style={styles.container}>{/* ... */}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  }
});`;

    // Git Workflow Examples
    protected branchExample = `git checkout -b feature/nueva-pantalla-citas`;

    protected pushBranchCommand = `git push origin feature/tu-rama`;

    protected prTemplate = `## 📝 Descripción
Breve explicación de qué hace este PR.

## ✨ Cambios Realizados
- Agregada pantalla de historial médico
- Implementado hook \`useMedicalHistory\`
- Mejorado diseño de tarjetas de vacunas

## 🖼️ Capturas (Si aplica)
Adjunta screenshots o GIFs

## 🔗 Issues Relacionados
Closes #42
Resolves #35

## ✅ Checklist
- [x] El código compila sin errores
- [x] Probado en dispositivo real
- [x] Actualizada la documentación si es necesario
- [ ] Agregados tests (si aplica)`;

    // Database Migration Example
    protected migrationExample = `-- 20240315_add_specialty_to_vets.sql

-- Agregar columna de especialidad a la tabla perfiles
ALTER TABLE perfiles 
ADD COLUMN IF NOT EXISTS specialty TEXT;

-- Crear índice para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_perfiles_specialty 
ON perfiles(specialty) 
WHERE rol = 'vet';

-- Comentario para documentación
COMMENT ON COLUMN perfiles.specialty IS 'Especialidad del veterinario (Cirugía, Dermatología, etc.)';`;
}
