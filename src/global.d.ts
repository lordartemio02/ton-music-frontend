import { Telegram } from './interfaces/telegram-web-app';

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}
