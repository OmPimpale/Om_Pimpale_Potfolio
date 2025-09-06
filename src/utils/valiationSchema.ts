export const EMAIL_PATTERN =
  /^(?!.*\s)(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(?!([a-zA-Z]{2,})\.\1$)([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;

export const NAME_PATTERN = /^(?!\s)[A-Za-z ]{2,255}(?<!\s)$/;

export const MOBILE_PATTERN = /^(?!\s)\d{10}(?<!\s)$/;

export const MESSAGE_PATTERN = /^(?!\s)[\s\S]{10,1000}(?<!\s)$/;

export const SUBJECT_PATTERN =
  /^(?!\s)[A-Za-z0-9&@.,\-() ]{5,255}(?<!\s)(?=.*[A-Za-z])/;