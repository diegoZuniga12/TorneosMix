<template>
  <div class="min-h-screen font-sans text-slate-600 bg-slate-50 selection:bg-indigo-500 selection:text-white">
    
    <!-- Configuración SEO -->
    <Head>
      <Title>Gestor de Torneos Pro - Organiza sin Caos</Title>
      <Meta name="description" content="El sistema definitivo para ligas y torneos deportivos. Olvídate de Excel." />
    </Head>

    <!-- NAVBAR -->
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <!-- Icono Trophy SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-indigo-600">
            <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.04c-.655 0-1.272-.14-1.829-.387a5.253 5.253 0 01-.583.387H9.578a5.253 5.253 0 01-.583-.387 4.514 4.514 0 01-1.829.387h-.148c.036.574.136 1.134.296 1.673A6.726 6.726 0 009.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h10.67v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.726 6.726 0 001.99-3.027c.16-.54.26-1.1.297-1.674h-.147zM18.834 5.25c.57.092 1.133.208 1.686.347a5.266 5.266 0 01-2.863 3.214c.545-.974.857-2.098.857-3.294V5.25z" clip-rule="evenodd" />
          </svg>
          <span class="font-bold text-xl text-slate-900 tracking-tight">Torneo<span class="text-indigo-600">Pro</span></span>
        </div>
        <a href="#contacto" class="hidden md:flex text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
          Contactar Soporte
        </a>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <!-- Fondo decorativo -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-200/30 blur-[100px] rounded-full"></div>
      </div>

      <div class="max-w-5xl mx-auto px-6 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8 animate-fade-in-up shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Nuevo: Gestión de pagos automática
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
          Organiza tu torneo <br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">sin Excel ni caos</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
          La plataforma todo en uno para gestionar equipos, calendarios y resultados. 
          Diseñado específicamente para ligas amateurs de fútbol y básquet.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto" class="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:bg-indigo-700 transition-all hover:-translate-y-1 text-center flex items-center justify-center">
            Empezar ahora gratis
          </a>
          <a href="#beneficios" class="w-full sm:w-auto px-8 py-4 text-slate-600 bg-white border border-slate-200 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-center flex items-center justify-center">
            Ver características
          </a>
        </div>
      </div>
    </section>

    <!-- EL PROBLEMA -->
    <section class="py-24 bg-white border-y border-slate-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-6">
              ¿Tu liga depende de <span class="text-red-600 decoration-red-200 underline decoration-4">hojas sueltas?</span>
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Usar Excel y WhatsApp para organizar torneos provoca errores en las tablas, reclamos de los capitanes y una imagen poco profesional para tu organización.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-slate-700">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Resultados desactualizados
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Errores en cruces y horarios
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Pérdida de tiempo respondiendo chats
              </li>
            </ul>
          </div>
          
          <!-- Mockup Visual -->
          <div class="relative bg-slate-100 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-200 overflow-hidden group">
            <div class="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
             <div class="relative bg-white shadow-2xl rounded-xl p-6 border border-slate-200 w-3/4 transition-transform duration-700 group-hover:scale-105">
                <div class="h-4 w-1/3 bg-slate-200 rounded mb-4"></div>
                <div class="space-y-2">
                  <div class="h-2 w-full bg-slate-100 rounded"></div>
                  <div class="h-2 w-full bg-slate-100 rounded"></div>
                  <div class="h-2 w-2/3 bg-slate-100 rounded"></div>
                </div>
                <div class="mt-6 flex gap-2">
                  <div class="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div class="text-xs text-indigo-900 font-medium pt-1">Resultados sincronizados</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS (Grid) -->
    <section id="beneficios" class="py-24 px-6 bg-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-2">Solución Integral</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Todo lo que necesitas para profesionalizarte</h3>
          <p class="text-slate-500 text-lg">Deja que el sistema haga el trabajo pesado mientras tú te enfocas en el deporte.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group">
            <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <!-- Renderizado dinámico de SVG -->
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="feature.path"></svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">{{ feature.title }}</h4>
            <p class="text-slate-500 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTO / CTA FINAL -->
    <section id="contacto" class="py-24 px-6 relative overflow-hidden bg-slate-900">
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-600/20 blur-[100px] rounded-full"></div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Texto Izquierda -->
          <div class="text-white">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">Lleva tu torneo al siguiente nivel</h2>
            <p class="text-indigo-200 text-lg mb-8 leading-relaxed">
              Únete a más de 500 organizadores que ya digitalizaron sus ligas. 
              Completa el formulario y te enviaremos una demo personalizada.
            </p>
            
            <div class="flex items-center gap-4 text-sm font-medium text-indigo-300">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                <div class="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                <div class="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
              </div>
              <p>+500 organizadores confían en nosotros</p>
            </div>
          </div>

          <!-- Formulario Profesional -->
          <div class="bg-white rounded-3xl p-8 shadow-2xl lg:p-10 transition-all duration-300">
            
            <!-- Mensaje de éxito al enviar -->
            <div v-if="success" class="text-center py-10 animate-fade-in">
              <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
              <p class="text-slate-500 mb-6">Gracias por tu interés. Un asesor te contactará pronto.</p>
              <button @click="success = false" class="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                Enviar otra consulta
              </button>
            </div>

            <!-- Formulario de entrada -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-slate-900">Solicitar Información</h3>
                <p class="text-slate-500 text-sm mt-1">Sin compromiso. Respuesta en menos de 24hs.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nombre -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-700">Nombre Completo</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <input 
                      v-model="form.nombre" 
                      type="text"
                      required
                      placeholder="Ej. Martín López" 
                      class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
                
                <!-- Select Nativo -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-700">Tipo de Organización</label>
                  <div class="relative">
                    <select 
                      v-model="form.tipo" 
                      class="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none outline-none transition-all font-medium cursor-pointer"
                    >
                      <option value="" disabled selected>Selecciona una opción...</option>
                      <option v-for="t in tiposTorneo" :key="t" :value="t">{{ t }}</option>
                    </select>
                    <!-- Icono izquierda -->
                    <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                    </div>
                    <!-- Icono flecha derecha -->
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-slate-700">WhatsApp (con código)</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <input 
                    v-model="form.whatsapp" 
                    type="tel"
                    required
                    placeholder="+54 9 11 1234 5678" 
                    class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-slate-700">Correo Electrónico</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    placeholder="nombre@liga.com" 
                    class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <!-- Botón Alta Visibilidad -->
              <div class="pt-4">
                <button 
                  type="submit"
                  class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  :disabled="loading"
                >
                  <span v-if="!loading">Recibir Demo Gratuita</span>
                  <span v-else>Enviando...</span>
                  <svg v-if="!loading" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </button>
              </div>
              
              <p class="text-xs text-center text-slate-400 mt-4">
                Tus datos están protegidos. No enviamos spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-indigo-600">
             <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.04c-.655 0-1.272-.14-1.829-.387a5.253 5.253 0 01-.583.387H9.578a5.253 5.253 0 01-.583-.387 4.514 4.514 0 01-1.829.387h-.148c.036.574.136 1.134.296 1.673A6.726 6.726 0 009.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h10.67v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.726 6.726 0 001.99-3.027c.16-.54.26-1.1.297-1.674h-.147zM18.834 5.25c.57.092 1.133.208 1.686.347a5.266 5.266 0 01-2.863 3.214c.545-.974.857-2.098.857-3.294V5.25z" clip-rule="evenodd" />
           </svg>
           <span class="font-bold text-slate-200">TorneoPro</span>
        </div>
        <div class="text-sm">
          &copy; {{ new Date().getFullYear() }} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const loading = ref(false)
