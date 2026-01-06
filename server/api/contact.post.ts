import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Variables de entorno necesarias (Solo Resend)
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('ERROR: No se encontró la API Key de Resend')
    return { success: false, error: 'Configuración de servidor incompleta' }
  }

  // Validación básica de datos
  if (!body.email || !body.nombre) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan datos obligatorios',
    })
  }

  try {
    // ENVIAR CORREO POR RESEND
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TorneoMix <onboarding@resend.dev>',
        to: 'choromosqui8@gmail.com',
        subject: `Nuevo Lead en TorneoMix: ${body.nombre}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #4f46e5;">¡Nuevo interesado en TorneoMix!</h2>
            <p><strong>Nombre:</strong> ${body.nombre}</p>
            <p><strong>Tipo de Torneo:</strong> ${body.tipo}</p>
            <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
            <p><strong>Email del cliente:</strong> ${body.email}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">Enviado desde la plataforma TorneoMix.</p>
          </div>
        `,
      }),
    })

    const data = await emailRes.json()
    
    if (!emailRes.ok) {
      throw new Error(data.message || 'Error en Resend')
    }

    return { success: true, data }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
    return { success: false, error: errorMessage }
  }
})