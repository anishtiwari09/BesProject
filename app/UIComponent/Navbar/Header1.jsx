import Link from "next/link";

export default function Header1() {
  return (
    <div>
      <Link className="flex flex-1" href={"/"}>
        <img src={"/Images/Logo/logo.png"} />
      </Link>
    </div>
  );
}
