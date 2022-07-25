export function hey(message: string): string {
  return Object.keys(handlers)
    .find(key => handlers[key](message.trim())) ||
    'Whatever.'
}

interface Handlers {
  [key: string]: (message: string) => boolean
}

const handlers: Handlers = {
  'Calm down, I know what I\'m doing!': (message: string) => isYelling(message) && isQuestion(message),
  'Whoa, chill out!': isYelling,
  'Sure.': isQuestion,
  'Fine. Be that way!': isSilent
}

function isQuestion(message: string): boolean {
  return message.endsWith('?')
}

function isYelling(message: string): boolean {
  return message.toUpperCase() === message &&
    message.toLowerCase() !== message
}

function isSilent(message: string): boolean {
  return message.length === 0
}
