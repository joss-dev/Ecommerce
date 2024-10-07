interface NavBarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
