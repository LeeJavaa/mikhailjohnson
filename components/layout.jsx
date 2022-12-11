import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar current="main" />
      <main>{children}</main>
    </>
  );
}
