export function fontVariant(variant: string): string {
  switch (variant) {
    case 'h1':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: bold;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: 0.15px;
          `
    case 'h2':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 600;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.15px;
          `
    case 'h3':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.15px;
          `
    case 'h4':
      return ``
    case 'h5':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.25px;
          `
    case 'h6':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 1.25px;
          `
    case 'subtitle1':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.15px;
          `
    case 'subtitle2':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.4px;
          `
    case 'subtitle3':
      return `
          font-family: 'Roboto', 'Arial', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.15px;
          `
    default:
      return `
          font-size: 12px;
          `
  }
}
