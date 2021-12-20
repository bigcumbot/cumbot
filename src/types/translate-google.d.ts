declare module 'translate-google' {
  type TranslationOptions = {
    to: string
    from?: string
    except?: string[]
  }

  type GoogleTranslate = {
    (input: string, opts: TranslationOptions, domain?: string): Promise<string>
  }

  const _export: GoogleTranslate

  export = _export
}
