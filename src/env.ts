import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUCLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.log(
    'Invalid enviroment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data
