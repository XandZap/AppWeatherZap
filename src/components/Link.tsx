import Link from "next/link";

interface props {
  href: string;
  children: React.ReactNode;
}

function LinkLine({ children, href }: props) {
  return (
    <Link className="hover:underline decoration-purple decoration-2" href={href}>
      {children}
    </Link>
  );
}

export default LinkLine;

