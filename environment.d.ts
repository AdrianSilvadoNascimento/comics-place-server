declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PUBLIC_KEY: string
      PRIVATE_KEY: string
    }
  }
}

export {}
