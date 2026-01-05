import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Accedemos a la API Key. 
  // Nota: Si el error de 'process' persiste en tu editor, puedes ignorarlo ya que Nuxt 
  // lo reconocerá al ejecutar, o ejecutar: npm i --save-dev @types/node
  const apiKey = process.env.RESEND_API_KEY

  // Validación básica
  if (!body.email || !body.nombre) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan datos requeridos',
    })
  }

  // Enviar correo usando la API de Resend
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TorneoPro <onboarding@resend.dev>', // Resend te permite usar este dominio para pruebas
        to: ['choromosqui8@gmail.com'], // AQUÍ pones tu correo donde quieres recibir los avisos
        subject: `Nuevo interesado: ${body.nombre}`,
        html: `
          <h1>Nuevo lead desde la Landing</h1>
          <p><strong>Nombre:</strong> ${body.nombre}</p>
          <p><strong>Torneo:</strong> ${body.tipo}</p>
          <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
          <p><strong>Email:</strong> ${body.email}</p>
        `,
      }),
    })

    const data = await res.json()
    return { success: true, data }
  } catch (err: unknown) {
    // Corregimos el error 'error is of type unknown' validando el tipo
    const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
    return { success: false, error: errorMessage }
  }
})