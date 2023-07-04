import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src=""
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-3 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl py-2 font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl py-2 font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl text-slate-950">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl py-2">{children}</h4>
    ),
    normal: ({ children }) => (
        <p className="text-gray-600 tracking-wide">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-red-500 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};