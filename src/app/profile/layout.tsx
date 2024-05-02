import SideBar from "./_components/share/SideBar";

export default function Layout({ children }) {
  return (
    <section className="flex ">
      <SideBar />
      <div className="lg:w-[calc(100%_-_300px)] w-full">
        {children}
      </div>
    </section>
  );
}
