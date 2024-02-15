export default function ColorBoxLayout({ children, left, right }) {
  const isSideBar = false;
  return (
    <section>
      {children}
      {/* {left}
      {right} */}
      {isSideBar ? left : right}
    </section>
  );
}
