LOOKYM-V1/
├── app/
│   ├── (guest-route)/          # Rutas invitados y públicas para usuarios no autenticados
│   │   ├── sign-in/            # Inicio de sesión 
│   │   │   ├── page.tsx        # Página de inicio de sesión para usuarios invitados no autenticados
│   │   ├── sign-up/            # Registro de usuario
│   │   │   ├── page.tsx        # Página de registro de usuario para usuarios no autenticados
│   │   └── update-password/    # Actualización de contraseña
│   │       ├── page.tsx        # Página de actualización de contraseña para usuarios invitados no autenticados
│   │       └── layout.tsx      # Layout de actualización de contraseña para usuarios no autenticados
│   │
│   ├── (private-route)/        # Rutas protegidas solo para usuarios autenticados
│   │   ├── edit-profile/       # Edición de perfil de usuario 
│   │   │   ├── page.tsx          # Página de edición de perfil de usuario autenticados
│   │   └── profile/            # Visualización de perfil
│   │       ├── page.tsx        # Página de perfil de usuario autenticados
│   │       └── layout.tsx      # Layout de perfil de usuario autenticados
│   │
│   ├── actions/                # Acciones y lógica de negocio
│   │   └── auth.ts             # Lógica de autenticación
│   │
│   ├── api/auth/               # API endpoints para autenticación
│   │   └── route.ts            # Rutas de la API
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── AuthForm.tsx         # Formulario de autenticación y registro de usuario 
│   │   ├── AuthSubmitButton.tsx # Botón de envío para la autenticación 
│   │   ├── Navbar.tsx                  # Componente de barra de navegación 
│   │   ├── UpdatePasswordForm.tsx      # Formulario de actualización de contraseña
│   │   ├── VerificationFormSubmit.tsx   # Formulario de verificación de cuenta/email
│   │   ├── VerificationStatus.tsx       # Componente de verificación de cuenta/email
│   │   └── VerificationSuccess.tsx       # Componente de verificación exitosa de cuenta/email 
│   │
│   ├── lib/                   # Utilidades y bibliotecas 
│   │   ├── cloud.ts           # Funcionalidades relacionadas con la nube de archivos 
│   │   ├── db.ts              # Configuración y utilidades de base de datos 
│   │   ├── models/            # Modelos de datos de la base de datos 
│   │   │   ├── passwordResetToken.ts  # Token de restablecimiento de contraseña 
│   │   │   ├── user.ts                 # Perfil de usuario 
│   │   │   └── verificationToken.ts      # Token de verificación de cuenta/email 
│   │   └── utils/             # Utilidades generales 
│   │       ├── fileHandler.ts  # Manejo de archivos y directorios 
│   │       ├── mail.ts        # Funcionalidades de correo electrónico 
│   │       └── verificationSchema.ts  # Esquemas de verificación de cuenta/email
│   │
│   ├── verify/                # Verificación de cuenta/email y seguridad de la aplicación 
│   │   └── page.tsx           # Página de verificación de cuenta/email y seguridad de la aplicación
│   │
├── public/                    # Archivos públicos estáticos 
├── node_modules/              # Dependencias de Node.js 
├── favicon.png                # Ícono del sitio 
├── globals.css               # Estilos globales para la aplicación 
├── layout.tsx                # Layout principal de la aplicación 
├── page.tsx                  # Página principal de la aplicación 
├── providers.tsx             # Proveedores de contexto de la aplicación
├── .env                      # Variables de entorno 
├── .eslintrc.json           # Configuración de ESLint 
├── .gitignore               # Archivos ignorados por Git
├── auth.ts                  # Configuración de autenticación con NextAuth 
├── next-env.d.ts            # Tipos para Next.js en tiempo de ejecución 
├── next.config.mjs          # Configuración de Next.js en tiempo de ejecución
├── package-lock.json        # Versiones exactas de dependencias
├── package.json             # Configuración del proyecto y dependencias
├── postcss.config.mjs       # Configuración de PostCSS
├── README.md                # Documentación del proyecto y descripción de la aplicación 
└── tailwind.config.ts       # Configuración de Tailwind CSS 


![alt text](<Sign-Up.png>)