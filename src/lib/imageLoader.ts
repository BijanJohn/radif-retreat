export default function imageLoader({ src }: { src: string }) {
  return src.startsWith('/') ? `.${src}` : src;
}
