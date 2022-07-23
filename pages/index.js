import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hi 👋 !</h1>
      <section className="block mt-8">
        <Image src="/img/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </section>
    </div>
  );
}
