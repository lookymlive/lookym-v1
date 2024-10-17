├── app/
│   ├── (guest-route)/                    # Rutas accesibles sin autenticación como invitados 
│   │   └── layout.tsx                    # Diseño de rutas para invitados (como la página de inicio de sesión o registro) 
│   ├── (private-route)/                  # Rutas protegidas por autenticación y autorización para usuarios y tiendas (admins)
│   │   ├── admin/                        # Ruta de administración de usuarios y tiendas (admins)
│   │   │   └── upload/                   # Ruta de subir videos para tiendas/admins 
│   │   │       └── page.tsx              # Página de carga de videos 
│   │   ├── edit-profile/                 # Ruta para editar perfil de usuario y tiendas (admins) 
│   │   │   └── page.tsx                  # Página de edición de perfil de usuario y tiendas (admins)
│   │   ├── profile/                      # Ruta de perfil de usuario y tiendas (admins)
│   │   │   └── page.tsx                  # Página de perfil de usuario y tiendas (admins) 
│   │   └── layout.tsx                    # Layout para usuarios autenticados y administradores
│   ├── actions/                          # Acciones relacionadas con la autenticación y la base de datos de NextAuth
│   │   └── auth.ts                       # Acciones relacionadas con la autenticación
│   ├── api/                              # Rutas de API para NextAuth
│   │   └── auth/                         # Rutas de autenticación de NextAuthexit

│   │       └── [...nextauth].ts          # Configuración de NextAuth en Next.js 
├── components/                           # Componentes reutilizables
│   ├── AuthForm.tsx                      # Formulario de autenticación y registro de usuarios y tiendas (admins)
│   ├── AuthSubmitButton.tsx              # Botón de envío de formulario de autenticación y registro de usuarios y tiendas (admins)
│   ├── Navbar.tsx                        # Componente de barra de navegación (logo, links, etc.) de la aplicación 
│   ├── UpdatePasswordForm.tsx            # Formulario de actualización de contraseña de usuario 
│   ├── VerificationFormSubmit.tsx        # Formulario de envío de correo de verificación para usuarios y tiendas (admins) 
│   ├── VerificationLink.tsx              # Link de verificación para usuarios y tiendas (admins) 
│   ├── VerificationStatus.tsx            # Verificación de correo para usuarios y tiendas (admins)
│   ├── VerificationSuccess.tsx           # Verificación de correo para usuarios y tiendas (admins)
├── lib/                                  # Utilidades generales como conexión a DB, almacenamiento, etc.
│   ├── cloud.ts                          # Configuración de Cloudinary API para subida de archivos a Cloudinary de videos para tiendas/admins
│   └── db.ts                             # Conexión a la base de datos de MongoDB (Mongoose) 
├── models/                               # Modelos de la base de datos (usualmente en MongoDB) 
│   ├── passwordResetToken.ts             # Token de restablecimiento de contraseña de usuario
│   ├── user.ts                           # Modelos de usuarios y tiendas (admins)
│   └── verificationToken.ts              # Token de verificación para usuarios y tiendas (admins)
└── utils/                                # Utilidades reutilizables como helpers, validaciones, etc.
│   ├── fileHandler.ts                    # Manejo de archivos y subida de archivos a Cloudinary
│   ├── mail.ts                           
│   └── verificationSchema.ts             
├── verify/                               # Página de verificación de correo para usuarios y tiendas (admins)
│   ├── page.tsx                          
│   ├── providers.tsx                     
│   ├── layout.tsx                        
├── public/                                # Mantiene los recursos públicos como favicon 
│   ├── favicon.ico                        
├── styles/                                # Mantener las hojas de estilo
│   └── globals.css                        
├── .env                                   # Variables de entorno para configuración
├── .eslintrc.json                         # Configuración de ESLint
├── .gitignore                             # Archivos ignorados por Git
├── auth.ts                                # Archivo de configuración de NextAuth
├── next-env.d.ts                          # Archivo de configuración de Next.js
├── next.config.mjs                        # Configuración principal de Next.js
├── package-lock.json                      # Archivo de bloqueo de paquetes
├── package.json                           # Archivo de descripción del proyecto 
├── postcss.config.mjs                     # Configuración de PostCSS
├── tailwind.config.ts                     # Configuración de Tailwind CSS
├── tsconfig.json                          # Configuración de TypeScript
└── README.md                              # Documentación del proyecto 