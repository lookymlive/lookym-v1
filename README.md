LOOKYM-V1/
├── app/
│   ├── (guest-route)/           # Rutas públicas para usuarios no autenticados
│   │   ├── sign-in/            # Inicio de sesión
│   │   │   ├── page.tsx
│   │   ├── sign-up/            # Registro de usuario
│   │   │   ├── page.tsx
│   │   └── update-password/    # Actualización de contraseña
│   │       ├── page.tsx
│   │       └── layout.tsx
│   │
│   ├── (private-route)/        # Rutas protegidas para usuarios autenticados
│   │   ├── edit-profile/       # Edición de perfil
│   │   │   ├── page.tsx
│   │   └── profile/            # Visualización de perfil
│   │       ├── page.tsx
│   │       └── layout.tsx
│   │
│   ├── actions/                # Acciones y lógica de negocio
│   │   └── auth.ts            # Lógica de autenticación
│   │
│   ├── api/auth/              # API endpoints para autenticación
│   │   └── route.ts           # Rutas de la API
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── AuthForm.tsx
│   │   ├── AuthSubmitButton.tsx
│   │   ├── Navbar.tsx
│   │   ├── UpdatePasswordForm.tsx
│   │   ├── VerificationFormSubmit.tsx
│   │   ├── VerificationStatus.tsx
│   │   └── VerificationSuccess.tsx
│   │
│   ├── lib/                   # Utilidades y bibliotecas
│   │   ├── cloud.ts           # Funcionalidades relacionadas con la nube
│   │   ├── db.ts              # Configuración y utilidades de base de datos
│   │   ├── models/            # Modelos de datos
│   │   │   ├── passwordResetToken.ts
│   │   │   ├── user.ts
│   │   │   └── verificationToken.ts
│   │   └── utils/             # Utilidades generales
│   │       ├── fileHandler.ts  # Manejo de archivos
│   │       ├── mail.ts        # Funcionalidades de correo
│   │       └── verificationSchema.ts  # Esquemas de verificación
│   │
│   ├── verify/                # Verificación de cuenta/email
│   │   └── page.tsx
│   │
├── public/                    # Archivos públicos estáticos
├── node_modules/              # Dependencias de Node.js
├── favicon.png                # Ícono del sitio
├── globals.css               # Estilos globales
├── layout.tsx                # Layout principal
├── page.tsx                  # Página principal
├── providers.tsx             # Proveedores de contexto
├── .env                      # Variables de entorno
├── .eslintrc.json           # Configuración de ESLint
├── .gitignore               # Archivos ignorados por Git
├── auth.ts                  # Configuración de autenticación
├── next-env.d.ts            # Tipos para Next.js
├── next.config.mjs          # Configuración de Next.js
├── package-lock.json        # Versiones exactas de dependencias
├── package.json             # Configuración del proyecto y dependencias
├── postcss.config.mjs       # Configuración de PostCSS
├── README.md                # Documentación del proyecto
└── tailwind.config.ts       # Configuración de Tailwind CSS