const success = ref(false)

// Guardamos los SVGs directamente para no depender de librerías externas
const features = [
  { 
    title: "Registro Online", 
    desc: "Olvídate de perseguir planillas. Los equipos se inscriben solos desde un link único.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
  },
  { 
    title: "Calendario Automático", 
    desc: "Genera el fixture de toda la temporada en segundos, sin conflictos de horarios.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />'
  },
  { 
    title: "Tabla en Tiempo Real", 
    desc: "Al cargar un resultado, la tabla de posiciones se actualiza instantáneamente.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />'
  },
  { 
    title: "Perfil Público", 
    desc: "Una web profesional para tu torneo donde jugadores y fans ven las estadísticas.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />'
  },
  { 
    title: "Gestión de Pagos", 
    desc: "Lleva el control de quién pagó la inscripción y quién debe, todo en un solo lugar.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
  },
  { 
    title: "Notificaciones", 
    desc: "Avisos automáticos a los capitanes sobre sus próximos partidos.",
    path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />'
  }
]

const tiposTorneo = ['Liga de Fútbol Amateur', 'Torneo de Básquet', 'Complejo Deportivo', 'Organizador de Eventos']

const form = ref({
  nombre: '',
  tipo: '',
  whatsapp: '',
  email: ''
})

const handleSubmit = async () => {
  loading.value = true
  try {
    // Aquí es donde ocurre la magia: llamamos a TU propia API
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    // Si hubo error en la petición HTTP o error lógico en nuestra API
    if (error.value) throw new Error(error.value.message || 'Error en el servidor')
    if (data.value && !data.value.success) throw new Error(data.value.error || 'Error desconocido')

    // Si todo salió bien:
    success.value = true
    form.value = { nombre: '', tipo: '', whatsapp: '', email: '' }
  } catch (err) {
    alert("Error al enviar: " + err.message)
  } finally {
    loading.value = false
  }
}
</script>

<style>
/* Animación suave para el scroll */
html {
  scroll-behavior: smooth;
}
/* Patrón de fondo para la sección de 'Problema' */
.bg-grid-slate-200 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>